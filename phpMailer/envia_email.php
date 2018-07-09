<?php

 $nome 	      = $_POST['nome'];
 $email       = $_POST['email'];
 $cpf         = $_POST['cpf'];
 $tel         = $_POST['tel'];
 $mensagem    = $_POST['msg'];
 $arquivo     = $_FILES["anexo"];
 
 $corpoMSG = "<strong>Nome:</strong> $nome<br> <strong>Mensagem:</strong> $mensagem";
 // chamada da classe	
 include("phpMailer/class.phpmailer.php");
 include("phpMailer/class.smtp.php");	
 // instanciando a classe
 $mail   = new PHPMailer();
 // email do remetente
 $mail->SetFrom($email, $nome);
 // email do destinatario
 $address = "rcardoso@neoassist.com";
 $mail->AddAddress($address, "destinatario");
 // assunto da mensagem
 $mail->Subject = 'Teste Front-End';
 // corpo da mensagem
 $mail->MsgHTML($corpoMSG);
 // anexar arquivo
 $mail->AddAttachment($arquivo['tmp_name'], $arquivo['name']  );
 
 if(!$mail->Send()) {
   echo "Erro: " . $mail->ErrorInfo;
  } else {
   echo "Mensagem enviada com sucesso!";
  }

?>