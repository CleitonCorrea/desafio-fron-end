// Validação do chat
$(document).ready(function() {

    "use strict";

    $(".quick-contact-form").submit(function(e) {
        e.preventDefault();
        var nome = $(".bnome");
        var email = $(".bemail");
        var msg = $(".bmensagem");
        var flag = false;
        
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


        if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }        


        var dataString = "nome=" + nome.val() + "&email=" + email.val() + "&msg=" + msg.val();
        $(".loading").fadeIn("slow").html("Enviando...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "phpMailer/envia_email.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
                    if(d == 'success') 
                $('.loading').fadeIn('slow').html('<font color="#31BBAD">Breve iremos responder sua solicitação. <br /> Obrigado por entrar em contato.</font>').delay(3000).fadeOut('slow');

                     else
                $('.loading').fadeIn('slow').html('<font color="#ff5607">Não podemos processar sua mensagem!<br /> Aguarde um instante por favor.</font>').delay(3000).fadeOut('slow');

                 }
            });
        return false;
        });
        $("#reset").on('click', function() {
            $(".form-control").removeClass("success").removeClass("error");
        });
        
})



