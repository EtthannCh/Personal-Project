<?php require_once"lib.php" ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Halaman utama</h1>
    <ul>
        <li><a href="index.php">Index</a></li>
        <?php if(cekLogin()) {?>
            <li><a href="profil.php">Profil</a></li>
            <li><a href="logout.php">Logout</a></li>
        <?php } else { ?>
        <li><a href="berita.php">Berita</a></li>
        <li><a href="login.php">Login</a></li>
        <?php }?>
    </ul>
</body>
</html>