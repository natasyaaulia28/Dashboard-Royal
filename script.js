const menuHome = document.getElementById("menu-home");
const menuMahasiswa = document.getElementById("menu-mahasiswa");
const menuKelas = document.getElementById("menu-kelas");
const menuProgress = document.getElementById("menu-progress");
const menuAktifitas = document.getElementById("menu-aktifitas");
const menuStatistik = document.getElementById("menu-statistik");
const menuLampiran = document.getElementById("menu-lampiran");
const menuSettings = document.getElementById("menu-settings");
const menuSignout = document.getElementById("menu-signout");

const teksNama = document.getElementById("teks-nama");
const teksKelas = document.getElementById("teks-kelas");
const cardProgress = document.getElementById("card-progress");
const cardAktifitas = document.getElementById("card-aktifitas");
const cardStatistik = document.getElementById("card-statistik");
const cardLampiran = document.getElementById("card-lampiran");

function resetSemua() {
    menuHome.className = "";
    menuMahasiswa.className = "";
    menuKelas.className = "";
    menuProgress.className = "";
    menuAktifitas.className = "";
    menuStatistik.className = "";
    menuLampiran.className = "";
    menuSettings.className = "menu-settings";
    menuSignout.className = "menu-signout";

    teksNama.className = "";
    teksKelas.className = "";
    cardProgress.className = "card box-section1";
    cardAktifitas.className = "card box-section2";
    cardStatistik.className = "card box-aside";
    cardLampiran.className = "card box-footer";
}

menuHome.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuHome.className = "menu-aktif";
});

menuMahasiswa.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuMahasiswa.className = "menu-aktif";
    teksNama.className = "warna-teks";
});

menuKelas.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuKelas.className = "menu-aktif";
    teksKelas.className = "warna-teks";
});

menuProgress.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuProgress.className = "menu-aktif";
    cardProgress.classList.add("warna-kartu");
});

menuAktifitas.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuAktifitas.className = "menu-aktif";
    cardAktifitas.classList.add("warna-kartu");
});

menuStatistik.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuStatistik.className = "menu-aktif";
    cardStatistik.classList.add("warna-kartu");
});

menuLampiran.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuLampiran.className = "menu-aktif";
    cardLampiran.classList.add("warna-kartu");
});

menuSettings.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuSettings.className = "menu-settings menu-aktif";
    cardLampiran.classList.add("warna-kartu");
});

menuSignout.addEventListener("click", function(e) {
    e.preventDefault();
    resetSemua();
    menuSignout.className = "menu-signout menu-aktif";
});
