// Aşı takvimi ve ürün verileri. Takvim: T.C. Sağlık Bakanlığı, Ulusal Çocukluk Dönemi Aşılama Takvimi (2026), 1 Eylül 2026 itibarıyla.
window.ZAMANLAR = ["Doğum", "2. ay sonu", "4. ay sonu", "6. ay sonu", "9. ay sonu", "12. ay sonu", "18. ay sonu", "24. ay sonu", "48. ay", "13 yaş"];

const SANOFI = "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/";

window.ASILAR = [
  {
    id: "hepb", kisa: "Hep-B", ad: "Hepatit B aşısı",
    dozlar: { 0: "I" },
    urun: "Bevac", tamAd: "BEVAC 10 mcg/0,5 mL Pediyatrik IM Hepatit B Aşısı",
    bilesim: "Bir dozda (0,5 mL) 10 mikrogram rekombinant hepatit B yüzey antijeni (HBsAg), alüminyum hidroksite adsorbe.",
    uretici: "Biological E. Limited (Hindistan)", ruhsat: "Arvatera İlaç San. ve Tic. A.Ş. (ithalatçı)",
    fotolar: [
      { dosya: "bevac-1", baslik: "Kısa ürün bilgisi, 1. sayfa" },
      { dosya: "bevac-2", baslik: "Kısa ürün bilgisi, 2. sayfa" }
    ],
    belgeler: [
      { tur: "Diğer", ad: "DSÖ ön yeterlilik kaydı (İngilizce)", url: "https://extranet.who.int/prequal/vaccines/p/bevacr", kaynak: "DSÖ" }
    ],
    not: "İnternette Türkçe KÜB veya KT dosyası bulunamadı; gönderilen iki sayfalık kısa ürün bilgisi ana kaynaktır."
  },
  {
    id: "bcg", kisa: "BCG", ad: "Verem (BCG) aşısı",
    dozlar: { 1: "I" },
    urun: "SII-BCG", tamAd: "BCG Aşısı 1 mL ID, enjeksiyonluk süspansiyon için liyofilize toz içeren çok dozlu flakon (canlı, attenüe)",
    bilesim: "Bir dozda (0,1 mL) 2 × 10⁵ – 8 × 10⁵ CFU canlı attenüe BCG (Bacillus Calmette-Guérin).",
    uretici: "Serum Institute of India Pvt. Ltd. (Hindistan)", ruhsat: "Keymen İlaç San. ve Tic. A.Ş.",
    fotolar: [ { dosya: "bcg", baslik: "Kısa ürün bilgisi (fotoğrafın sağ yarısı; solda Tetraxim talimatının devamı görünüyor)" } ],
    belgeler: [
      { tur: "KÜB", ad: "SII-BCG kısa ürün bilgisi", url: "https://www.keymen.com.tr/files/sii-bcg-kub-onayli-ocak-2018.pdf", kaynak: "Keymen", tarih: "Ocak 2018" },
      { tur: "KT", ad: "SII-BCG kullanma talimatı", url: "https://www.keymen.com.tr/files/sii-bcg-kt-onayli-ocak-2018.pdf", kaynak: "Keymen", tarih: "Ocak 2018" }
    ]
  },
  {
    id: "kpa", kisa: "KPA", ad: "Konjuge pnömokok aşısı",
    dozlar: { 1: "I", 2: "II", 5: "Rapel" },
    urun: "Prevenar 13", tamAd: "PREVENAR 13 0,5 mL IM enjeksiyon için süspansiyon içeren kullanıma hazır enjektör",
    bilesim: "13 pnömokok serotipinin (1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 23F) polisakkaritleri, CRM197 taşıyıcı proteine konjuge.",
    uretici: "Pfizer", ruhsat: "Pfizer PFE İlaçları A.Ş.",
    fotolar: [ { dosya: "prevenar13", baslik: "Kısa ürün bilgisi, 1. sayfa" } ],
    belgeler: [
      { tur: "KÜB", ad: "Prevenar 13 kısa ürün bilgisi", url: "https://www.pfizer.com.tr/files/Prevenar_13_KUB_18Jan2019-260419.pdf", kaynak: "Pfizer Türkiye", tarih: "2019" },
      { tur: "KT", ad: "Prevenar 13 kullanma talimatı", url: "https://www.pfizer.com.tr/files/Prevenar_13_KT_18Jan2019-260419.pdf", kaynak: "Pfizer Türkiye", tarih: "2019" }
    ]
  },
  {
    id: "hexa", kisa: "DaBT-İPA-Hib-HepB", ad: "Altılı karma aşı (difteri, aselüler boğmaca, tetanoz, inaktif polio, Hib, hepatit B)",
    dozlar: { 1: "I", 2: "II", 3: "III", 6: "Rapel" },
    urun: "Hexaxim", tamAd: "HEXAXIM 0,5 mL IM enjeksiyonluk süspansiyon içeren kullanıma hazır enjektör",
    bilesim: "Difteri ve tetanoz toksoidleri, aselüler boğmaca antijenleri (boğmaca toksoidi, filamentöz hemaglütinin), inaktif poliovirüs tip 1-2-3, hepatit B yüzey antijeni ve tetanoz proteinine konjuge Hib polisakkariti.",
    uretici: "Sanofi Pasteur", ruhsat: "Sanofi Pasteur Aşı Tic. A.Ş.",
    fotolar: [ { dosya: "hexaxim", baslik: "Kullanma talimatı, 1. sayfa" } ],
    belgeler: [
      { tur: "KÜB", ad: "Hexaxim kısa ürün bilgisi", url: SANOFI + "H/hexaxim-0.5-mL-IM-enjeksiyonluk-suspansiyon-iceren-kullanima-hazir-enjektor-KUB-2023-09-25.pdf", kaynak: "Sanofi Türkiye", tarih: "25.09.2023" },
      { tur: "KT", ad: "Hexaxim kullanma talimatı", url: SANOFI + "H/2026-10-02-Hexaxim-0-5-mL-IM-Enjeksiyonluk-Suspansiyon-Iceren-Kullan-ma-Hazir-Enjektor-MLE-KT.pdf", kaynak: "Sanofi Türkiye", tarih: "02.10.2026" }
    ]
  },
  {
    id: "opa", kisa: "OPA", ad: "Oral polio aşısı",
    dozlar: { 3: "I", 6: "II" },
    urun: "Bivalan Oral Polio", tamAd: "BİVALAN ORAL POLİOMYELİT AŞISI TİP 1 VE 3 (20 dozluk)",
    bilesim: "Bir dozda (2 damla = 0,1 mL) canlı attenüe poliomyelit virüsü tip 1 (Sabin) en az 10⁶·⁰ CCID50 ve tip 3 (Sabin) en az 10⁵·⁸ CCID50.",
    uretici: "PT Bio Farma (Endonezya)", ruhsat: "Keymen İlaç San. ve Tic. A.Ş. (Türkiye temsilcisi)",
    fotolar: [ { dosya: "bivalan-opa", baslik: "Kısa ürün bilgisi" } ],
    belgeler: [
      { tur: "Diğer", ad: "Keymen ürün sayfası", url: "https://www.keymen.com.tr/Urunler.html", kaynak: "Keymen" },
      { tur: "Diğer", ad: "DSÖ ön yeterlilik kaydı (İngilizce)", url: "https://extranet.who.int/prequal/vaccines/p/poliomyelitis-vaccine-oral-bivalent-types-1-and-3-pt-bio-farma-bulk", kaynak: "DSÖ" }
    ],
    not: "Firma sitesinde indirilebilir KÜB/KT dosyası bulunamadı; gönderilen kısa ürün bilgisi ana kaynaktır."
  },
  {
    id: "vzv", kisa: "Suçiçeği", ad: "Suçiçeği (varisella) aşısı",
    dozlar: { 5: "I", 8: "II" },
    urun: "Canlı Suçiçeği Aşısı", tamAd: "Canlı Suçiçeği Aşısı (tek dozluk flakon, steril)",
    bilesim: "Sulandırıldıktan sonra 0,5 mL'lik bir dozda en az 3,3 lg PFU canlı varisella zoster virüsü (Oka suşu).",
    uretici: "Gönderilen belgede görünmüyor", ruhsat: "Gönderilen belgede görünmüyor",
    fotolar: [ { dosya: "sucicegi", baslik: "Kullanma talimatı, 1. sayfa" } ],
    belgeler: [
      { tur: "Diğer", ad: "TİTCK KÜB/KT sorgulama", url: "https://www.titck.gov.tr/kubkt", kaynak: "TİTCK" }
    ],
    not: "1 Eylül 2026'dan itibaren ikinci doz 48. ayda uygulanıyor. Bu ürünün üreticisi doğrulanamadı; TİTCK'deki Varivax belgesi farklı bir ürüne ait olduğu için buraya eklenmedi."
  },
  {
    id: "kkk", kisa: "KKK", ad: "Kızamık, kızamıkçık, kabakulak aşısı",
    dozlar: { 4: "Ek doz", 5: "I", 8: "II" },
    urun: "KKK Aşısı (MMR)", tamAd: "Kızamık, Kabakulak ve Kızamıkçık Aşısı Canlı, Atenüe (Liyofilize)",
    bilesim: "0,5 mL'lik bir dozda en az 1000 CCID50 kızamık, 5000 CCID50 kabakulak ve 1000 CCID50 kızamıkçık virüsü.",
    uretici: "Gönderilen belgede görünmüyor", ruhsat: "Gönderilen belgede görünmüyor",
    fotolar: [ { dosya: "kkk", baslik: "Kısa ürün bilgisi, 1. sayfa" } ],
    belgeler: [
      { tur: "Diğer", ad: "Keymen ürün sayfası (Canlı Attenüe Kızamık Kızamıkçık Kabakulak Aşısı)", url: "https://www.keymen.com.tr/Urunler.html", kaynak: "Keymen" },
      { tur: "Diğer", ad: "TİTCK KÜB/KT sorgulama", url: "https://www.titck.gov.tr/kubkt", kaynak: "TİTCK" }
    ],
    not: "Bileşim, Serum Institute of India'nın KKK aşısıyla (Türkiye'de Keymen) uyumlu, ancak gönderilen sayfada üretici adı görünmediği için bu eşleşme kesin değildir."
  },
  {
    id: "hepa", kisa: "Hep-A", ad: "Hepatit A aşısı",
    dozlar: { 6: "I", 7: "II" },
    urun: "Healive (pediatrik)", tamAd: "Healive Hepatit A Aşısı (İnsan Diploid Hücresi), İnaktive (Pediatrik), flakon içerisinde enjeksiyonluk süspansiyon",
    bilesim: "0,5 mL'lik pediatrik dozda 250 U inaktive hepatit A virüs antijeni (TZ84 suşu), alüminyum hidroksite adsorbe.",
    uretici: "Sinovac Biotech Co., Ltd. (Çin)", ruhsat: "Gönderilen belgede görünmüyor",
    fotolar: [ { dosya: "healive", baslik: "Kısa ürün bilgisi" } ],
    belgeler: [
      { tur: "Diğer", ad: "DSÖ ön yeterlilik kaydı (İngilizce)", url: "https://extranet.who.int/prequal/vaccines/fvp-p-344", kaynak: "DSÖ" }
    ],
    not: "İnternette Türkçe KÜB veya KT dosyası bulunamadı; gönderilen kısa ürün bilgisi ana kaynaktır."
  },
  {
    id: "dabtipa", kisa: "DaBT-İPA", ad: "Dörtlü karma aşı (difteri, aselüler boğmaca, tetanoz, inaktif polio)",
    dozlar: { 8: "Rapel" },
    urun: "Tetraxim", tamAd: "TETRAXIM 0,5 mL IM enjeksiyon için süspansiyon içeren kullanıma hazır enjektör",
    bilesim: "Difteri toksoidi (≥ 20 IU), tetanoz toksoidi (≥ 40 IU), boğmaca toksoidi ve filamentöz hemaglütinin (25'er mikrogram), inaktif poliovirüs tip 1-2-3.",
    uretici: "Sanofi Pasteur", ruhsat: "Sanofi Pasteur Aşı Tic. A.Ş.",
    fotolar: [ { dosya: "tetraxim", baslik: "Kullanma talimatı, 1. sayfa" } ],
    belgeler: [
      { tur: "KÜB", ad: "Tetraxim kısa ürün bilgisi", url: SANOFI + "T/tetraxim-kub.pdf", kaynak: "Sanofi Türkiye" },
      { tur: "KT", ad: "Tetraxim kullanma talimatı", url: SANOFI + "T/tetraxim-kt.pdf", kaynak: "Sanofi Türkiye" }
    ]
  },
  {
    id: "td", kisa: "Td", ad: "Erişkin tipi tetanoz-difteri aşısı",
    dozlar: { 9: "Rapel" },
    urun: "Td-VAC", tamAd: "Td-VAC 0,5 mL IM enjeksiyonluk süspansiyon, adsorbe difteri ve tetanoz aşısı",
    bilesim: "0,5 mL'lik dozda difteri toksoidi ≤ 5 Lf (≥ 2 IU) ve tetanoz toksoidi ≥ 5 Lf (≥ 40 IU), alüminyum fosfata adsorbe.",
    uretici: "Serum Institute of India Pvt. Ltd. (Hindistan)", ruhsat: "Keymen İlaç San. ve Tic. A.Ş.",
    fotolar: [ { dosya: "td-vac", baslik: "Kullanma talimatı, 1. sayfa" } ],
    belgeler: [
      { tur: "KÜB", ad: "Td-VAC kısa ürün bilgisi", url: "https://www.keymen.com.tr/files/td-vac-kub.pdf", kaynak: "Keymen" },
      { tur: "KT", ad: "Td-VAC kullanma talimatı", url: "https://www.keymen.com.tr/files/td-vac-kt.pdf", kaynak: "Keymen", tarih: "27.12.2017" }
    ]
  }
];

