(function () {
  "use strict";
  const Z = window.ZAMANLAR, A = window.ASILAR, D = window.DIGER_ASILAR;
  const hepsi = A.concat(D);
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const kucuk = (d) => "img/kucuk/" + d + ".jpg";
  const tam = (d) => "img/tam/" + d + ".jpg";


  // Basit Markdown görüntüleyici (OCR metinleri için)
  function satirIci(s) {
    return esc(s)
      .replace(/\\\*/g, "&#42;")
      .replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[\s(>\]“"'])\*(?=\S)([^*]+?)\*(?=[\s).,;:!?”"'<\[]|$)/g, "$1<em>$2</em>")
      .replace(/(^|[\s(>])_(?=\S)([^_]+?)_(?=[\s).,;:<]|$)/g, "$1<em>$2</em>")
      .replace(/\[(kesik|okunamadı|\?)\]/g, "<mark class='isaret'>[$1]</mark>");
  }

  function md2html(md) {
    const L = md.replace(/\r/g, "").split("\n");
    let out = [], i = 0;
    while (i < L.length) {
      let l = L[i];
      if (!l.trim()) { i++; continue; }
      let m;
      if ((m = l.match(/^(#{1,4})\s+(.*)/))) { const n = Math.min(m[1].length + 2, 6); out.push("<h" + n + ">" + satirIci(m[2]) + "</h" + n + ">"); i++; continue; }
      if (/^-{3,}\s*$/.test(l)) { out.push("<hr>"); i++; continue; }
      if (/^\|/.test(l)) {
        const rows = []; while (i < L.length && /^\|/.test(L[i])) rows.push(L[i++]);
        const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
        let h = "<div class='md-tablo'><table>";
        rows.forEach((r, k) => { if (/^\|?\s*:?-{2,}/.test(r.replace(/^\|/, ""))) return; const tag = k === 0 ? "th" : "td"; h += "<tr>" + cells(r).map((c) => "<" + tag + ">" + satirIci(c) + "</" + tag + ">").join("") + "</tr>"; });
        out.push(h + "</table></div>"); continue;
      }
      if (/^>/.test(l)) {
        const q = []; while (i < L.length && /^>/.test(L[i])) q.push(L[i++].replace(/^>\s?/, ""));
        out.push("<blockquote>" + md2html(q.join("\n")) + "</blockquote>"); continue;
      }
      if (/^\s*([-*•]|\d+[.)])\s+/.test(l)) {
        const ord = /^\s*\d+[.)]\s+/.test(l); const it = [];
        while (i < L.length && /^\s*([-*•]|\d+[.)])\s+/.test(L[i])) { let t = L[i++].replace(/^\s*([-*•]|\d+[.)])\s+/, ""); while (i < L.length && /^\s{2,}\S/.test(L[i]) && !/^\s*([-*•]|\d+[.)])\s+/.test(L[i])) t += " " + L[i++].trim(); it.push(t); }
        out.push((ord ? "<ol>" : "<ul>") + it.map((t) => "<li>" + satirIci(t) + "</li>").join("") + (ord ? "</ol>" : "</ul>")); continue;
      }
      const p = []; while (i < L.length && L[i].trim() && !/^(#{1,4}\s|\||>|\s*([-*•]|\d+[.)])\s+)/.test(L[i])) p.push(L[i++]);
      out.push("<p>" + p.map(satirIci).join("<br>") + "</p>");
    }
    return out.join("\n");
  }
  const metinOnbellek = {};
  function metinYukle(kutu) {
    const d = kutu.dataset.metin;
    const alan = kutu.querySelector(".metin-govde");
    if (alan.dataset.yuklendi) return;
    alan.dataset.yuklendi = "1";
    const p = metinOnbellek[d] || (metinOnbellek[d] = fetch("metin/" + d + ".md").then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); }));
    p.then((t) => { alan.innerHTML = md2html(t); }).catch(() => { alan.innerHTML = "<p>Metin yüklenemedi.</p>"; });
  }
  document.addEventListener("toggle", (e) => { if (e.target.matches && e.target.matches("details.metin") && e.target.open) metinYukle(e.target); }, true);


  // Takvim tablosu
  const tablo = $("#takvim");
  let h = "<thead><tr><th scope='col'>Aşı</th>" + Z.map((z) => "<th scope='col'>" + esc(z).replace(" ", "<br>") + "</th>").join("") + "</tr></thead><tbody>";
  A.forEach((a) => {
    h += "<tr><th scope='row'><button class='asi-dugme' data-id='" + a.id + "'><strong>" + esc(a.kisa) + "</strong><small>" + esc(a.urun) + "</small></button></th>";
    Z.forEach((z, i) => {
      const d = a.dozlar[i];
      if (d) {
        const yeni = a.id === "vzv" && i === 8;
        h += "<td><button class='doz-dugme" + (d.length > 3 ? " metin" : "") + (yeni ? " yeni" : "") + "' data-id='" + a.id + "' aria-label='" + esc(a.kisa + ", " + z + ": " + d + (yeni ? " (yeni)" : "")) + "'" + (yeni ? " title='1 Eylül 2026 itibarıyla eklenen ikinci doz'" : "") + ">" + esc(d) + "</button></td>";
      } else h += "<td></td>";
    });
    h += "</tr>";
  });
  tablo.innerHTML = h + "</tbody>";

  // Kartlar
  function kart(a) {
    const foto = a.fotolar[0];
    const turler = a.belgeler.map((b) => b.tur);
    const roz = [];
    if (a.fotolar.length) roz.push("<span class='rozet foto'>Fotoğraf</span>");
    if (turler.includes("KÜB")) roz.push("<span class='rozet kub'>KÜB</span>");
    if (turler.includes("KT")) roz.push("<span class='rozet kt'>KT</span>");
    if (!turler.includes("KÜB") && !turler.includes("KT")) roz.push("<span class='rozet yok'>Türkçe PDF yok</span>");
    return "<button class='kart' data-id='" + a.id + "'>" +
      (foto ? "<span class='kart-resim' style=\"background-image:url('" + kucuk(foto.dosya) + "')\"></span>" : "<span class='kart-resim bos'>Fotoğraf gönderilmedi</span>") +
      "<span class='kart-govde'><span class='kart-kisa'>" + esc(a.kisa) + "</span><h3>" + esc(a.urun) + "</h3><p>" + esc(a.ad) + "</p><span class='rozetler'>" + roz.join("") + "</span></span></button>";
  }
  $("#kartlar").innerHTML = A.map(kart).join("");
  $("#diger-kartlar").innerHTML = D.map(kart).join("");


  // İçerik maddeleri
  const IC = window.ICERIK;
  const asiAd = (id) => { const a = hepsi.find((x) => x.id === id); return a ? a.kisa : id; };
  const kaynakSira = [];
  const kaynakNo = (k) => { let i = kaynakSira.indexOf(k); if (i < 0) { kaynakSira.push(k); i = kaynakSira.length - 1; } return i + 1; };
  const atif = (ks) => ks.length ? " <span class='atif'>" + ks.map((k) => "<a href='#kaynak-" + k + "' title='" + esc(IC.kaynaklar[k].ad) + "'>[" + kaynakNo(k) + "]</a>").join("") + "</span>" : "";
  const rozet = (r) => "<span class='kaynak-rozet " + r + "' title='" + ({ F: "Prospektüs fotoğrafı", K: "Firmanın kısa ürün bilgisi", D: "Üreticinin yabancı belgesi veya DSÖ kaynağı" })[r] + "'>" + r + "</span>";
  $("#maddeler").innerHTML = IC.maddeler.map((m) =>
    "<details class='madde' id='madde-" + m.id + "'><summary><span class='madde-ad'>" + esc(m.ad) + "</span><span class='madde-asilar'>" + [...new Set(m.asilar.map((x) => asiAd(x[0])))].map(esc).join(" · ") + "</span></summary><div class='madde-govde'>" +
    "<p class='madde-ne'>" + esc(m.ne) + "</p><h4>Hangi aşılarda</h4><ul class='madde-liste'>" +
    m.asilar.map((x) => "<li><button class='asi-cip' data-id='" + x[0] + "'>" + esc(asiAd(x[0])) + "</button> " + esc(x[1]) + " " + rozet(x[2]) + "</li>").join("") +
    "</ul><h4>Neden soru işareti yaratıyor</h4><p>" + esc(m.soylem) + "</p><h4>Bilimsel bilgi</h4><p>" + esc(m.baglam) + atif(m.kaynak) + "</p></div></details>").join("");
  $("#ifadeler").innerHTML = IC.ifadeler.map((f) =>
    "<div class='ifade'><button class='asi-cip' data-id='" + f.asi + "'>" + esc(asiAd(f.asi)) + "</button><blockquote>“" + esc(f.alinti) + "”</blockquote><p><strong>Neden:</strong> " + esc(f.neden) + "</p>" +
    (f.baglam ? "<p><strong>Bilimsel bilgi:</strong> " + esc(f.baglam) + atif(f.kaynak) + "</p>" : "") + "</div>").join("");
  $("#acik").innerHTML = IC.acik.map((t) => "<li>" + esc(t) + "</li>").join("");
  $("#icerik-kaynakca").innerHTML = kaynakSira.map((k) => "<li id='kaynak-" + k + "'><a href='" + esc(IC.kaynaklar[k].url) + "' target='_blank' rel='noopener'>" + esc(IC.kaynaklar[k].ad) + "</a></li>").join("");
  function asiIcerik(id) {
    const ms = IC.maddeler.filter((m) => m.asilar.some((x) => x[0] === id));
    const fs = IC.ifadeler.filter((f) => f.asi === id);
    if (!ms.length && !fs.length) return "";
    let s = "<h3>İçerik notları</h3><ul class='panel-icerik'>" + ms.map((m) => { const x = m.asilar.find((y) => y[0] === id); return "<li><a class='madde-link' href='#madde-" + m.id + "'>" + esc(m.ad) + "</a>: " + esc(x[1]) + " " + rozet(x[2]) + "</li>"; }).join("") + "</ul>";
    if (fs.length) s += fs.map((f) => "<blockquote class='panel-ifade'>“" + esc(f.alinti) + "”<small>" + esc(f.neden) + " <a class='madde-link' href='#ifade-baslik'>Ayrıntı</a></small></blockquote>").join("");
    return s;
  }
  function maddeAc(hedef) {
    const el = document.getElementById(hedef);
    if (!el) return;
    if (el.tagName === "DETAILS") el.open = true;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }


  // Panel
  const panel = $("#panel"), perde = $("#perde"), icerik = $("#panel-icerik");
  let sonOdak = null;
  function ac(id, gecmis) {
    const a = hepsi.find((x) => x.id === id);
    if (!a) return;
    sonOdak = document.activeElement;
    let s = "<p class='ust-etiket' style='color:var(--mor);font-weight:700;margin:0'>" + esc(a.kisa) + "</p>";
    s += "<h2 id='panel-baslik'>" + esc(a.urun) + "</h2><p class='alt'>" + esc(a.ad) + "</p>";
    if (a.dozlar) {
      s += "<ul class='dozlar' aria-label='Takvimdeki dozlar'>" + Object.keys(a.dozlar).map((i) => "<li><b>" + esc(a.dozlar[i]) + "</b> · " + esc(Z[i]) + "</li>").join("") + "</ul>";
    } else if (a.grup) {
      s += "<ul class='dozlar'><li>" + esc(a.grup) + "</li></ul>";
    }
    s += "<dl class='bilgi'><dt>Ürün adı</dt><dd>" + esc(a.tamAd) + "</dd><dt>Bileşim</dt><dd>" + esc(a.bilesim) + "</dd><dt>Üretici</dt><dd>" + esc(a.uretici) + "</dd><dt>Ruhsat / temsilci</dt><dd>" + esc(a.ruhsat) + "</dd></dl>";
    if (a.fotolar.length) {
      s += "<h3>Prospektüs fotoğrafı</h3><div class='fotolar'>" + a.fotolar.map((f) => "<button class='foto-dugme' data-dosya='" + f.dosya + "' data-baslik='" + esc(a.urun + " · " + f.baslik) + "'><img src='" + kucuk(f.dosya) + "' alt='" + esc(a.urun + " " + f.baslik) + "' loading='lazy'><span>" + esc(f.baslik) + "</span></button>").join("") + "</div>";
    }
    s += asiIcerik(a.id);
    if (a.fotolar.length) { s += "<h3>Prospektüs metni</h3><p class='metin-aciklama'>Fotoğraftan metne aktarıldı ve fotoğrafla karşılaştırıldı. Fotoğrafta kesik ya da okunamayan yerler işaretlidir.</p>" + (a.metinler || a.fotolar).map((f, k) => "<details class='metin' data-metin='" + f.dosya + "'" + (k === 0 ? " open" : "") + "><summary>" + esc(f.baslik) + "<a class='indir' href='metin/" + f.dosya + ".md' download onclick='event.stopPropagation()'>Metni indir</a></summary><div class='metin-govde'><p>Yükleniyor…</p></div></details>").join(""); }
    s += "<h3>Belgeler</h3><ul class='belgeler'>" + a.belgeler.map((b) => "<li class='belge'><a href='" + esc(b.url) + "' target='_blank' rel='noopener'><span class='tur " + esc(b.tur) + "'>" + esc(b.tur) + "</span><span>" + esc(b.ad) + "<small>" + esc(b.kaynak) + (b.tarih ? " · " + esc(b.tarih) : "") + "</small></span></a></li>").join("") + "</ul>";
    if (a.not) s += "<p class='not'>" + esc(a.not) + "</p>";
    icerik.innerHTML = s;
    panel.hidden = false; perde.hidden = false;
    panel.scrollTop = 0;
    icerik.querySelectorAll("details.metin[open]").forEach(metinYukle);
    document.body.style.overflow = "hidden";
    $("#panel-kapat").focus();
    if (!gecmis && location.hash !== "#" + id) history.pushState(null, "", "#" + id);
  }
  function kapat(gecmis) {
    panel.hidden = true; perde.hidden = true;
    document.body.style.overflow = "";
    if (!gecmis && location.hash) history.pushState(null, "", location.pathname + location.search);
    if (sonOdak) sonOdak.focus();
  }
  document.addEventListener("click", (e) => {
    const ml = e.target.closest("a.madde-link");
    if (ml) { e.preventDefault(); const h = ml.getAttribute("href").slice(1); if (!panel.hidden) kapat(true); history.pushState(null, "", "#" + h); setTimeout(() => maddeAc(h), 50); return; }
    const b = e.target.closest("[data-id]");
    if (b) { ac(b.dataset.id); return; }
    const f = e.target.closest(".foto-dugme");
    if (f) buyut(f.dataset.dosya, f.dataset.baslik);
  });
  $("#panel-kapat").addEventListener("click", () => kapat());
  perde.addEventListener("click", () => kapat());

  // Büyüteç
  const buy = $("#buyutec"), alan = $("#buyutec-alan"), img = $("#buyutec-img");
  function buyut(d, baslik) {
    img.src = tam(d); img.alt = baslik;
    $("#buyutec-baslik").textContent = baslik;
    $("#buyutec-ac").href = tam(d);
    alan.classList.remove("yakin"); $("#yakinlas").textContent = "Yakınlaştır";
    buy.hidden = false; $("#buyutec-kapat").focus();
  }
  function yakin() {
    const y = alan.classList.toggle("yakin");
    $("#yakinlas").textContent = y ? "Sığdır" : "Yakınlaştır";
  }
  img.addEventListener("click", yakin);
  $("#yakinlas").addEventListener("click", yakin);
  $("#buyutec-kapat").addEventListener("click", () => { buy.hidden = true; $("#panel-kapat").focus(); });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!buy.hidden) { buy.hidden = true; $("#panel-kapat").focus(); }
    else if (!panel.hidden) kapat();
  });
  function hashAc() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && hepsi.some((x) => x.id === id)) ac(id, true);
    else if (!panel.hidden) kapat(true);
    if (id && !hepsi.some((x) => x.id === id)) setTimeout(() => maddeAc(id), 50);
  }
  window.addEventListener("popstate", hashAc);
  hashAc();
})();

