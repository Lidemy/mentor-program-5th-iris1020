<?php
  require_once('conn.php');

  //刪除 token
  $token = $_COOKIE['token'];
  $sql = sprintf(
  	"delete from IrisTsai_board_tokens where token='%s'",
  	$token
  );
  $conn->query($sql);
  setcookie("token", "", time() - 3600);
  header("Location: index.php");
?>