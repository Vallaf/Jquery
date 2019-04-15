console.log("exercice 6");
$(document).ready(function () {

    $("#connexion").on("click", () => {

        // alert("Vous avez cliqué sur le bouton 'Se connecter'");

        $(".alert-warning").remove();
        $("Please enter valid email").remove();

        var emailUser = $("#email").val();
        var password = $("#password").val();
       
  
        console.log(emailUser);
        console.log(password);
       
        if (password.length<6) {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").prepend($div);
            $div.text("Password minimum 6 characters");
        }

        if (emailUser === "" && $("#password").val() === "") {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").prepend($div);
            $div.text("Veuillez remplir tous les champs");

        }

        if (emailUser === "hello@me.com" && $("#password").val() === "secret8") {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").append($div);
            $div.text("Vous êtes connecté").css("color", "green");

        }
        if (emailUser !== "hello@me.com" && $("#password").val() !== "secret8") {
            let $div = $("<div>");
            $div.addClass("alert alert-warning");
            $("form").append($div);
            $div.text("Mauvais email ou password").css("color", "red");
        }
        

        $('#email').focusout(function () {

            $('#email').filter(function () {
                var  emailUser = $('#email').val();
                let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test( emailUser)) {
                    alert("Please enter valid email");
                }
            })
        });

      

    });


});
