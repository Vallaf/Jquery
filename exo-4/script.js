console.log("exercice 4");
$(document).ready(function () {


    //1 - si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";
    /*$(".form-inline>button").on("click", () => {
        alert("Merci nous vous tiendrons informé des différentes offres");
    });*/

    //2 - récupérer maintenant le contenu de l'input pour adapter votre message : "Merci adresse email rentrée, nous vous tiendrons informé des différentes offres
    $(".form-inline>button").on("click", () => {
        var email = $("input").val();
        alert("Merci " + email + " nous vous tiendrons informé des différentes offres");
    });

    //3 -si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits'
    $("#myNavbar li:last-child").dblclick(event => {
        $(event.currentTarget).hide();
    })

    //4- si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour marquer le fait qu'un produit a été ajouté au panier. S'il clique deux fois on doit avoir le texte Cart(2);
    $(".img-responsive").on("click", () => {
        $("span");
    })

    var i = 1;
    $(".img-responsive").on("click", () => {
       // $("span.glyphicon-shopping-cart").text("(" + (i) + ")");
       // i++
      

    })

    /*5- un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. 
    Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. 
    Vous pouvez ajouter des ids sur les images dans la page HTML. Bonus: faire de même sans utiliser les ids;
    */

    /*var  i = 0;
    $("#ipad").mouseover(function () {
        i++
        $(this).text(+i)
        
      console.log("L'utilisateur regarde", i, "fois", "#ipad" );
        
    });

    var  j = 0;
    $("#computer").mouseover(function () {
        j++
        $(this).text(+i)
        
      console.log("L'utilisateur regarde", j, "fois", "#computer" );
        
    });

    var  k = 0;
    $("#mobile").mouseover(function () {
        k++
        $(this).text(+i)
        
      console.log("L'utilisateur regarde", k, "fois", "#mobile" );
        
    });*/

    /*var i = 0;
    var tableau = [];
    $("img").mouseover(event => {
        var text = $(event.currentTarget).parents(".panel").find(".panel-footer").text();
        //tableau.push(text);
        i++
        tableau = text.split(" ");
        console.log(tableau);
        console.log("L'utilisateur regarde", i, "fois", text);
    })*/


    $("img").mouseover(event => {
        var text = $(event.currentTarget).parents(".panel").find(".panel-footer").text();
        //tableau = text.split(" ");
        //console.log(tableau);
        console.log("L'utilisateur regarde", text);
    })

    //6-traquer si un utilisateur est en train de remplir le champ pour la newsletter. Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans
    $("input").focus(function () {
        console.log("L'utilisateur clique dans le champ");
    })

    $("input").keypress(function () {
        console.log("L'utilisateur écrit dans le champ");
    })

    //7 - Bonus ++ : récupérer le nombre de produits que l'utilisateur a achetés. Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)' puisque l'offre correspond à 25 ipads...
    var tableau = [];
    $("img").click(event => {
        var text = $(event.currentTarget).parents(".panel").find(".panel-footer").text();
        tableau = text.split(" ");
        console.log(tableau);
        $("span.glyphicon-shopping-cart").text(tableau[1]);



    })
});
