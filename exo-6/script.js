console.log("exercice 6");
$(document).ready(function () {

    $("#connexion").on("click", () => {

        // alert("Vous avez cliqué sur le bouton 'Se connecter'");

        $(".alert-warning").remove();

        var email = $("#email").val();
        var password = $("#password").val();
        console.log(email);
        console.log(password);

        if ($("#email").val() === "" && $("#password").val() === "") {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").prepend($div);
            $div.text("Veuillez remplir tous les champs");

        }

        if ($("#email").val() === "hello@me.com" && $("#password").val() === "secret8") {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").append($div);
            $div.text("Vous êtes connecté").css("color", "green");

        }
        if ($("#email").val() !== "hello@me.com" && $("#password").val() !== "secret8") {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").append($div);
            $div.text("Mauvais email ou password").css("color", "red");
        }

    });


});
