console.log('exercice 2');
$(document).ready(function () {
    $('h4').hide(); // je sélectionne le titre "John's Blog"
    console.log($('h4'));

    $('.sidenav'); //tous les éléments du sidemenu de gauche.
    console.log($('.sidenav'));

    $('footer'); //Sélectionner le footer.
    console.log($('footer'));

    $('input'); //Sélectionner l'élément qui permet de faire la barre de recherche.
    console.log($('input'));
    $('.glyphicon'); //Sélectionner tous les glyphicons de la page.
    console.log($('.glyphicon'));

    $('.label.label-success');  //Sélectionner tous les labels verts.
    console.log($('.label.label-success'));

    $('p.intro'); //Sélectionner tous les paragraphes qui ont comme classe 'intro'
    console.log( $('p.intro'));

    $('.glyphicon-time'); //Sélectionner toutes les images avec toutes les icones dont la classe est 'glyphicon-time'
    console.log($('.glyphicon-time'));

    $('#section1,.active');//Sélectionner le premier élément du sidemenu "home"
    console.log($('#section1,.active'));

    $('p:even');
    console.log($('p:even'));

});
