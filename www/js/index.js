var loginSuccessCallback = function() {
    alert('Sucesso');
    // Testa estes campos
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        alert(JSON.stringify(response.authResponse.signedRequest));
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        alert("Não autoriza a aplicação.");
      } else {
        alert("Sucesso Olá");
      }
    });
    $('#input-email').val(response.email);
    $('#input-name').val(response.name);
    $('#input-age').val(calcAge(response.birthday));
    // window.localStorage.getItem('accessToken') -> para textbox
  },
  loginUnknowErrorCallback = function() {
    alert('Queres tentar outra vez?');
  }

$(document).on("ready", function () {
    initPageslider();
    FacebookInAppBrowser.settings.appId = '1419134511631467';
    FacebookInAppBrowser.settings.redirectUrl = 'http://localhost';
    FacebookInAppBrowser.settings.permissions = 'email,user_birthday';
    $('#fb_button').on('click', function(e) {
      if(navigator.onLine){
        FacebookInAppBrowser.login(loginSuccessCallback, loginUnknowErrorCallback);
      }else{
        alert("Precisas de conecção à Internet para efectuar esta operação.");
      }
    });

    route();
    $('.hidden_errors').hide();
    $('.hidden-errors').hide();
    answearListeners(); 
    appendNominees(grandeArray, "grandeTable", 2);
    appendNominees(mediaArray, "mediaTable", 2);
    appendNominees(pequenaArray, "pequenaTable", 2);
    appendNominees(urbanoArray, "urbanoTable", 2);
    appendNominees(naoUrbanoArray, "naoUrbanoTable", 2);
    appendNominees(revelacaoArray, "revelacaoTable", 1);
    appendNominees(cabecaArray, "cabecaTable", 2);
    appendNominees(wcArray, "wcTable", 2);
    appendNominees(campismoArray, "campismoTable", 2);
    answear();
    submitListener();

    $('#doneMe').on('click', function(e) {
      $('.hidden_error').hide();
      $('.hidden-errors').hide();
      var problem = false;
      // console.log($("#vote_email").attr('value'));
    if( !validateEmail($('#vote_email').val())) {
      problem = true;
      $('#error_email').show();
      $('.hidden-errors').show();
    }
    if($('#vote_email').val()==""){
      problem = true;
      $('#error_email').show();
      $('.hidden-errors').show();
    }
    if($('#vote_name').val()==""){
      problem = true;
      $('#error_name').show();
      $('.hidden-errors').show();
    }
    if($('#vote_age').val()==""){
      problem = true;
      $('#error_age').show();
      $('.hidden-errors').show();
    }
    if($('#vote_sex').val()==""){
      problem = true;
      $('#error_sex').show();
      $('.hidden-errors').show();
    }
    
    if (!problem) {
        //set dos valores nos hidden fields
        
        $("#input-name").val($('#vote_name').val());
         $("#input-email").val($('#vote_email').val()); 
         $("#input-age").val($('#vote_age').val()); 
         $("#input-contact").val($('#vote_contact').val()); 
         $("#input-place").val($('#vote_place').val()); 
         $("#input-sex").val($('#vote_sex').val()); 


        changePage($("#main"),"right");
        <!-- Categorias -->
         // $("#input-grande").val($('#').val()); 
         // $("#input-media").val($('#').val()); 
         // $("#input-pequena").val($('#').val()); 
         // $("#input-urbano").val($('#').val()); 
         // $("#input-naoUrbano").val($('#').val()); 
         // $("#input-revelacao").val($('#').val()); 
         // $("#input-cabeca").val($('#').val()); 
         // $("#input-wc").val($('#').val()); 
         // $("#input-campismo").val($('#').val()); 
        //slide page main
    };
    });
  

    $('#votar-button').on('click', function(e) {
      $('.hidden_error').hide();
      $('.hidden-errors').hide();

      if($('#input-grande').val()==""){
        $('#error_grande').show();
        $('.hidden-errors').show();
      }
      
      if($('#input-media').val()==""){
        $('#error_media').show();
        $('.hidden-errors').show();
      }
      
      if($('#input-pequena').val()==""){
        $('#error_pequena').show();
        $('.hidden-errors').show();
      }
      
      if($('#input-urbano').val()==""){
        $('#error_urbano').show();
        $('.hidden-errors').show();
      }
      if($('#input-naoUrbano').val()==""){
        
        $('#error_naoUrbano').show();
        $('.hidden-errors').show();
      }
      if($('#input-revelacao').val()==""){
        
        $('#error_revelacao').show();
        $('.hidden-errors').show();
      }
      if($('#input-cabeca').val()==""){
        
        $('#error_cabeca').show();
        $('.hidden-errors').show();
      }
      if($('#input-wc').val()==""){
        
        $('#error_wc').show();
        $('.hidden-errors').show();
      }
      if($('#input-campismo').val()==""){
        $('#error_campismo').show();
        $('.hidden-errors').show();
      }
    });
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // $("#output").append("Hello, World! Cordova Device ir Ready!");
}


function route() {
    
    $("#urbano").on('click', function(e) {
      isAnimating = false;
        changePage($("#urbanoView"),"right");
    });

    $("#media").on('click', function(e) {
      isAnimating = false;
        changePage($("#mediaView"),"right");
    });

    $("#pequena").on('click', function(e) {
      isAnimating = false;
        changePage($("#pequenaView"),"right");
    });

    $("#revelacao").on('click', function(e) {
      // isAnimating = false;
        changePage($("#revelacaoView"),"right");
    });

    $("#cabeca").on('click', function(e) {
      // isAnimating = false;
        changePage($("#cabecaView"),"right");
    });

    $("#grande").on('click', function(e) {
      // isAnimating = false;
        // console.log("chamado");
        changePage($("#grandeView"),"right");
    });

    $("#campismo").on('click', function(e) {
      // isAnimating = false;
        changePage($("#campismoView"),"right");
    });

    $("#wc").on('click', function(e) {
      // isAnimating = false;
        changePage($("#wcView"),"right");
    });

    $("#naoUrbano").on('click', function(e) {
      // isAnimating = false;
        changePage($("#naoUrbanoView"),"right");
    });

    $('.back').on('click', function(e) {
      // isAnimating = false;
        changePage($("#main"),"left");
    });

    $('#opiniao').on('click', function(e) {
      // isAnimating = false;
        changePage($("#opiniaoView"),"right");
    });

}

function answearListeners() {
    $("#doneUrbano").on('click', function(e) {
        changePage($("#naoUrbanoView"),"right");
        // $('#urbano').addClass( 'answeared' );
        // $('#urbano span').removeClass("chevron");
        // $('#urbano span').removeClass("count-positive");
        // $('#urbano span').text('✓');
        // $("#doneUrbano").attr('disabled', 'disabled');
    });

    $("#doneMedia").on('click', function(e) {
        changePage($("#pequenaView"),"right");
        // $('#media').addClass( 'answeared' );
        // $('#media span').removeClass("chevron");
        // $('#media span').removeClass("count-positive");
        // $('#media span').text('✓');
    });

    $("#donePequena").on('click', function(e) {
        changePage($("#urbanoView"),"right");
        // $('#pequena').addClass( 'answeared' );
        // $('#pequena span').removeClass("chevron");
        // $('#pequena span').removeClass("count-positive");
        // $('#pequena span').text('✓');
    });

    $("#doneRevelacao").on('click', function(e) {
        changePage($("#cabecaView"),"right");
        // $('#revelacao').addClass( 'answeared' );
        // $('#revelacao span').removeClass("chevron");
        // $('#revelacao span').removeClass("count-positive");
        // $('#revelacao span').text('✓');
    });

    $("#doneCabeca").on('click', function(e) {
        changePage($("#wcView"),"right");
        // $('#cabeca').addClass( 'answeared' );
        // $('#cabeca span').removeClass("chevron");
        // $('#cabeca span').removeClass("count-positive");
        // $('#cabeca span').text('✓');
    });

    $("#doneGrande").on('click', function(e) {
        changePage($("#mediaView"),"right");
        // $('#grande').addClass( 'answeared' );
        // $('#grande span').removeClass("chevron");
        // $('#grande span').removeClass("count-positive");
        // $('#grande span').text('✓');
    });

    $("#doneCampismo").on('click', function(e) {
        changePage($("#opiniaoView"),"right");
        // $('#campismo').addClass( 'answeared' );
        // $('#campismo span').removeClass("chevron");
        // $('#campismo span').removeClass("count-positive");
        // $('#campismo span').text('✓');
    });

    $("#doneWC").on('click', function(e) {
        changePage($("#campismoView"),"right");
        // $('#wc').addClass( 'answeared' );
        // $('#wc span').removeClass("chevron");
        // $('#wc span').removeClass("count-positive");
        // $('#wc span').text('✓');
    });

    $("#doneNaoUrbano").on('click', function(e) {
        changePage($("#revelacaoView"),"right");
        // $('#naoUrbano').addClass( 'answeared' );
        // $('#naoUrbano span').removeClass("chevron");
        // $('#naoUrbano span').removeClass("count-positive");
        // $('#naoUrbano span').text('✓');
    });

    $("#doneMe").on('click', function(e) {
      $('#me').addClass( 'answeared' );
    });
    
    $("#doneOpiniao").on('click', function(e) {
      $('#opiniao span').removeClass("chevron");
      $('#opiniao span').addClass("count-positive");
      $('#opiniao span').text('✓');
    });
}

function answear() {
    $('.grande-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#grande').addClass( 'answeared' );
        $('#grande span').removeClass("chevron");
        $('#grande span').addClass("count-positive");
        $('#grande span').text('✓');
        $('#input-grande').val($(this).attr('value'));
        $('.grande-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.media-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#media').addClass( 'answeared' );
        $('#media span').removeClass("chevron");
        $('#media span').addClass("count-positive");
        $('#media span').text('✓');
        $('#input-media').val($(this).attr('value'));
        $('.media-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.pequena-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#pequena').addClass( 'answeared' );
        $('#pequena span').removeClass("chevron");
        $('#pequena span').addClass("count-positive");
        $('#pequena span').text('✓');
        $('#input-pequena').val($(this).attr('value'));
        $('.pequena-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.urbano-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#urbano').addClass( 'answeared' );
        $('#urbano span').removeClass("chevron");
        $('#urbano span').addClass("count-positive");
        $('#urbano span').text('✓');
        $('#input-urbano').val($(this).attr('value'));
        $('.urbano-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.naoUrbano-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#naoUrbano').addClass( 'answeared' );
        $('#naoUrbano span').removeClass("chevron");
        $('#naoUrbano span').addClass("count-positive");
        $('#naoUrbano span').text('✓');
        $('#input-naoUrbano').val($(this).attr('value'));
        $('.naoUrbano-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.revelacao-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#revelacao').addClass( 'answeared' );
        $('#revelacao span').removeClass("chevron");
        $('#revelacao span').addClass("count-positive");
        $('#revelacao span').text('✓');
        $('#input-revelacao').val($(this).attr('value'));
        $('.revelacao-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.cabeca-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#cabeca').addClass( 'answeared' );
        $('#cabeca span').removeClass("chevron");
        $('#cabeca span').addClass("count-positive");
        $('#cabeca span').text('✓');
        $('#input-cabeca').val($(this).attr('value'));
        $('.cabeca-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.wc-answear').on('click', function(e) {
        var id = $(this).attr('value');
        // $('#wc').addClass( 'answeared' );
        $('#wc span').removeClass("chevron");
        $('#wc span').addClass("count-positive");
        $('#wc span').text('✓');
        $('#input-wc').val($(this).attr('value'));
        $('.wc-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.campismo-answear').on('click', function(e) {

        var id = $(this).attr('value');
        // $('#campismo').addClass( 'answeared' );
        $('#campismo span').removeClass("chevron");
        $('#campismo span').addClass("count-positive");
        $('#campismo span').text('✓');
        $('#input-campismo').val($(this).attr('value'));
        // console.log($('#input-campismo').val());
        $('.campismo-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });


}

//shuffle nominees
function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// //Chama esta função com o array de nomeados e id tabela para preencher.
// function appendNominees(nominees, table_id) {
//     var aux = []
//     var array = shuffle(nominees);
//     $.each(array, function( index, value ) {
//       if(index%2 != 0){
//         aux.push(value);
//         $('#'+table_id+' > tbody:last').append('<tr>'+aux[0]+aux[1]+'</tr>');
//         aux=[];
//       }else{
//         aux.push(value);
//         if(array[index+1]==null){
//           $('#'+table_id+' > tbody:last').append('<tr>'+aux[0]+'</tr>');
//         }
//       }
//     }); 
// }  

function appendNominees(nominees, table_id, cols) {
    var aux = []
    var counter = 0
    var array = shuffle(nominees);
    $.each(array, function( index, value ) {
      counter++;
      if(counter === cols){
        aux.push(value);
        $('#'+table_id+' > tbody:last').append('<tr>'+toStringy(aux)+'</tr>');
        aux=[];
        counter = 0;
      }else{
        aux.push(value);
        if(array[index+1]==null){
          $('#'+table_id+' > tbody:last').append('<tr>'+toStringy(aux)+'</tr>');
        }
      }
    }); 
  }  

  function toStringy(array) {
    var all = "";
    for (var i = 0; i < array.length; i++) {
      all = all + array[i];
    };
    return all
  }

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( $email ) ) {
      return false;
    } else {
      return true;
    }
  }

  function submitListener() {

    $('#votar-button').on('click', function() {
      if(navigator.onLine){
      
      
        $(this).hide();
         // Estes só podem ter value se selected...
         if($('#vote_valoriza_artista').is(":checked")){
            $("#input-artista").val("1"); 
         }

         if($('#vote_valoriza_localizacao').is(":checked")){
            $("#input-localizacao").val("1"); 
         }

         if($('#vote_valoriza_convivio').is(":checked")){
            $("#input-convivio").val("1"); 
         }
         if($('#vote_valoriza_campismo').is(":checked")){
            $("#input-campismo").val("1"); 
         }
         if($('#vote_valoriza_higiene').is(":checked")){
            $("#input-higiene").val("1"); 
         }
         if($('#vote_valoriza_preco').is(":checked")){
            $("#input-preco").val("1"); 
          }  
         if($('#vote_valoriza_restauracao').is(":checked")){
            $("#input-restauracao").val("1"); 
         }
         if($('#vote_valoriza_brindes').is(":checked")){
            $("#input-brindes").val("1"); 
         }
         if($('#vote_valoriza_data').is(":checked")){
            $("#input-data").val("1"); 
         }
         if($('#vote_valoriza_meteorologia').is(":checked")){
            $("#input-meteorologia").val("1"); 
         }
         if($('#vote_valoriza_acessibilidades').is(":checked")){
            $("#input-acessibilidades").val("1"); 
         }
         if($('#vote_valoriza_sustentabilidade').is(":checked")){
            $("#input-sustentabilidade").val("1"); 
        }   
        
        $("#input-artista-ver").val($("#vote_artista_ver").val()); 


      var url = "http://teste.portugalfestivalawards.pt/votes";
        $.ajax({
          type: "POST",
          url: url,
          // data: $("#loginForm form").serializeArray(),
          data: {format: "json",
              vote:{
                name: $('#input-name').val(), 
                email: $('#input-email').val(),
                age: $('#input-age').val(), 
                place: $('#input-place').val(),
                contact: $('#input-contact').val(),
                sex: $('#input-sex').val(),
                valoriza_artista: $('#input-artista').val(),
                valoriza_localizacao: $('#input-localizacao').val(),
                valoriza_convivio: $('#input-convivio').val(),
                valoriza_convivio: $('#input-convivio').val(),
                valoriza_campismo: $('#input-campismo').val(),
                valoriza_higiene: $('#input-higiene').val(),
                valoriza_preco: $('#input-preco').val(),
                valoriza_restauracao: $('#input-restauracao').val(),
                valoriza_brindes: $('#input-brindes').val(),
                valoriza_data: $('#input-data').val(),
                valoriza_meteorologia: $('#input-meteorologia').val(),
                valoriza_acessibilidades: $('#input-acessibilidades').val(),
                valoriza_sustentabilidade: $('#input-sustentabilidade').val(),
                artista_ver: $('#input-artista-ver').val(),
                grande_dimensao: $('#input-grande').val(),
                media_dimensao: $('#input-media').val(),
                pequena_dimensao: $('#input-pequena').val(),
                urbano: $('#input-urbano').val(),
                nao_urbano: $('#input-naoUrbano').val(),
                artista_revelacao: $('#input-revelacao').val(),
                cabeca_cartaz: $('#input-cabeca').val(),
                wc: $('#input-wc').val(),
                campismo: $('#input-campismo').val()}
              },
          //cache: false,
          dataType: "json",
          success: function(res){
            if (res.status == "Failure") {
              alert("Alguma coisa correu mal ou o email já existia.");
              $('#votar-button').show();  
            } else{
              console.log(res);
              changePage($("#thanksView"),"right");
            };
            
          },  // FIM SUCCESS AJAX    
          failure: function(err) {
            alert(err);
            $('#votar-button').show();
          }
        });
      
      }else{
        alert("Precisas de conecção à Internet para efectuar esta operação.");
      }
    });
  }

function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}