console.log("exercice 3");
$(document).ready(function () {
    //changez le titre "My portfolio" par votre prénom.;
    $("h1").text("VALERIE");

    //changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant;
    $("#tagline").text("Bim Bam Boum");

    //votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar mais laissez le bouton Login;
    $("#myNavbar>ul:first").remove();

    //changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie, choisissez en une dans la liste possible de bootstrap;
    $("span").removeClass("glyphicon glyphicon-log-in").addClass("glyphicon glyphicon-user");

    //changez votre footer en mettant Copyright 2017 ( respecter le gras );
    $("footer").text("Copyright 2017").css("font-weight", "bold");

    //$("#work1>div>p:nth-child(1)").text("Mon projet");//modifiez le texte des paragraphes de la première ligne d'images. Tous les textes "Some text..." doivent être remplacés par "Mon projet"
    //ajouter le numéro du projet c'est à dire 'Mon projet 1' 'Mon projet 2'...
    var tabl = $("#work1>div>p:nth-child(1)");
    var i = 1;
    $("#work1>div>p:nth-child(1)").each(function () {
        $(this).text("Mon projet " + i);
        i++
    })

    //choisissez une image sur internet et changez toutes les images du projet par cette image. Bonus: personnalisez chacune des images;
    $("img").attr("src", "http://www.longhaired-weimaraner.com/wp-content/uploads/2017/01/IMG_2070.jpg");
    $("#work1>div.col-sm-3").append("Braque de Weimar");

    /*vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. De plus, comme c'est le dernier, 
    vous souhaitez qu'il apparaisse au dessus des autres et qu'il soit plus grand pour être mis en valeur. Choisissez une image et un texte et ajoutez le au-dessous de "Some of my work". 
    Ajustez la taille de l'image pour être de 250px de haut;*/
   $("#work1>div.col-sm-3:first-child").clone().insertBefore("#work1").css("width", "720px").removeClass("col-sm-3").addClass("img-responsive center-block");
   $("div.img-responsive.center-block>p").text("LAST WORK").css("font-size", "30px", "bold");
   
   //la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe au footer afin de changer l'affichage en rouge.
   $("footer").addClass("intro");

});