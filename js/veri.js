// Aşı takvimi ve ürün verileri. Takvim: T.C. Sağlık Bakanlığı, Ulusal Çocukluk Dönemi Aşılama Takvimi (2026), 1 Eylül 2026 itibarıyla.
window.ZAMANLAR = ["Doğum", "2. ay sonu", "4. ay sonu", "6. ay sonu", "9. ay sonu", "12. ay sonu", "18. ay sonu", "24. ay sonu", "48. ay", "13 yaş"];


window.ASILAR = [
 {
  "id": "hepb",
  "kisa": "Hep-B",
  "ad": "Hepatit B aşısı",
  "dozlar": {
   "0": "I"
  },
  "urun": "Bevac",
  "tamAd": "BEVAC 10 mcg/0,5 mL Pediyatrik IM Hepatit B Aşısı",
  "bilesim": "Bir dozda (0,5 mL) 10 mikrogram rekombinant hepatit B yüzey antijeni (HBsAg), alüminyum hidroksite adsorbe.",
  "uretici": "Biological E. Limited (Hindistan)",
  "ruhsat": "Arvatera İlaç San. ve Tic. A.Ş., Sarıyer/İstanbul (ithalatçı)",
  "fotolar": [
   {
    "dosya": "bevac-y1",
    "baslik": "Kısa ürün bilgisi, 1. sayfa"
   },
   {
    "dosya": "bevac-y2",
    "baslik": "Kısa ürün bilgisi, 2. sayfa"
   },
   {
    "dosya": "bevac-ykutu",
    "baslik": "Kutu"
   }
  ],
  "belgeler": [
   {
    "tur": "Diğer",
    "ad": "DSÖ ön yeterlilik kaydı (İngilizce)",
    "url": "https://extranet.who.int/prequal/vaccines/p/bevacr",
    "kaynak": "DSÖ"
   },
   {
    "tur": "Diğer",
    "ad": "Üreticinin Hindistan kısa ürün bilgisi (İngilizce, Eylül 2016)",
    "url": "https://cdsco.gov.in/opencms/resources/UploadCDSCOWeb/2018/UploadSmPC/13happ.pdf",
    "kaynak": "CDSCO"
   }
  ],
  "not": "Kısa ürün bilgisinin iki sayfası ve kutu fotoğraflandı. İthalatçının sitesinde yayımlanmış Türkçe KÜB veya KT yok; metin fotoğraflardan alındı. Kutunun üzerinde \"T.C. Sağlık Bakanlığı malıdır, satılamaz\" yazıyor. Alüminyum ve tiyomersal miktarı fotoğraftaki belgede yok. Üreticinin Hindistan için hazırladığı kısa ürün bilgisine (CDSCO, Eylül 2016) göre 0,5 mL'lik pediyatrik dozda 0,25 mg alüminyum (Al³⁺) ve 0,025 mg (25 µg) tiyomersal bulunur. Türkiye'ye gelen ürünün bileşimi bu belgedekinden farklı olabilir.",
  "metinler": [
   {
    "dosya": "bevac-1",
    "baslik": "Kısa ürün bilgisi, 1. sayfa"
   },
   {
    "dosya": "bevac-2",
    "baslik": "Kısa ürün bilgisi, 2. sayfa"
   }
  ]
 },
 {
  "id": "bcg",
  "kisa": "BCG",
  "ad": "Verem (BCG) aşısı",
  "dozlar": {
   "1": "I"
  },
  "urun": "SII-BCG",
  "tamAd": "BCG Aşısı 1 mL ID, enjeksiyonluk süspansiyon için liyofilize toz içeren çok dozlu flakon (canlı, attenüe)",
  "bilesim": "Bir dozda (0,1 mL) 2 × 10⁵ – 8 × 10⁵ CFU canlı attenüe BCG (Bacillus Calmette-Guérin).",
  "uretici": "Serum Institute of India Pvt. Ltd. (Hindistan)",
  "ruhsat": "Keymen İlaç San. ve Tic. A.Ş. (Türkiye temsilcisi)",
  "fotolar": [
   {
    "dosya": "bcg-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "bcg-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "SII-BCG kısa ürün bilgisi",
    "url": "https://www.keymen.com.tr/files/sii-bcg-kub-onayli-ocak-2018.pdf",
    "kaynak": "Keymen",
    "tarih": "Ocak 2018"
   },
   {
    "tur": "KT",
    "ad": "SII-BCG kullanma talimatı",
    "url": "https://www.keymen.com.tr/files/sii-bcg-kt-onayli-ocak-2018.pdf",
    "kaynak": "Keymen",
    "tarih": "Ocak 2018"
   }
  ],
  "metinler": [
   {
    "dosya": "bcg",
    "baslik": "Kısa ürün bilgisi (iki fotoğraftan birleştirildi)"
   }
  ],
  "not": "Fotoğraflarda kısa ürün bilgisinin 7-10. bölümleri görünmüyor. Bu bölümler Keymen'in yayımladığı KÜB dosyasında var."
 },
 {
  "id": "kpa",
  "kisa": "KPA",
  "ad": "Konjuge pnömokok aşısı",
  "dozlar": {
   "1": "I",
   "2": "II",
   "5": "Rapel"
  },
  "urun": "Prevenar 13",
  "tamAd": "PREVENAR 13 0,5 mL IM enjeksiyon için süspansiyon içeren kullanıma hazır enjektör",
  "bilesim": "13 pnömokok serotipinin (1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 18C, 19A, 19F, 23F) polisakkaritleri, CRM197 taşıyıcı proteine konjuge.",
  "uretici": "Pfizer",
  "ruhsat": "Pfizer PFE İlaçları A.Ş.",
  "fotolar": [
   {
    "dosya": "prevenar13-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "prevenar13-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   },
   {
    "dosya": "prevenar13-y3",
    "baslik": "Kısa ürün bilgisi, fotoğraf 3"
   },
   {
    "dosya": "prevenar13-y4",
    "baslik": "Kısa ürün bilgisi, fotoğraf 4"
   },
   {
    "dosya": "prevenar13-y5",
    "baslik": "Kısa ürün bilgisi, fotoğraf 5"
   },
   {
    "dosya": "prevenar13-y6",
    "baslik": "Kısa ürün bilgisi, fotoğraf 6"
   },
   {
    "dosya": "prevenar13-y7",
    "baslik": "Kısa ürün bilgisi, fotoğraf 7"
   },
   {
    "dosya": "prevenar13-y8",
    "baslik": "Kısa ürün bilgisi, fotoğraf 8"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "Prevenar 13 kısa ürün bilgisi",
    "url": "https://www.pfizer.com.tr/files/Prevenar_13_KUB_18Jan2019-260419.pdf",
    "kaynak": "Pfizer Türkiye",
    "tarih": "2019"
   },
   {
    "tur": "KT",
    "ad": "Prevenar 13 kullanma talimatı",
    "url": "https://www.pfizer.com.tr/files/Prevenar_13_KT_18Jan2019-260419.pdf",
    "kaynak": "Pfizer Türkiye",
    "tarih": "2019"
   }
  ],
  "metinler": [
   {
    "dosya": "prevenar13-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "prevenar13-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   },
   {
    "dosya": "prevenar13-y3",
    "baslik": "Kısa ürün bilgisi, fotoğraf 3"
   },
   {
    "dosya": "prevenar13-y4",
    "baslik": "Kısa ürün bilgisi, fotoğraf 4"
   },
   {
    "dosya": "prevenar13-y5",
    "baslik": "Kısa ürün bilgisi, fotoğraf 5"
   },
   {
    "dosya": "prevenar13-y6",
    "baslik": "Kısa ürün bilgisi, fotoğraf 6"
   },
   {
    "dosya": "prevenar13-y7",
    "baslik": "Kısa ürün bilgisi, fotoğraf 7"
   },
   {
    "dosya": "prevenar13-y8",
    "baslik": "Kısa ürün bilgisi, fotoğraf 8"
   }
  ],
  "not": "Fotoğraflanan KÜB'ün ruhsat yenileme tarihi 09.10.2015. Altıncı fotoğraftaki klinik çalışma tablolarının çoğu okunamadı. Bu bölüm için Pfizer'in 2019 tarihli KÜB'üne bakılabilir; iki sürüm arasında fark olabilir."
 },
 {
  "id": "hexa",
  "kisa": "DaBT-İPA-Hib-HepB",
  "ad": "Altılı karma aşı (difteri, aselüler boğmaca, tetanoz, inaktif polio, Hib, hepatit B)",
  "dozlar": {
   "1": "I",
   "2": "II",
   "3": "III",
   "6": "Rapel"
  },
  "urun": "Hexaxim",
  "tamAd": "HEXAXIM 0,5 mL IM enjeksiyonluk süspansiyon içeren kullanıma hazır enjektör",
  "bilesim": "Difteri ve tetanoz toksoidleri, aselüler boğmaca antijenleri (boğmaca toksoidi, filamentöz hemaglütinin), inaktif poliovirüs tip 1-2-3, hepatit B yüzey antijeni ve tetanoz proteinine konjuge Hib polisakkariti.",
  "uretici": "Sanofi Winthrop Industrie, Val de Reuil (Fransa)",
  "ruhsat": "Sanofi Pasteur Aşı Tic. A.Ş., Şişli/İstanbul (ruhsat sahibi)",
  "fotolar": [
   {
    "dosya": "hexaxim-y1",
    "baslik": "Kullanma talimatı, fotoğraf 1"
   },
   {
    "dosya": "hexaxim-y2",
    "baslik": "Kullanma talimatı, fotoğraf 2"
   },
   {
    "dosya": "hexaxim-y3",
    "baslik": "Kullanma talimatı, fotoğraf 3"
   },
   {
    "dosya": "hexaxim-y4",
    "baslik": "Kullanma talimatı, fotoğraf 4"
   },
   {
    "dosya": "hexaxim-y5",
    "baslik": "Kullanma talimatı, fotoğraf 5"
   },
   {
    "dosya": "hexaxim-y6",
    "baslik": "Kullanma talimatı, fotoğraf 6"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "Hexaxim kısa ürün bilgisi",
    "url": "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/H/hexaxim-0.5-mL-IM-enjeksiyonluk-suspansiyon-iceren-kullanima-hazir-enjektor-KUB-2023-09-25.pdf",
    "kaynak": "Sanofi Türkiye",
    "tarih": "25.09.2023"
   },
   {
    "tur": "KT",
    "ad": "Hexaxim kullanma talimatı",
    "url": "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/H/2026-10-02-Hexaxim-0-5-mL-IM-Enjeksiyonluk-Suspansiyon-Iceren-Kullan-ma-Hazir-Enjektor-MLE-KT.pdf",
    "kaynak": "Sanofi Türkiye",
    "tarih": "02.10.2026"
   }
  ],
  "metinler": [
   {
    "dosya": "hexaxim",
    "baslik": "Kullanma talimatı (altı fotoğraftan birleştirildi)"
   }
  ],
  "not": "Fotoğraflanan kullanma talimatı 20.12.2023 tarihinde onaylanmış. Sanofi'nin sitesindeki kullanma talimatı 02.10.2026 tarihli, daha yeni bir sürüm."
 },
 {
  "id": "opa",
  "kisa": "OPA",
  "ad": "Oral polio aşısı",
  "dozlar": {
   "3": "I",
   "6": "II"
  },
  "urun": "Bivalan Oral Polio",
  "tamAd": "BİVALAN ORAL POLİOMYELİT AŞISI TİP 1 VE 3 (20 dozluk)",
  "bilesim": "Bir dozda (2 damla = 0,1 mL) canlı attenüe poliomyelit virüsü tip 1 (Sabin) en az 10⁶·⁰ CCID50 ve tip 3 (Sabin) en az 10⁵·⁸ CCID50.",
  "uretici": "PT. Bio Farma (Persero), Bandung (Endonezya); üretici ve ruhsat sahibi",
  "ruhsat": "Keymen İlaç San. ve Tic. A.Ş. (Türkiye temsilcisi)",
  "fotolar": [
   {
    "dosya": "bivalan-opa-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "bivalan-opa-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   }
  ],
  "belgeler": [
   {
    "tur": "Diğer",
    "ad": "Keymen ürün sayfası",
    "url": "https://www.keymen.com.tr/Urunler.html",
    "kaynak": "Keymen"
   },
   {
    "tur": "Diğer",
    "ad": "DSÖ ön yeterlilik kaydı (İngilizce)",
    "url": "https://extranet.who.int/prequal/vaccines/p/poliomyelitis-vaccine-oral-bivalent-types-1-and-3-pt-bio-farma-bulk",
    "kaynak": "DSÖ"
   }
  ],
  "not": "Kısa ürün bilgisinin iki yüzü fotoğraflandı (metin revizyon tarihi Mayıs 2020). Keymen'in sitesinde bu ürün için indirilebilir KÜB veya KT yok.",
  "metinler": [
   {
    "dosya": "bivalan-opa",
    "baslik": "Kısa ürün bilgisi"
   }
  ]
 },
 {
  "id": "vzv",
  "kisa": "Suçiçeği",
  "ad": "Suçiçeği (varisella) aşısı",
  "dozlar": {
   "5": "I",
   "8": "II"
  },
  "urun": "Canlı Suçiçeği Aşısı",
  "tamAd": "Canlı Suçiçeği Aşısı (Varicella Vaccine, Live), 1 dozluk (0,5 mL) flakon",
  "bilesim": "Sulandırıldıktan sonra 0,5 mL'lik bir dozda en az 3.3 lg PFU canlı varicella herpes zoster virüsü (Oka suşu). Yardımcı maddeler: sükroz, sodyum glutamat, sodyum klorür, potasyum klorür, disodyum hidrojen fosfat dodekahidrat, potasyum dihidrojen fosfat.",
  "uretici": "Sinovac (Dalian) Vaccine Technology Co., Ltd. (Dalian, Çin)",
  "ruhsat": "Keyvac Biyolojik Ürünler San. ve Tic. A.Ş., Sincan/Ankara (mümessil)",
  "fotolar": [
   {
    "dosya": "sucicegi-y1",
    "baslik": "Kullanma talimatı, fotoğraf 1"
   },
   {
    "dosya": "sucicegi-y2",
    "baslik": "Kullanma talimatı, fotoğraf 2"
   },
   {
    "dosya": "sucicegi-ykutu",
    "baslik": "Kutu"
   }
  ],
  "belgeler": [
   {
    "tur": "Diğer",
    "ad": "DSÖ ön yeterlilik değerlendirme özeti (İngilizce)",
    "url": "https://extranet.who.int/prequal/sites/default/files/vwa_vaccine/pq_378_Varicella_1dose_Sinovac_VPSAR-2022.pdf",
    "kaynak": "DSÖ",
    "tarih": "2022"
   },
   {
    "tur": "Diğer",
    "ad": "TİTCK KÜB/KT sorgulama",
    "url": "https://www.titck.gov.tr/kubkt",
    "kaynak": "TİTCK"
   }
  ],
  "not": "İkinci doz 1 Eylül 2026'dan itibaren 48. ayda yapılıyor. Üretici ve mümessil bilgisi kullanma talimatında ve kutuda yazıyor.",
  "metinler": [
   {
    "dosya": "sucicegi",
    "baslik": "Kullanma talimatı"
   }
  ]
 },
 {
  "id": "kkk",
  "kisa": "KKK",
  "ad": "Kızamık, kızamıkçık, kabakulak aşısı",
  "dozlar": {
   "4": "Ek doz",
   "5": "I",
   "8": "II"
  },
  "urun": "KKK Aşısı (SII)",
  "tamAd": "Kızamık, Kabakulak ve Kızamıkçık Aşısı Canlı, Atenüe (Liyofilize)",
  "bilesim": "0,5 mL'lik bir dozda en az 1000 CCID50 kızamık, 5000 CCID50 kabakulak ve 1000 CCID50 kızamıkçık virüsü. Yardımcı maddeler: kısmi hidrolize jelatin, sorbitol, L-histidin, L-alanin, trisin, L-arjinin hidroklorür, laktalbumin hidrolizat, minimum eser ortam.",
  "uretici": "Serum Institute of India Pvt. Ltd., Pune (Hindistan); üretici ve ruhsat sahibi",
  "ruhsat": "Keymen İlaç San. ve Tic. A.Ş. (Türkiye temsilcisi)",
  "fotolar": [
   {
    "dosya": "kkk-y1",
    "baslik": "Kısa ürün bilgisi, ön yüz"
   },
   {
    "dosya": "kkk-y3",
    "baslik": "Kısa ürün bilgisi, arka yüz"
   }
  ],
  "belgeler": [
   {
    "tur": "Diğer",
    "ad": "Üretici prospektüsü (İngilizce, DSÖ)",
    "url": "https://extranet.who.int/prequal/sites/default/files/vwa_vaccine/pq_142_143_144_145_MMR_SIIPL_PI_UNICEF-2022.pdf",
    "kaynak": "DSÖ",
    "tarih": "2022"
   },
   {
    "tur": "Diğer",
    "ad": "Keymen ürün sayfası",
    "url": "https://www.keymen.com.tr/Urunler.html",
    "kaynak": "Keymen"
   },
   {
    "tur": "Diğer",
    "ad": "TİTCK KÜB/KT sorgulama",
    "url": "https://www.titck.gov.tr/kubkt",
    "kaynak": "TİTCK"
   }
  ],
  "not": "Kısa ürün bilgisinin iki yüzü fotoğraflandı; revizyon tarihi alanı boş bırakılmış. Keymen'in sitesinde bu ürün için indirilebilir KÜB veya KT yok.",
  "metinler": [
   {
    "dosya": "kkk",
    "baslik": "Kısa ürün bilgisi"
   }
  ]
 },
 {
  "id": "hepa",
  "kisa": "Hep-A",
  "ad": "Hepatit A aşısı",
  "dozlar": {
   "6": "I",
   "7": "II"
  },
  "urun": "Healive (pediatrik)",
  "tamAd": "Healive Hepatit A Aşısı (İnsan Diploid Hücresi), İnaktive (Pediatrik), flakon içerisinde enjeksiyonluk süspansiyon",
  "bilesim": "0,5 mL'lik pediatrik dozda 250 U inaktive hepatit A virüs antijeni (TZ84 suşu), alüminyum hidroksite adsorbe.",
  "uretici": "Sinovac Biotech Co., Ltd., Pekin (Çin)",
  "ruhsat": "Keyvac Biyolojik Ürünler San. ve Tic. A.Ş., Sincan/Ankara (mümessil)",
  "fotolar": [
   {
    "dosya": "healive-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "healive-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "Havtec Pediyatrik kısa ürün bilgisi (aynı antijen, enjektör sunumu)",
    "url": "https://www.keymen.com.tr/files/havtec-ped-kub.pdf",
    "kaynak": "Keymen"
   },
   {
    "tur": "Diğer",
    "ad": "DSÖ ön yeterlilik kaydı (İngilizce)",
    "url": "https://extranet.who.int/prequal/vaccines/fvp-p-344",
    "kaynak": "DSÖ"
   }
  ],
  "not": "Fotoğraflanan ürün flakon sunumu (Healive). Aynı üreticinin aynı antijeni içeren enjektör sunumu Türkiye'de Havtec Pediyatrik adıyla Keymen ruhsatlı; bileşimi (250 U, TZ84 suşu, 2BS hücreleri, alüminyum hidroksit) fotoğraftaki belgeyle aynı. İki ürünün tek ruhsat altında olup olmadığı belgelerden anlaşılmıyor.",
  "metinler": [
   {
    "dosya": "healive",
    "baslik": "Kısa ürün bilgisi"
   }
  ]
 },
 {
  "id": "dabtipa",
  "kisa": "DaBT-İPA",
  "ad": "Dörtlü karma aşı (difteri, aselüler boğmaca, tetanoz, inaktif polio)",
  "dozlar": {
   "8": "Rapel"
  },
  "urun": "Tetraxim",
  "tamAd": "TETRAXIM 0,5 mL IM enjeksiyon için süspansiyon içeren kullanıma hazır enjektör",
  "bilesim": "Difteri toksoidi (≥ 20 IU), tetanoz toksoidi (≥ 40 IU), boğmaca toksoidi ve filamentöz hemaglütinin (25'er mikrogram), inaktif poliovirüs tip 1-2-3.",
  "uretici": "Sanofi Pasteur, Marcy l'Etoile (Fransa)",
  "ruhsat": "Sanofi Pasteur Aşı Tic. A.Ş., Şişli/İstanbul (ruhsat sahibi)",
  "fotolar": [
   {
    "dosya": "tetraxim-y1",
    "baslik": "Kullanma talimatı, fotoğraf 1"
   },
   {
    "dosya": "tetraxim-y2",
    "baslik": "Kullanma talimatı, fotoğraf 2"
   },
   {
    "dosya": "tetraxim-y3",
    "baslik": "Kullanma talimatı, fotoğraf 3"
   },
   {
    "dosya": "tetraxim-y4",
    "baslik": "Kullanma talimatı, fotoğraf 4"
   },
   {
    "dosya": "tetraxim-y5",
    "baslik": "Kullanma talimatı, fotoğraf 5"
   },
   {
    "dosya": "tetraxim-y6",
    "baslik": "Kullanma talimatı, fotoğraf 6"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "Tetraxim kısa ürün bilgisi",
    "url": "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/T/tetraxim-kub.pdf",
    "kaynak": "Sanofi Türkiye"
   },
   {
    "tur": "KT",
    "ad": "Tetraxim kullanma talimatı",
    "url": "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/T/tetraxim-kt.pdf",
    "kaynak": "Sanofi Türkiye"
   }
  ],
  "metinler": [
   {
    "dosya": "tetraxim",
    "baslik": "Kullanma talimatı (altı fotoğraftan birleştirildi)"
   }
  ],
  "not": "Fotoğraflanan kullanma talimatı 12.08.2024 tarihinde onaylanmış."
 },
 {
  "id": "td",
  "kisa": "Td",
  "ad": "Erişkin tipi tetanoz-difteri aşısı",
  "dozlar": {
   "9": "Rapel"
  },
  "urun": "Td-VAC",
  "tamAd": "Td-VAC 0,5 mL IM enjeksiyonluk süspansiyon, adsorbe difteri ve tetanoz aşısı",
  "bilesim": "0,5 mL'lik dozda difteri toksoidi ≤ 5 Lf (≥ 2 IU) ve tetanoz toksoidi ≥ 5 Lf (≥ 40 IU), alüminyum fosfata adsorbe.",
  "uretici": "Serum Institute of India Pvt. Ltd., Pune (Hindistan)",
  "ruhsat": "Keymen İlaç San. ve Tic. A.Ş., Çankaya/Ankara (ruhsat sahibi)",
  "fotolar": [
   {
    "dosya": "td-vac-y1",
    "baslik": "Kullanma talimatı, fotoğraf 1"
   },
   {
    "dosya": "td-vac-y2",
    "baslik": "Kullanma talimatı, fotoğraf 2"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "Td-VAC kısa ürün bilgisi",
    "url": "https://www.keymen.com.tr/files/td-vac-kub.pdf",
    "kaynak": "Keymen"
   },
   {
    "tur": "KT",
    "ad": "Td-VAC kullanma talimatı",
    "url": "https://www.keymen.com.tr/files/td-vac-kt.pdf",
    "kaynak": "Keymen",
    "tarih": "27.12.2017"
   }
  ],
  "metinler": [
   {
    "dosya": "td-vac",
    "baslik": "Kullanma talimatı"
   }
  ],
  "not": "Fotoğraflanan kullanma talimatı 27.12.2017 tarihinde onaylanmış; Keymen'in sitesindeki dosya da aynı tarihli."
 }
];

