
$(document).on("ready", function () {
    initPageslider();
    route();
    answearListeners(); 
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