// Çocukluk takviminde olmayan, gönderilen listede adı geçen aşılar
window.DIGER_ASILAR = [
  {
    id: "tdab", kisa: "Tdab", ad: "Tetanoz, difteri, aselüler boğmaca aşısı (erişkin tipi)",
    grup: "Gebelere önerilir (Sağlık Bakanlığı erişkin aşı uygulamaları)",
    urun: "Adacel", tamAd: "ADACEL 0,5 mL IM enjeksiyonluk süspansiyon içeren flakon",
    bilesim: "Tetanoz toksoidi, azaltılmış miktarda difteri toksoidi ve aselüler boğmaca antijenleri.",
    uretici: "Sanofi Pasteur Limited (Toronto, Kanada)", ruhsat: "Sanofi Pasteur Aşı Tic. A.Ş.",
    fotolar: [],
    belgeler: [
      { tur: "KÜB", ad: "Adacel kısa ürün bilgisi", url: SANOFI + "A/adacel-0-5mL-IM-enjeksiyonluk-suspansiyon-iceren-flakon-KUB-2024-01-05.pdf", kaynak: "Sanofi Türkiye", tarih: "05.01.2024" },
      { tur: "KT", ad: "Adacel kullanma talimatı", url: SANOFI + "A/adacel-0-5mL-IM-enjeksiyonluk-suspansiyon-iceren-flakon-KT-2024-01-05.pdf", kaynak: "Sanofi Türkiye", tarih: "05.01.2024" },
      { tur: "Diğer", ad: "Gebelikte Tdab aşısı (Adana İl Sağlık Müdürlüğü)", url: "https://adanaism.saglik.gov.tr/TR-345597/gebelikte-tetanoz-difteri-bogmaca-asisi.html", kaynak: "Sağlık Bakanlığı" }
    ],
    not: "Prospektüs fotoğrafı gönderilmedi; belgeler ruhsat sahibinin sitesinden alındı."
  },
  {
    id: "men", kisa: "Meningokok", ad: "Meningokok konjuge aşısı (A, C, Y, W, X)",
    grup: "Risk grubundaki erişkinlere önerilir (Sağlık Bakanlığı erişkin aşı uygulamaları)",
    urun: "MenFive", tamAd: "MenFive meningokok A, C, Y, W ve X polisakkarit konjuge aşısı (liyofilize)",
    bilesim: "A, C, Y, W ve X serogruplarının taşıyıcı proteinlere konjuge polisakkaritleri.",
    uretici: "Serum Institute of India Pvt. Ltd. (Hindistan)", ruhsat: "Doğrulanamadı",
    fotolar: [],
    belgeler: [
      { tur: "Diğer", ad: "Üretici ürün bilgisi (İngilizce, DSÖ)", url: "https://extranet.who.int/prequal/sites/default/files/sf_files/sf_finishedvaccineproducts/Package%20Insert-pq_427_451_MenFive_SIIPL_PI-PAHO_2023.pdf", kaynak: "DSÖ", tarih: "2023" },
      { tur: "Diğer", ad: "DSÖ ön yeterlilik kaydı (İngilizce)", url: "https://extranet.who.int/prequal/vaccines/p/menfivetm", kaynak: "DSÖ" },
      { tur: "Diğer", ad: "TİTCK KÜB/KT sorgulama", url: "https://www.titck.gov.tr/kubkt", kaynak: "TİTCK" }
    ],
    not: "Prospektüs fotoğrafı gönderilmedi ve Türkçe KÜB/KT bulunamadı. Yabancı belgedeki yaş ve endikasyonlar Türkiye onayı yerine geçmez."
  }
];

