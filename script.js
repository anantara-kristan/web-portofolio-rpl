// Mengambil tombol Mode Gelap berdasarkan ID-nya
const darkModeButton = document.getElementById("darkModeButton");

// Menjalankan kode ketika tombol Mode Gelap diklik
darkModeButton.addEventListener("click", function () {

    // Menambahkan atau menghapus class "dark-mode" pada body
    document.body.classList.toggle("dark-mode");

    // Mengecek apakah mode gelap sedang aktif
    if (document.body.classList.contains("dark-mode")) {

        // Mengubah tulisan tombol menjadi Mode Terang
        darkModeButton.textContent = "Mode Terang";

    } else {

        // Mengembalikan tulisan tombol menjadi Mode Gelap
        darkModeButton.textContent = "Mode Gelap";
    }
});


// Mengambil tombol sapaan berdasarkan ID
const welcomeButton = document.getElementById("welcomeButton");

// Menjalankan kode ketika tombol sapaan diklik
welcomeButton.addEventListener("click", function () {

    // Menampilkan pop-up sederhana kepada pengguna
    alert("Hallo! Willkommen auf meinem Portfolio!");

});