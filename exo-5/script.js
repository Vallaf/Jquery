console.log("exercice 5");

$(document).ready(function () {



    $("img").on('click', function () {
        $("#computerChoice").remove();
        $("#userChoice").remove();
        $("#result").remove();

        var userChoice = $(this).attr("id");
        var computerChoice = Math.round(Math.random() * 2);


        getUserChoice(userChoice);

        /*  if (computerChoice == 0) {
              computerChoice = "pierre";
  
          }
          else if (computerChoice == 1) {
              computerChoice = "feuille";
  
          }
          else if (computerChoice == 2) {
              computerChoice = "ciseaux";
  
          }
  
          $(".images").append("<div id=computerChoice> Choix du computer : " + computerChoice + "</div>");
          console.log("Choix de l'ordi : " + computerChoice);*/

        computerChoice = getComputerChoice(computerChoice);
        $(".images").append("<div id=computerChoice> Choix du computer : " + computerChoice + "</div>");
        console.log("Choix de l'ordi : " + computerChoice);
        
        determineWinner(userChoice, computerChoice);


    })

    function getUserChoice(userChoice) {

        console.log("Vous avez choisi: " + userChoice);
        $(".images").append("<div id=userChoice> Vous avez choisi : " + userChoice + "</div>");
    }

    function getComputerChoice(computerChoice) {

        if (computerChoice == 0) {
            return "pierre";

        }
        else if (computerChoice == 1) {
            return "feuille";

        }
        else if (computerChoice == 2) {
            return "ciseaux";

        }

    }


    function determineWinner(userChoice, computerChoice, result) {



        if (userChoice == computerChoice) {
            console.log('Egalité');
            result = "EGALITE";

        }

        else if (userChoice == 'pierre' && computerChoice == 'ciseaux') {
            console.log('gagné');
            result = "GAGNE";
        }
        else if (userChoice == 'feuille' && computerChoice == 'pierre') {
            console.log('gagné');
            result = "GAGNE";
        }
        else if (userChoice == 'ciseaux' && computerChoice == 'feuille') {
            console.log('gagné');
            result = "GAGNE";
        }

        else {
            console.log('perdu');
            result = "PERDU";
        }

        if (result === 'GAGNE') {
            $(".images").append("<div id=result> Résultat : " + result + "</div>");
            $("#result").css("color", "green");
        }
        if (result === 'EGALITE') {
            $(".images").append("<div id=result> Résultat : " + result + "</div>");
            $("#result").css("color", "grey");
        }
        if (result === 'PERDU') {
            $(".images").append("<div id=result> Résultat : " + result + "</div>");
            $("#result").css("color", "red");
        }
    }

});