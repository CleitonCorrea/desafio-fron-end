// Válidação do formulário principal
$(document).ready(function() {

    "use strict";

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        
        var nome    = $(".nome");
        var email   = $(".email");
        var cpf     = $(".cpf");
        var tel     = $(".tel");
        var anexo   = $(".file");
        var msg     = $(".message");
        var flag    = false;

        if (nome.val() == "") {
            nome.closest(".form-control").addClass("error");
            nome.focus();
            flag = false;
            return false;
        } else {
            nome.closest(".form-control").removeClass("error").addClass("success");
        } 

        if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } 

        if (cpf.val() == "") {
            cpf.closest(".form-control").addClass("error");
            cpf.focus();
            flag = false;
            return false;
        } else {
            cpf.closest(".form-control").removeClass("error").addClass("success");
        } 

         if (tel.val() == "") {
            tel.closest(".form-control").addClass("error");
            tel.focus();
            flag = false;
            return false;
        } else {
            tel.closest(".form-control").removeClass("error").addClass("success");
        } 


        if (anexo.val() == "") {
            anexo.closest(".file-text").addClass("error");
            anexo.focus();
            flag = false;
            return false;
        } else {
            anexo.closest(".form-control").removeClass("error").addClass("success");
        } 


        if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        

        var dataString = "nome=" + nome.val() + "&email=" + email.val() + "&cpf=" + cpf.val() + "&tel=" + tel.val() + "&anexo=" + anexo.val() + "&msg=" + msg.val();
        
        $(".loading").fadeIn("slow").html("Enviando...");
        
        $.ajax({ // enviando via ajax para o php precessar
            type: "post",
            data: dataString,
            url: "phpMailer/envia_email.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");                     
                     if(d == 'success') 
                        $('.loading').fadeIn('slow').html('<font color="#31BBAD">Email enviado com sucesso!</font>').delay(3000).fadeOut('slow');

                     else
                        $('.loading').fadeIn('slow').html('<font color="#ff5607">Email não enviado. Verifique novamente todos os campos.</font>').delay(3000).fadeOut('slow');
                }//fim do success
        });
        return false;
    });
    
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})



