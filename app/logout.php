<?php 
require_once "lib.php";
session_destroy();
header("location: index.php");
?>