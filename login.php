<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullanici_adi = $_POST['kullanici_adi'];
    $sifre = $_POST['sifre'];

    // Öğrenci numarasını e-posta adresinden çıkart
    $numara = explode('@', $kullanici_adi)[0];

    // Kullanıcı adı ve şifre doğrulaması
    if ($kullanici_adi === "b1812100001@sakarya.edu.tr" && $sifre === "b1812100001") {
        $_SESSION['kullanici_adi'] = $kullanici_adi;
        echo "Hoşgeldiniz " . htmlspecialchars($numara);
    } else {
        echo "Geçersiz kullanıcı adı veya şifre.";
        header("refresh:2;url=girişYap.html");
        exit();
    }
} else {
    header("Location: girişYap.html");
    exit();
}
?>