console.log("exercice 4");
$(document).ready(function () {


    //si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";
    /*$(".form-inline>button").on("click", () => {
        alert("Merci nous vous tiendrons informé des différentes offres");
    });*/

    //récupérer maintenant le contenu de l'input pour adapter votre message : "Merci adresse email rentrée, nous vous tiendrons informé des différentes offres
    $(".form-inline>button").on("click", () => {
        var email = $("input").val();
        alert("Merci " + email + " nous vous tiendrons informé des différentes offres");
    });

    //si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits'
    $("#myNavbar li:last-child").dblclick(event => {
        $(event.currentTarget).hide();
    })

    //si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour marquer le fait qu'un produit a été ajouté au panier. S'il clique deux fois on doit avoir le texte Cart(2);
    $(".img-responsive").on("click", () => {
        $("span");
    })

    var i = 1;
    $(".img-responsive").on("click", () => {
        $("span.glyphicon-shopping-cart").text("(" + (i) + ")");
        i++
    })

    /*un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. 
    Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. 
    Vous pouvez ajouter des ids sur les images dans la page HTML. Bonus: faire de même sans utiliser les ids;
    */

   /* var  i = 0;
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
        
    });
    */
    var i = 0;
    $("img").mouseover(event => {
        var text = $(event.currentTarget).closest(".panel").find(".panel-footer").text();
        i++
        console.log("L'utilisateur regarde", i, "fois", text);
    })
});