window.DIGER_ASILAR = [
 {
  "id": "tdab",
  "kisa": "Tdab",
  "ad": "Tetanoz, difteri, aselüler boğmaca aşısı (erişkin tipi)",
  "grup": "Gebelere uygulanır (Sağlık Bakanlığı, 2 Nisan 2025 itibarıyla)",
  "urun": "Adacel",
  "tamAd": "ADACEL 0,5 mL IM enjeksiyonluk süspansiyon içeren flakon",
  "bilesim": "Tetanoz toksoidi, azaltılmış miktarda difteri toksoidi ve aselüler boğmaca antijenleri.",
  "uretici": "Sanofi Pasteur Limited, Toronto (Kanada)",
  "ruhsat": "Sanofi Pasteur Aşı Tic. A.Ş., Şişli/İstanbul (ruhsat sahibi)",
  "fotolar": [
   {
    "dosya": "adacel-y1",
    "baslik": "Kullanma talimatı, fotoğraf 1"
   },
   {
    "dosya": "adacel-y2",
    "baslik": "Kullanma talimatı, fotoğraf 2"
   }
  ],
  "belgeler": [
   {
    "tur": "KÜB",
    "ad": "Adacel kısa ürün bilgisi",
    "url": "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/A/adacel-0-5mL-IM-enjeksiyonluk-suspansiyon-iceren-flakon-KUB-2024-01-05.pdf",
    "kaynak": "Sanofi Türkiye",
    "tarih": "05.01.2024"
   },
   {
    "tur": "KT",
    "ad": "Adacel kullanma talimatı",
    "url": "https://www.sanofi.com/assets/countries/turkey/docs/products/prescription-products/A/adacel-0-5mL-IM-enjeksiyonluk-suspansiyon-iceren-flakon-KT-2024-01-05.pdf",
    "kaynak": "Sanofi Türkiye",
    "tarih": "05.01.2024"
   },
   {
    "tur": "Diğer",
    "ad": "Gebelikte Tdab aşısı (Adana İl Sağlık Müdürlüğü)",
    "url": "https://adanaism.saglik.gov.tr/TR-345597/gebelikte-tetanoz-difteri-bogmaca-asisi.html",
    "kaynak": "Sağlık Bakanlığı"
   }
  ],
  "metinler": [
   {
    "dosya": "adacel",
    "baslik": "Kullanma talimatı"
   }
  ],
  "not": "Fotoğraflanan kullanma talimatı 22.10.2024 tarihinde onaylanmış. Sanofi'nin sitesindeki KÜB ve KT 05.01.2024 tarihli, yani fotoğraftaki belgeden eski."
 },
 {
  "id": "men",
  "kisa": "Meningokok",
  "ad": "Meningokok konjuge aşısı (A, C, Y, W, X)",
  "grup": "Risk gruplarında ve hac-umre yolcularında kullanılan meningokok aşısı",
  "urun": "MenFive",
  "tamAd": "MenFive, Konjuge Meningokokal (A,C,Y,W-135,X) Polisakkarit Aşısı (Liyofilize)",
  "bilesim": "0,5 mL'lik dozda A, C, Y, W ve X serogruplarının her birinden 5 µg polisakkarit; A ve X tetanoz toksoidine (7,8–33,4 µg), C, W ve Y CRM197'ye (11,7–50,1 µg) konjuge. Yardımcı maddeler: sükroz, sodyum sitrat dihidrat, Tris tamponu, sodyum klorür, enjeksiyonluk su. Aşıda ve sulandırıcıda koruyucu madde yoktur.",
  "uretici": "Serum Institute of India Pvt. Ltd. (Hindistan)",
  "ruhsat": "Keymen İlaç San. ve Tic. A.Ş. (Türkiye temsilcisi); ruhsat sahibi Serum Institute of India",
  "fotolar": [
   {
    "dosya": "menfive-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "menfive-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   },
   {
    "dosya": "menfive-y3",
    "baslik": "Kısa ürün bilgisi, fotoğraf 3"
   },
   {
    "dosya": "menfive-y4",
    "baslik": "Kısa ürün bilgisi, fotoğraf 4"
   },
   {
    "dosya": "menfive-y5",
    "baslik": "Kısa ürün bilgisi, fotoğraf 5"
   },
   {
    "dosya": "menfive-y6",
    "baslik": "Kısa ürün bilgisi, fotoğraf 6"
   },
   {
    "dosya": "menfive-y7",
    "baslik": "Kısa ürün bilgisi, fotoğraf 7"
   },
   {
    "dosya": "menfive-y8",
    "baslik": "Kısa ürün bilgisi, fotoğraf 8"
   }
  ],
  "belgeler": [
   {
    "tur": "Diğer",
    "ad": "Üretici ürün bilgisi (İngilizce, DSÖ)",
    "url": "https://extranet.who.int/prequal/sites/default/files/sf_files/sf_finishedvaccineproducts/Package%20Insert-pq_427_451_MenFive_SIIPL_PI-PAHO_2023.pdf",
    "kaynak": "DSÖ",
    "tarih": "2023"
   },
   {
    "tur": "Diğer",
    "ad": "DSÖ ön yeterlilik kaydı (İngilizce)",
    "url": "https://extranet.who.int/prequal/vaccines/p/menfivetm",
    "kaynak": "DSÖ"
   },
   {
    "tur": "Diğer",
    "ad": "TİTCK KÜB/KT sorgulama",
    "url": "https://www.titck.gov.tr/kubkt",
    "kaynak": "TİTCK"
   }
  ],
  "not": "Türkçe kısa ürün bilgisinin sekiz fotoğrafı var. Klinik çalışma tablolarında birkaç hücre okunamadı. Revizyon tarihi alanı boş.",
  "metinler": [
   {
    "dosya": "menfive-y1",
    "baslik": "Kısa ürün bilgisi, fotoğraf 1"
   },
   {
    "dosya": "menfive-y2",
    "baslik": "Kısa ürün bilgisi, fotoğraf 2"
   },
   {
    "dosya": "menfive-y3",
    "baslik": "Kısa ürün bilgisi, fotoğraf 3"
   },
   {
    "dosya": "menfive-y4",
    "baslik": "Kısa ürün bilgisi, fotoğraf 4"
   },
   {
    "dosya": "menfive-y5",
    "baslik": "Kısa ürün bilgisi, fotoğraf 5"
   },
   {
    "dosya": "menfive-y6",
    "baslik": "Kısa ürün bilgisi, fotoğraf 6"
   },
   {
    "dosya": "menfive-y7",
    "baslik": "Kısa ürün bilgisi, fotoğraf 7"
   },
   {
    "dosya": "menfive-y8",
    "baslik": "Kısa ürün bilgisi, fotoğraf 8"
   }
  ]
 }
];
