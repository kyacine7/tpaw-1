
$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    $(document).keyup(function () {

        valid = true;
        if ($("#nom").val().length < 5) {
            $("#nom").css("border-color", "#ff0000");
            valid = false;
        }
        else {
            $("#nom").css("border-color", "#48DE14");
        }

        if ($("#prenom").val().length < 5) {
            $("#prenom").css("border-color", "#ff0000");
            valid = false;
        }
        else {
            $("#prenom").css("border-color", "#48DE14");
        }

        if ($("#bday").val().length < 5) {
            $("#bday").css("border-color", "#ff0000");
            valid = false;
        }
        else {
            $("#bday").css("border-color", "#48DE14");
        }

        if ($("#adress").val().length < 5) {
            $("#adress").css("border-color", "#ff0000");
            valid = false;
        }
        else {
            $("#adress").css("border-color", "#48DE14");
        }

        if ($("#mail").val().length < 5) {
            $("#mail").css("border-color", "#ff0000");
            valid = false;
        }
        else {
            $("#mail").css("border-color", "#48DE14");
        }

        if ($("#mail").val().length < 5) {
            $("#mail").css("border-color", "#ff0000");
            valid = false;
        }
        else {
            $("#mail").css("border-color", "#48DE14");
        }
        return valid;
        // Y mettre le code jQuery pour valider tous les champs du formulaire
    });


    // affichage de la modale de bonne insertion de formulaire
    /*
    $("#formulaire").on("submit", function (event) {
        event.preventDefault();


        if ($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#bday").val() !== ""
            && $("#adress").val() !== "" && $("#mail").val() !== "") {

            $('#myModal').modal("show");
            $(".modal-title").html("Bienvenue " + document.querySelector("#prenom").value);

            // $('.modal-body').html('\<a href="https://www.google.com/maps/place/Paris/@48.8587741,2.2069771,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219" \><img src="staticmap.png"/>\<\/a\>');
            $('.modal-body').html("Vous étes né le: </br> " + document.querySelector("#bday").value +
                "</br>Et vous Habitez à: " + document.querySelector("#adress").value
                + '</br><a target="_blank" href="https://maps.google.com/maps?q='
                + document.querySelector("#adress").value
                + '"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='
                + document.querySelector("#adress").value + '&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
        }
    });*/

    // affigage de longeur de chaine de caractaire OnLive
    $(document).ready(function () {
        console.log("test longueur de text");
        $(document).keyup(function () {
            $("#nomL").html($("#nom").val().length + " Car");
            $("#prenomL").html($("#prenom").val().length + " Car");
            $("#bdayL").html($("#bday").val().length + " Car");
            $("#adressL").html($("#adress").val().length + " Car");
            $("#mailL").html($("#mail").val().length + " Car");
        });
    })

    // adress par GPS
    $("#location").on("click", function () {
        getLocation();

    });

    // enrigistrer un formulaire 
    $("#formulaire").on("submit", function storage(event) {
        event.preventDefault();

        var inputNom = document.getElementById("nom");
        var inputPrenom = document.getElementById("prenom");
        var inputBday = document.getElementById("bday");
        var inputAdress = document.getElementById("adress");
        var inputEmail = document.getElementById("mail");

            //stocker les valeurs saisie dans le navigateur
            localStorage.setItem("nom", inputNom.value);
            localStorage.setItem("prenom", inputPrenom.value);
            localStorage.setItem("bday", inputBday.value);
            localStorage.setItem("adress", inputAdress.value);
            localStorage.setItem("mail", inputEmail.value);

            $('#success').addClass("alert alert-success").text("Bravo! le formulaire est sauvegardé.");

            $("#table").show();

            // ajout des valeurs saisie dans le tableau
            document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                .innerHTML + '<tr><td>' + localStorage.getItem("nom") + '</td><td>' + localStorage.getItem("prenom")
                + '</td><td>' + localStorage.getItem("bday") + '</td><td><a href="https://maps.google.com/maps?q='
                + localStorage.getItem("adress") + '">' + localStorage.getItem("adress")
                + '</a></td><td><a href=mailto:>' + localStorage.getItem("mail") + '</a></td>';
      

    });


});