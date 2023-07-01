<?php 

session_start();

function cekLogin(){
    if(isset($_SESSION["username"])){
        return true;
    }
    else{
        return false;
    }
}

function login($username, $password){
    $my_user = "abcde";
    $my_pass = "bbca";
    if($username == $my_user && $password==$my_pass){
        $_SESSION["username"] = $username;
        header("location: index.php");
        return true;
    }
    else{
        header("location: index.php");
        return false;
    }
}

?>