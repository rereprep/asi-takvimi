(function () {
  "use strict";
  const Z = window.ZAMANLAR, A = window.ASILAR, D = window.DIGER_ASILAR;
  const hepsi = A.concat(D);
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const kucuk = (d) => "img/kucuk/" + d + ".jpg";
  const tam = (d) => "img/tam/" + d + ".jpg";

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
    s += "<dl class='bilgi'><dt>Ürün adı</dt><dd>" + esc(a.tamAd) + "</dd><dt>Bileşim</dt><dd>" + esc(a.bilesim) + "</dd><dt>Üretici</dt><dd>" + esc(a.uretici) + "</dd><dt>Ruhsat sahibi</dt><dd>" + esc(a.ruhsat) + "</dd></dl>";
    if (a.fotolar.length) {
      s += "<h3>Prospektüs fotoğrafı</h3><div class='fotolar'>" + a.fotolar.map((f) => "<button class='foto' data-dosya='" + f.dosya + "' data-baslik='" + esc(a.urun + " · " + f.baslik) + "'><img src='" + kucuk(f.dosya) + "' alt='" + esc(a.urun + " " + f.baslik) + "' loading='lazy'><span>" + esc(f.baslik) + "</span></button>").join("") + "</div>";
    }
    s += "<h3>Belgeler</h3><ul class='belgeler'>" + a.belgeler.map((b) => "<li class='belge'><a href='" + esc(b.url) + "' target='_blank' rel='noopener'><span class='tur " + esc(b.tur) + "'>" + esc(b.tur) + "</span><span>" + esc(b.ad) + "<small>" + esc(b.kaynak) + (b.tarih ? " · " + esc(b.tarih) : "") + "</small></span></a></li>").join("") + "</ul>";
    if (a.not) s += "<p class='not'>" + esc(a.not) + "</p>";
    icerik.innerHTML = s;
    panel.hidden = false; perde.hidden = false;
    panel.scrollTop = 0;
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
    const b = e.target.closest("[data-id]");
    if (b) { ac(b.dataset.id); return; }
    const f = e.target.closest(".foto");
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
  }
  window.addEventListener("popstate", hashAc);
  hashAc();
})();

