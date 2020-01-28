define({
  "viewer": {
    "loading": {
      "step1": "MEMUAT CERITA",
      "step2": "MEMUAT DATA",
      "step3": "MENGINISIALISASI",
      "fail": "Maaf, pemuatan Geser Cepat gagal",
      "loadBuilder": "BERALIH KE MODE PENYUSUN",
      "redirectSignIn": "MENGALIHKAN KE HALAMAN MASUK",
      "redirectSignIn2": "(Anda akan dialihkan ke sini setelah masuk)",
      "failButton": "Coba lagi"
    },
    "errors": {
      "boxTitle": "Terjadi kesalahan",
      "portalSelf": "Kesalahan fatal: Gagal mendapatkan konfigurasi portal",
      "invalidConfig": "Kesalahan fatal: Konfigurasi tidak valid",
      "invalidConfigNoWebmap": "Kesalahan fatal: Konfigurasi tidak valid (peta web atau pengenal aplikasi tidak ditentukan di index.html)",
      "invalidConfigNoAppDev": "Tidak ada pengenal Aplikasi Pemetaan Web atau peta web yang ditentukan di parameter URL (?appid= atau ?webmap=). Pada mode pengembangan, konfigurasi appid dan peta web di index.html diabaikan.",
      "createMap": "Tidak dapat membuat peta",
      "invalidApp": "Kesalahan fatal: Cerita tidak dapat dimuat",
      "initMobile": "Selamat datang ke aplikasi web geser cepat. Aplikasi tersebut belum dikonfigurasikan. Penyusun interaktif tidak didukung pada perangkat seluler.",
      "initMobile2": "Penyusun Geser Cepat tidak didukung pada ukuran layar ini. Jika memungkinkan, ubah ukuran browser Anda untuk mengakses penyusun atau buat cerita Anda pada perangkat dengan layar yang lebih besar.",
      "initMobile3": "Putar posisi perangkat Anda ke orientasi lanskap untuk menggunakan penyusun Geser Cepat.",
      "noBuilderIE8": "Penyusun interaktif Geser Cepat belum didukung pada Internet Explorer sebelum versi 9.",
      "noViewerIE2": "Anda mencoba melihat cerita ini menggunakan browser yang lama dan tidak didukung. Mungkin ada fitur yang tidak berfungsi atau masalah yang tidak terduga lainnya. Sebaiknya Anda memperbaruinya ke Internet Explorer 11 atau gunakan browser lain, seperti Chrome.",
      "noViewerIE3": "Di akhir 2017, cerita ini tidak akan dimuat lagi di browser ini. Pada saat itu, Anda harus menggunakan browser yang didukung untuk melihat cerita ini.",
      "attention": "Perhatian!",
      "noLayerView": "Selamat datang di aplikasi web Geser Cepat. <br / >Aplikasi tersebut belum dikonfigurasikan.",
      "appSave": "Kesalahan saat menyimpan cerita web",
      "mapSave": "Kesalahan saat menyimpan peta web",
      "notAuthorized": "Anda tidak diizinkan untuk mengakses cerita ini.",
      "notAuthorizedBuilder": "Anda tidak berwenang untuk menggunakan penyusun Geser Cepat dan Teropong.",
      "conflictingProjectionsTitle": "Proyeksi yang Berkonflik",
      "conflictingProjections": "Geser Cepat tidak mendukung penggunaan dua peta web dengan proyeksi yang berbeda. Buka pengaturan dan gunakan peta web yang menggunakan proyeksi yang sama dengan peta web pertama.",
      "cpButton": "Tutup",
      "unspecifiedConfigOwner": "Pemilik sah belum dikonfigurasikan.",
      "invalidConfigOwner": "Pemilik cerita belum disahkan."
    },
    "mobileView": {
      "hideIntro": "SEMBUNYIKAN PENGANTAR",
      "navLeft": "Legenda",
      "navMap": "Peta",
      "navRight": "Data"
    },
    "desktopView": {
      "storymapsText": "Story Map",
      "builderButton": "Pindah ke mode penyusun",
      "facebookTooltip": "Bagikan ke Facebook",
      "twitterTooltip": "Bagikan ke Twitter",
      "bitlyTooltip": "Dapatkan tautan pendek",
      "tooltipAutoplayDisabled": "Tidak tersedia pada mode pemutaran otomatis",
      "autoplayLabel": "Mode pemutaran otomatis",
      "autoplayExplain1": "Mode pemutaran otomatis akan berputar seiring cerita Anda pada interval reguler. Interval ini ideal pada monitor layar kios atau publik, namun perlu diperhatikan bahwa dalam situasi lainnya, cerita mungkin akan lebih sulit dibaca. Fitur ini tidak didukung pada layar kecil.",
      "autoplayExplain2": "Saat mode ini aktif, ada beberapa kontrol untuk memutar/menjeda cerita dan mengatur kecepatan navigasi."
    },
    "bannerNotification": {
      "learnMore": "Pelajari Lebih Lanjut",
      "close": "Tutup",
      "dontShowAgain": "Jangan tampilkan pesan ini lagi"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Pesan Penting mengenai Keamanan Web dan Story Map",
      "s1h1": "Esri sedang meningkatkan keamanan Story Map",
      "s1p1": "Story Map Anda berada di web, dan komunitas web selalu berupaya membangun dan mengimplementasikan keamanan yang lebih baik. HTTPS, yang menyediakan koneksi aman untuk konten yang ditransmisikan melalui internet, berkembang sebagai cara yang harapkan untuk mengakses konten web. Sebagian besar browser modern sekarang memperlihatkan pesan peringatan jika yang digunakan adalah HTTP, bukan HTTPS. Karena standar yang berkembang ini, mulai dari pembaruan Juni 2018 untuk ArcGIS Online, Story Map Anda harus menggunakan HTTPS.",
      "s1p2": "Praktisnya, ini berarti Story Map dan semua kontennya (termasuk gambar, layer, aplikasi yang disematkan, dan situs web) harus diakses menggunakan tautan yang diawali dengan HTTPS, bukan HTTP. Ini memastikan pengalaman terbaik bagi pembaca Anda karena sebagai besar browser web akan menunjukkan bahwa cerita Anda aman.",
      "s2h1": "Apa yang harus saya lakukan?",
      "s2p1": "Esri sedang berupaya membuat ini menjadi transisi yang mudah bagi penulis dan pembaca Story Map. Alat sekarang tersedia di builder Story Map dan Cerita Saya yang membantu Anda menemukan konten tidak aman (HTTP) dalam cerita Anda dan memberi rekomendasi cara menanganinya. Harap periksa cerita Anda untuk mengetahui konten tidak aman dan perbarui ke HTTPS sebelum Juni 2018.",
      "action1": "Tutup",
      "action2": "Periksa cerita saya sekarang",
      "action3": "Pelajari lebih lanjut"
    },
    "licenseChange2018": {
      "noAccess": "Akun Anda (%USER_NAME%) tidak dilisensikan untuk membuka Peta Cerita yang bukan bersifat publik.  Harap minta administrator organisasi Anda untuk menetapkan Anda jenis pengguna yang menyertakan Peta Cerita atau lisensi add-on Essential App."
    }
  },
  "builder": {
    "builder": {
      "panelHeader": "KONFIGURASI CERITA",
      "buttonSave": "SIMPAN",
      "buttonHelp": "Bantuan",
      "buttonShare": "Bagikan",
      "buttonDiscard": "BATAL",
      "buttonSettings": "Pengaturan",
      "buttonView": "Mode Tampilan",
      "buttonItem": "Buka item Aplikasi Web",
      "noPendingChange": "Tidak ada perubahan tertangguhkan",
      "unSavedChangeSingular": "1 perubahan belum disimpan",
      "unSavedChangePlural": "perubahan belum disimpan",
      "popoverDiscard": "Anda yakin ingin membuang perubahan yang belum disimpan?",
      "yes": "Ya",
      "no": "Tidak",
      "popoverOpenViewExplain": "Dengan membuka penampil, Anda akan membuang semua perubahan yang belum disimpan",
      "popoverOpenViewOk": "Oke",
      "popoverOpenViewCancel": "Batal",
      "popoverSaveWhenDone": "Jangan lupa menyimpan saat Anda telah selesai",
      "closeWithPendingChange": "Anda yakin ingin mengonfirmasi tindakan ini? Perubahan Anda akan hilang.",
      "gotIt": "Oke",
      "savingApplication": "Menyimpan cerita",
      "saveSuccess": "Cerita disimpan",
      "saveError": "Gagal menyimpan. Harap coba lagi.",
      "saveError2": "Penyimpanan gagal karena tag html pada nama atau deskripsi tidak valid",
      "saveError3": "Judul tidak boleh kosong",
      "signIn": "Harap masuk dengan akun di",
      "signInTwo": "untuk menyimpan cerita."
    },
    "header": {
      "editMe": "Edit saya!",
      "templateTitle": "Tentukan judul templat",
      "templateSubtitle": "Tentukan subjudul pola dasar"
    },
    "settings": {
      "settingsHeader": "Pengaturan cerita",
      "modalCancel": "Batal",
      "modalApply": "Terapkan"
    },
    "settingsColors": {
      "settingsTabColor": "Tema",
      "settingsColorExplain": "Pilih tema aplikasi atau tetapkan warna Anda sendiri.",
      "settingsLabelColor": "Warna latar belakang header dan panel sisi"
    },
    "settingsHeader": {
      "settingsTabLogo": "Header",
      "settingsLogoExplain": "Sesuaikan logo header (maksimum 250 x 50 px).",
      "settingsLogoEsri": "Logo Esri",
      "settingsLogoNone": "Tanpa logo",
      "settingsLogoCustom": "Logo kustom",
      "settingsLogoCustomPlaceholder": "URL gambar",
      "settingsLogoCustomTargetPlaceholder": "Tautan klik tayang",
      "settingsLogoSocialExplain": "Sesuaikan tautan kanan atas header.",
      "settingsLogoSocialText": "Teks",
      "settingsLogoSocialLink": "Tautan",
      "settingsLogoSocialDisabled": "Fitur ini telah dinonaktifkan oleh Administrator"
    },
    "settingsExtent": {
      "settingsTabExtent": "Jangkauan",
      "settingsExtentExplain": "Atur jangkauan awal melalui peta interaktif di bawah.",
      "settingsExtentExplainBottom": "Jangkauan yang Anda tetapkan akan mengubah jangkauan awal peta web. Perhatikan bahwa jika Anda sedang mengerjakan rangkaian geser cepat, jangkauan itu tidak akan digunakan.",
      "settingsExtentDateLineError": "Jangkauan tidak dapat melintasi meridian garis bujur 180ï¿½",
      "settingsExtentDateLineError2": "Kesalahan saat menghitung jangkauan",
      "settingsExtentDrawBtn": "Gambar jangkauan baru",
      "settingsExtentModifyBtn": "Edit jangkauan saat ini",
      "settingsExtentApplyBtn": "Terapkan pada peta utama",
      "settingsExtentUseMainMap": "Gunakan jangkauan peta utama"
    },
    "storyTellerUserType": {
      "notCreatorError": "Akun Anda (%USER_NAME%) tidak dilisensikan untuk menggunakan builder Story Map Classic. Harap minta administrator organisasi Anda untuk menetapkan Anda jenis pengguna Creator."
    }
  },
  "swipe": {
    "mobileData": {
      "noData": "Tidak ada data untuk ditampilkan!",
      "noDataExplain": "Ketuk peta untuk memilih fitur dan kembali ke sini",
      "noDataMap": "Tidak ada data untuk peta ini",
      "noPopup": "Tidak ada pop-up yang ditemukan untuk fitur ini"
    },
    "mobileLegend": {
      "noLegend": "Tidak ada legenda untuk ditampilkan."
    },
    "swipeSidePanel": {
      "editTooltip": "Atur deskripsi panel sisi",
      "editMe": "Edit saya!",
      "legendTitle": "Legenda"
    },
    "infoWindow": {
      "noFeature": "Tidak ada data untuk ditampilkan",
      "noFeatureExplain": "Ketuk peta untuk memilih fitur"
    },
    "settingsLayout": {
      "settingsTabLayout": "Gaya Geser Cepat",
      "settingsLayoutExplain": "Pilih gaya untuk alat geser cepat.",
      "settingsLayoutSwipe": "Bilah vertikal",
      "settingsLayoutSpyGlass": "Teropong",
      "settingsLayoutSelected": "Tata letak terpilih",
      "settingsLayoutSelect": "Pilih tata letak ini",
      "settingsSaveConfirm": "Beberapa perubahan mengharuskan Anda untuk menyimpan dan memuat ulang cerita"
    },
    "settingsDataModel": {
      "settingsTabDataModel": "Tipe Geser Cepat",
      "settingsDataModelExplainSwipe": "Apa yang Anda inginkan untuk digeser cepat oleh pengguna?",
      "settingsDataModelExplainSwipe2": "",
      "settingsDataModelExplainSpyGlass": "Pilih lapisan atau peta web yang akan muncul di teropong.",
      "settingsDataModelOneMap": "Lapisan dalam peta web",
      "settingsDataModel1Explain": "Pilih lapisan yang ingin Anda geser cepat",
      "settingsDataModel1Warning": "Jika lapisan disembunyikan oleh lapisan teratas, geser cepat tidak akan berdampak apa pun.",
      "settingsDataModel1SpyGlassExplain": "Pilih lapisan untuk dimunculkan dalam teropong.",
      "settingsDataModelTwoMaps": "Dua peta web",
      "settingsDataModelLayerIds": "ID lapisan peta Web",
      "settingsDataModelSelected": "Tipe yang Dipilih",
      "settingsDataModelWebmapSwipeId1": "ID Peta web kanan",
      "settingsDataModelWebmapSwipeId2": "ID Peta web kiri",
      "settingsDataModelWebmapGlassId1": "ID Peta web utama",
      "settingsDataModelWebmapGlassId2": "ID Peta web Teropong",
      "settingsDataModelSelect": "Pilih tipe ini",
      "settingsDataModel2Explain": "Geser cepat dengan peta web lainnya.",
      "settingsDataModel2SpyGlassExplain": "Tunjukkan peta web lainnya.",
      "settingsDataModel2HelpTitle": "Bagaimana cara menemukan ID peta web?",
      "settingsDataModel2HelpContent": "Salin dan tempel angka setelah tanda '=' pada URL dari peta web",
      "switchMaps": "Alihkan peta",
      "browseWebMaps": "Telusuri peta web"
    },
    "settingsLegend": {
      "settingsTabLegend": "Tata Letak Aplikasi",
      "settingsLegendExplain": "Pilih pengaturan tata letak.",
      "settingsLegendEnable": "Aktifkan Legenda",
      "settingsDescriptionEnable": "Aktifkan Deskripsi",
      "settingsBookmarksEnable": "Aktifkan rangkaian Geser cepat",
      "settingsPopupDisable": "Aktifkan pop-up",
      "settingsLocationSearchEnable": "Aktifkan pencarian pelokasi",
      "settingsGeolocatorEnable": "Aktifkan geolocator",
      "settingsLegendHelpContent": "Untuk memperbaiki konten legenda, gunakan daftar isi penampil peta web ArcGIS (Sembunyikan di Legenda)",
      "settingsSeriesHelpContent": "Rangkaian Geser cepat adalah opsi navigasi menggunakan tab yang akan memandu pemirsa ke jangkauan khusus serta menampilkan teks judul dan deskripsi pada panel sisi. Selama aktivasi awal, markah buku dari peta web akan diimpor dan digunakan untuk melakukan pra-populasi bilah rangkaian. Dengan menonaktifkan opsi rangkaian maka bilah rangkaian akan mati, tetapi konfigurasi rangkaian akan dipertahankan untuk penggunaan selanjutnya.",
      "settingsSeriesHelpContent2": "Rangkaian geser cepat memungkinkan Anda untuk membuat dan mengedit pilihan lokasi dengan judul dan teks yang menyertainya. Jika peta web Anda memiliki markah buku, ini akan ditampilkan. Anda dapat menonaktifkan rangkaian tersebut, tetapi konfigurasi akan dipertahankan untuk penggunaan selanjutnya.",
      "settingsSeriesHelpLink": "Lihat contoh aplikasi dengan rangkaian geser cepat di sini",
      "preview": "Pratinjau UI",
      "settingsLocateButtonExplain": "Didukung di sebagian besar browser. Hanya muncul ketika peta cerita diakses melalui HTTPS. Tidak akan muncul jika cerita disematkan.",
      "settingsLocateButton": "Aktifkan tombol 'Temukan' pada browser yang didukung",
      "settingsAddressSearch": "Aktifkan alat pencarian alamat"
    },
    "settingsSwipePopup": {
      "settingsSwipePopup": "Pop-up",
      "settingsSwipePopupExplain": "Sesuaikan tampilan header pop-up untuk membantu pengguna mengaitkan pop-up dengan lapisan peta.",
      "settingsSwipePopupSwipe1": "Peta Kiri",
      "settingsSwipePopupSwipe2": "Peta Kanan",
      "settingsSwipePopupGlass1": "Peta Utama",
      "settingsSwipePopupGlass2": "Peta Teropong",
      "settingsSwipePopupTitle": "Judul Header",
      "settingsSwipePopupColor": "Warna Header"
    },
    "initPopup": {
      "initHeader": "Selamat datang di Penyusun Geser Cepat/Teropong",
      "modalNext": "Berikutnya",
      "modalPrev": "Sebelumnya",
      "modalApply": "Buka aplikasi"
    },
    "seriesPanel": {
      "title": "Judul",
      "descr": "Deskripsi",
      "discard": "Buang Markah Buku",
      "saveExtent": "Atur Jangkauan Markah Buku",
      "discardDisabled": "Anda tidak dapat menghapus markah buku tersebut. Rangkaian geser cepat dapat dinonaktifkan di Pengaturan."
    },
    "helpPopup": {
      "title": "Bantuan",
      "close": "Tutup",
      "tab1": {
        "div1": "Pola dasar Geser Cepat/Teropong dirancang untuk membandingkan dua peta web terpisah atau dua lapisan dari peta web tunggal dalam sebuah aplikasi web yang atraktif dan mudah digunakan, yang dapat digunakan dalam browser web mana saja di perangkat apa saja, termasuk smartphone dan tablet.",
        "div2": "Untuk informasi tambahan tentang template Swipe/Spyglass, termasuk contoh yang dibuat oleh pengguna, <a href='https://storymaps.arcgis.com/en/app-list/swipe-spyglass/' target='_blank'> kunjungi situs web Peta Cerita</a>. Anda juga bisa mengikuti kami di Twitter di <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
        "div3": "Kami ingin mendengar dari Anda! Apakah Anda memiliki pertanyaan, ingin meminta fitur baru, atau merasa menemukan bug, silakan kunjungi <a href='http://links.esri.com/storymaps/forum' target='_blank'>Forum Pengguna Peta Cerita</a>."
      }
    },
    "share": {
      "firstSaveTitle": "Cerita disimpan",
      "manageStory": "Kelola cerita Anda",
      "manageStoryA1": "Tip: Anda dapat menggunakan %LINK1% untuk memeriksa kesalahan pada cerita dan mengubah cara komponen dibagikan. Cerita Saya juga akan membantu membuat cerita Anda terlihat bagus saat dibagikan di jejaring sosial. Anda dapat mempelajari fitur berguna lainnya dari Cerita Saya di %LINK2%.",
      "manageStoryA1V1": "Cerita Saya",
      "manageStoryA1V2": "pos blog",
      "shareTitle": "Bagikan cerita Anda",
      "sharePrivateHeader": "Cerita Anda belum dibagikan, apakah Anda ingin membagikannya?",
      "sharePrivateBtn1": "Bagikan untuk publik",
      "sharePrivateBtn2": "Bagikan dengan Organisasi saya",
      "sharePrivateProgress": "Berbagi dalam proses...",
      "sharePrivateErr": "Berbagi gagal, coba lagi atau",
      "sharePrivateOk": "Berbagi diperbarui, memuat...",
      "shareStatus1": "Cerita belum disimpan",
      "shareStatus2": "Cerita dibagikan secara publik",
      "shareStatus3": "Cerita dibagikan di dalam organisasi",
      "shareStatus4": "Cerita belum dibagikan",
      "sharePreviewAsUser": "Pratinjau",
      "shareHeader1": "Cerita Anda <strong>dapat diakses secara publik</strong>.",
      "shareHeader2": "Cerita Anda dapat diakses oleh anggota organisasi (masuk diperlukan).",
      "shareLinkHeader": "Bagikan cerita Anda",
      "shareLinkOpen": "BUKA",
      "learnMore": "Pelajari lebih lanjut",
      "shareA1": "Gunakan %SHAREIMG% pada <a href='%LINK1%' target='_blank'>halaman item aplikasi</a>. Jika Anda juga ingin membatalkan berbagi peta web, gunakan <a href='%LINK2%' target='_blank'>halaman item peta web</a>.",
      "shareWarning": "Berbagi %WITH% telah dinonaktifkan karena Anda bukan pemilik <a href='%LINK%' target='_blank'>peta web</a>.",
      "shareWarningWith1": "secara publik",
      "shareWarningWith2": "secara publik dan dengan Organisasi"
    },
    "directCreation": {
      "header": "Selamat datang di Penyusun Geser Cepat/Teropong",
      "mapPickHeader": "Untuk memulai, masukkan id peta web yang valid, atau gunakan tombol pencarian untuk menelusuri peta web.",
      "launchBuilder": "Luncurkan Penyusun",
      "chooseWebmapLbl": "Pilih peta web...",
      "explain2": "Untuk membuat peta cerita Geser Cepat atau Teropong, gunakan tombol di bawah untuk memilih peta web tersedia yang ingin Anda gunakan. Sebagai alternatif, Anda dapat menempelkan ID peta web ke bidang di bawah.",
      "explain3": "Jika Anda ingin menggunakan dua peta web dalam peta cerita, Anda akan diminta untuk peta web kedua nantinya saat memilih opsi tersebut.",
      "webmapPlaceholder": "Masukkan id peta web..."
    },
    "saveErrorSocial": {
      "title": "Pembaruan berbagi di media sosial",
      "panel1": "Penampilan cerita di media sosial meningkat, namun judul item aplikasi web ArcGIS Anda tidak sama dengan judul cerita Anda.",
      "panel1tooltip": "Dengan menentukan judul, ringkasan, dan gambar tampilan mini, cerita Anda akan terlihat seperti ini:",
      "panel2": "Judul mana yang ingin Anda gunakan di media sosial:",
      "panel2q1": "Judul cerita (disarankan)",
      "panel2q1tooltip": "Dengan memilih opsi ini, judul item akan diubah agar sama dengan judul cerita Anda dan perubahan lebih lanjut pada penyusun akan diselaraskan.",
      "panel2q2": "Judul item",
      "panel3": "Untuk meningkatkan penampilan cerita Anda di media sosial, gunakan ${MYSTORIES} untuk menambahkan ringkasan dan gambar tampilan mini.",
      "panel4": "Jangan mengingatkan saya lagi untuk cerita ini",
      "mystories": "Cerita Saya",
      "btnSave": "Simpan"
    }
  },
  "configure": {
    "mapdlg": {
      "items": {
        "organizationLabel": "Organisasi Saya",
        "onlineLabel": "ArcGIS Daring",
        "contentLabel": "Konten Saya",
        "favoritesLabel": "Favorit Saya"
      },
      "title": "Pilih Peta Web",
      "searchTitle": "Cari",
      "ok": "Oke",
      "cancel": "Batal",
      "placeholder": "Masukkan istilah pencarian"
    }
  },
  "httpsTransitionNotification": {
    "s1h1": "Esri sedang meningkatkan keamanan Story Map",
    "s1p1": "Story Map Anda disiarkan langsung di web, dan komunitas web selalu berupaya menyusun dan mengimplementasikan keamanan yang lebih baik. HTTPS, yang memberikan koneksi aman bagi konten untuk ditransmisikan melalui internet, semakin berkembang sebagai cara mengakses konten web yang diharapkan. Sebagian besar browser modern saat ini menunjukkan pesan peringatan jika HTTP digunakan alih-alih HTTPS. Karena standar yang terus berkembang ini, kami sangat menyarankan Anda menggunakan tautan HTTPS untuk menulis dan berbagi Story Map, dan hanya menggunakan URL HTTPS saat menyematkan konten web atau menautkan gambar dalam Story Map.",
    "s1p2": "Singkatnya, ini berarti Story Map dan semua kontennya (termasuk gambar, layer, aplikasi yang disematkan, dan situs web) harus diakses menggunakan tautan yang dimulai dengan HTTPS alih-alih HTTP. Ini memastikan pengalaman terbaik bagi pembaca Anda karena sebagian besar browser akan menunjukkan bahwa cerita Anda aman.",
    "s2h1": "Apa yang harus saya lakukan?",
    "s2p1": "Esri berupaya untuk membuat ini menjadi transisi yang mudah bagi penulis dan pembaca Story Map. Alat sekarang sudah tersedia di builder Story Map dan My Stories yang membantu Anda menemukan konten (HTTP) tidak aman di cerita Anda dan memberi saran cara mengatasinya. Harap periksa peta Anda apakah ada konten tidak aman dan perbarui menjadi HTTPS sesegera mungkin.",
    "action1": "Tutup",
    "action2": "Periksa cerita saya sekarang",
    "action3": "Pelajari lebih lanjut"
  },
  "embedBar": {
    "share": "Bagikan",
    "fullScreen": "Layar penuh",
    "enlarge": "Perbesar",
    "newTab": "Buka di tab baru",
    "tagline": "Story Map",
    "exitFullScreen": "Keluar dari layar penuh"
  },
  "june2018SurveyMessage": {
    "bannerMsg": "Bolehkah kami tanyakan sesuatu? Ini akan membantu membentuk masa depan Story Map.",
    "s1h1": "Bagikan pemikiran Anda, bentuk masa depan",
    "s1p1": "Masukan Anda adalah satu-satunya sumber umpan balik yang paling penting, dan mempelajari lebih banyak tentang Anda akan meningkatkan Story Map. Kami akan berterima kasih jika Anda dapat berpartisipasi dalam survei tiga menit ini.",
    "s2p1": "Seperti biasa, terima kasih telah menggunakan Story Map Esri!",
    "action1": "Tutup",
    "action2": "Ikuti survei"
  }
});