<?php
  require_once("conn.php");

  function generateToken() {
  	$s = '';
  	for($i=1; $i<=16; $i++) {
  		$s .= chr(rand(65,90));
  	}
  	return $s;
  }

  function getUserFromToken($token) {
  	global $conn;
  	$sql = sprintf(
  		"select username from IrisTsai_board_tokens where token = '%s'",
  		$token
  	);
  	$result = $conn->query($sql);
  	$row = $result->fetch_assoc();
    $username = $row['username'];

    $sql = sprintf(
      "select * from IrisTsai_board_users where username = '%s'",
      $username
    );

    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
  	return $row; //user, id, nickname
  }
?>