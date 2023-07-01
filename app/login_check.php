<?php 
    require_once"lib.php";

    $username = $_POST["username"];
    $password = $_POST["password"]; // ctrl d

    if(login($username, $password)){
        header("location: login.php");
    }
    else{
        header("location: index.php");
    }
?>