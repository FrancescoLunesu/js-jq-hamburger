// richiamo l'icona "i" con la class "fa-bars" e faccio in modo che al click parta la funzione che mostra la classe CSS ".hamburger-menu"
$("i.fa-bars").click(function(){
    $(".hamburger-menu").show("fast");
});
// richiamo l'icona "i" con la class "fa-times" (la X per chiudere la schermata) e faccio in modo che al click parta la funzione che seleziona la classe CSS ".hamburger-menu" e la nasconde (comando .hide())
$("i.fa-times").click(function(){
    $(".hamburger-menu").hide("fast");
});
