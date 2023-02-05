<?php
    $name = $_POST['name'];
    $addres = $_POST['addres'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
	// chekbox
	$e88 = $_POST['e88']
	$e99 = $_POST['e99']
	$e99pro = $_POST['e99pro']
	$s98 = $_POST['s98']

	$to = "esoo@mail.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "drone";

	
	$msg="
    Անուն: $name /n
    Հասցե: $addres /n
    Հեռախոս: $phone /n
    Էլ-հասցե: $email /n
	model:$e88  $e99 $e99pro $s98 "; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>
