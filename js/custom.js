// Arquivos de cusmotização dos plugins principais


	$(window).on('load', function() {
	
		"use strict";
						
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		$("#loader").delay(100).fadeOut();
		$("#loader-wrapper").delay(100).fadeOut("fast");
		
	});
	

	$(document).ready(function() {
			
		"use strict";

		/*----------------------------------------------------*/
		/*	 Menu Mobile Toggle
		/*----------------------------------------------------*/
		
		$('.navbar-nav li.nav-item.nl-simple').on('click', function() {				
			$('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navbarSupportedContent').removeClass("show");				
		});
		

		/*----------------------------------------------------*/
		/*	Regras de Validação do Form principal
		/*----------------------------------------------------*/
		
		$(".contact-form").validate({
			rules:{ 
					nome:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},

					cpf:{
						required: true,
						minlength: 11,
									
					}, 


					file:{

						required: true,
						minlength: 10,
						
					}, 

					message:{
						required: true,
						minlength: 2,
						}
					},
					

					messages:{
							nome:{
								required: "Por favor, digite seu nome"
							}, 
							email:{
								required: "Por Favor, digite seu email!",
								email: "Por favor, digite um email válido do tipo name@domain.com"
							},

							cpf:{
								required: "Por favor, digite seu cpf!",
								minlength: "Dígite pelo menos 11 caracteres"															
							}, 

							tel:{
								required: "Por favor, digite seu telefone!",
								minlength: "Digite pelo menos 10 dígitos"								
							}, 

							file:{
								required: "Por favor, insira um arquivo!"								
							},


							message:{
								required: "Por favor, digite sua mensagem!"
							}, 
						}
		});	


		/*----------------------------------------------------*/
		/*	Regras de Validação do Chat
		/*----------------------------------------------------*/
		
		$(".quick-contact-form").validate({
			rules:{ 
					nome:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},       		
					mensagem:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							nome:{
								required: "Por favor, digite pelo menos 1 caracter!"
							}, 
							email:{
								required: "Precisamos do seu endereço de e-mail para entrar em contato com você",
								email: "Email inválido, tente algo do tipo name@domain.com"
							}, 
							mensagem:{
								required: "Por favor, deixe sua mensagem!"
							}, 
						}
		});


		/*----------------------------------------------------*/
		/*	Chat botao
		/*----------------------------------------------------*/

		$('.bottom-form-header').parent().delay(1000).animate({bottom: '-311px'}, 1000, function(){
			$(this).find('.bottom-form-header').addClass('closed');
		}); 
		
		
		$('.bottom-form-header').click(function(){
			if ($(this).hasClass('closed')){
				$(this).next('.bottom-form-holder').css({display:'block'}).parent().animate({bottom: 0}, 1000, function(){
					$(this).find('.bottom-form-header').removeClass('closed');
				});
			} else {
				$(this).parent().animate({bottom: '-311px'}, 1000, function(){
					$(this).find('.bottom-form-header').addClass('closed');
				});
			}
			
			return false;
		});

	});
	
	//Botão que seleciona o arquivo
		$(document).ready(function(){
				$('.botao').on('click', function() {
				  $('.file').trigger('click');
				});

				$('.file').on('change', function() {
				  var fileName = $(this)[0].files[0].name;
				  $('#fileText').val(fileName);
				});
	//Aplicação de Mascara nos campos tel e cpf
				$(".cpf").mask("000.000.000-00");
				$(".tel").mask("(00) 00000-0000");
		});	