window.onload = function(){
    var getId = function(id){
        return document.getElementById(id);
    };

    var patternName = /^[a-zA-Z]+$/;
    var patternEmail = /^[a-zA-Z0-9._-]+@[a-z0-9.-]+\.([a-z]{2,3})+$/;

    var submitForm = function(){
        var inputName = getId("namePerson").value;
        var inputEmail = getId("emailPerson").value;

        if (patternName.test(inputName)) {
            getId("namePerson").classList.add("normal");
            getId("namePerson").classList.remove("error");
            getId("errorMessageName").classList.add("message");
            getId("errorMessageName").classList.remove("errorMessage");
        }
        else {
            getId("namePerson").classList.remove("normal");
            getId("namePerson").classList.add("error");
            getId("errorMessageName").classList.add("errorMessage");
            getId("errorMessageName").classList.remove("message");
        }

        if(patternEmail.test(inputEmail)){
            getId("emailPerson").classList.add("normal");
            getId("emailPerson").classList.remove("error");
            getId("errorMessageEmail").classList.add("message");
            getId("errorMessageEmail").classList.remove("errorMessage");
        }
        else{
            getId("emailPerson").classList.remove("normal");
            getId("emailPerson").classList.add("error");
            getId("errorMessageEmail").classList.add("errorMessage");
            getId("errorMessageEmail").classList.remove("message");
        }
        // console.log(inputName);
        // console.log(inputEmail);
    };
    getId("submit").addEventListener("click", submitForm, false);
};
