
$(document).on("ready", function () {
    initPageslider();
    route();
    answearListeners(); 
    appendNominees(grandeArray, "grandeTable");
    answear();

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
        console.log(id);

        $('.grande-answear').each(function() {
          $(this).removeClass("selected");
        });
        $(this).addClass("selected");
        //find input hidden by name vote[grande] value = id;
        //tirar classe selected-answear a todos .grande-answear
        //juntar class selected-answear a $(this) para ficar selecionado
    });

    $('.media-answear').on('click', function(e) {
        var id = $(this).attr('id');
        $(this).addClass( 'selected' );
        //find input hidden by name vote[media] value = id;
    });

}

//shuffle nominees
function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//Chama esta função com o array de nomeados e id tabela para preencher.
function appendNominees(nominees, table_id) {
    var aux = []
    var array = shuffle(nominees);
    $.each(array, function( index, value ) {
      console.log(index);
      if(index%2 != 0){
        aux.push(value);
        $('#'+table_id+' > tbody:last').append('<tr>'+aux[0]+aux[1]+'</tr>');
        aux=[];
      }else{
        aux.push(value);
        if(array[index+1]==null){
          console.log("fim");
          $('#'+table_id+' > tbody:last').append('<tr>'+aux[0]+'</tr>');
        }
      }
    }); 
}  