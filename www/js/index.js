
$(document).on("ready", function () {
    initPageslider();
    route();
    $('.hidden_errors').hide();
    $('.hidden-errors').hide();
    // answearListeners(); 
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
            
        // Estes só podem tre value se selected...
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
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // $("#output").append("Hello, World! Cordova Device ir Ready!");
}


function route() {
    
    $("#urbano").on('click', function(e) {
        changePage($("#urbanoView"),"right");
    });

    $("#media").on('click', function(e) {
        changePage($("#mediaView"),"right");
    });

    $("#pequena").on('click', function(e) {
        changePage($("#pequenaView"),"right");
    });

    $("#revelacao").on('click', function(e) {
        changePage($("#revelacaoView"),"right");
    });

    $("#cabeca").on('click', function(e) {
        changePage($("#cabecaView"),"right");
    });

    $("#grande").on('click', function(e) {
        console.log("chamado");
        changePage($("#grandeView"),"right");
    });

    $("#campismo").on('click', function(e) {
        changePage($("#campismoView"),"right");
    });

    $("#wc").on('click', function(e) {
        changePage($("#wcView"),"right");
    });

    $("#naoUrbano").on('click', function(e) {
        changePage($("#naoUrbanoView"),"right");
    });

    $("#me").on('click', function(e) {
        changePage($("#meView"),"right");
    });

    $('.back').on('click', function(e) {
        changePage($("#main"),"left");
    });

}

function answearListeners() {
    $("#doneUrbano").on('click', function(e) {
        $('#urbano').addClass( 'answeared' );
        // $("#doneUrbano").attr('disabled', 'disabled');
    });

    $("#doneMedia").on('click', function(e) {
        $('#media').addClass( 'answeared' );
    });

    $("#donePequena").on('click', function(e) {
        $('#pequena').addClass( 'answeared' );
    });

    $("#doneRevelacao").on('click', function(e) {
        $('#revelacao').addClass( 'answeared' );
    });

    $("#doneCabeca").on('click', function(e) {
        $('#cabeca').addClass( 'answeared' );
    });

    $("#doneGrande").on('click', function(e) {
        $('#grande').addClass( 'answeared' );
    });

    $("#doneCampismo").on('click', function(e) {
        $('#campismo').addClass( 'answeared' );
    });

    $("#doneWC").on('click', function(e) {
        $('#wc').addClass( 'answeared' );
    });

    $("#doneNaoUrbano").on('click', function(e) {
        $('#naoUrbano').addClass( 'answeared' );
    });

    $("#doneMe").on('click', function(e) {
        $('#me').addClass( 'answeared' );
    });

}

function answear() {
    $('.grande-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#grande').addClass( 'answeared' );
        $('#input-grande').val($(this).attr('value'));
        $('.grande-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.media-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#media').addClass( 'answeared' );
        $('#input-media').val($(this).attr('value'));
        $('.media-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.pequena-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#pequena').addClass( 'answeared' );
        $('#input-pequena').val($(this).attr('value'));
        $('.pequena-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.urbano-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#urbano').addClass( 'answeared' );
        $('#input-urbano').val($(this).attr('value'));
        $('.urbano-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.naoUrbano-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#naoUrbano').addClass( 'answeared' );
        $('#input-naoUrbano').val($(this).attr('value'));
        $('.naoUrbano-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.revelacao-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#revelacao').addClass( 'answeared' );
        $('#input-revelacao').val($(this).attr('value'));
        $('.revelacao-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.cabeca-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#cabeca').addClass( 'answeared' );
        $('#input-cabeca').val($(this).attr('value'));
        $('.cabeca-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.wc-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#wc').addClass( 'answeared' );
        $('#input-wc').val($(this).attr('value'));
        $('.wc-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
    });

    $('.campismo-answear').on('click', function(e) {
        var id = $(this).attr('value');
        $('#campismo').addClass( 'answeared' );
        $('#input-campismo').val($(this).attr('value'));
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
          console.log("vai o resto");
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