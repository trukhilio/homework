window.onload = function(){
    var arr = [];

    var getId = function(id){
        return document.getElementById(id);
    };

    var getName = function(name){
        return document.getElementsByName(name);
    };

    var show = getId("buttonAddNewPerson");

    var showForm = function(){
        getId("formAddPerson").style.display="block";
        getId("formAddPerson").reset();
    };

    show.addEventListener("click", showForm, false);

    var Person = function(namePerson, sname, age, lang){
        this.namePerson = namePerson;
        this.sname = sname;
        this.age = age;
        this.lang = lang;
    };
    var add = function(person){
        arr.push(person);
    };

    add(new Person ('Anton', 'Blinov', 27, ['php', 'java', 'ruby', 'go']));
    add(new Person ('Maria', 'Shults', 30, ['php', 'java', 'python']));
    add(new Person ('Dan', 'Tomovsky', 25, ['java', 'python', 'delphi', 'swift', 'dart']));

    var temp = function(){
        add(new Person (getId("firstName").value, getId("surname").value, getId("agePerson").value, getId("progLang").value));
        getId("formAddPerson").style.display="none";
    };

    getId("submitAddNewPerson").addEventListener("click", temp, false);

    var showArr = function(){
        var table = "<table>";
        for (var i=0; i<arr.length; i++){
            table+= "<tr>";
            for(item in arr[i]){
                arr[i][item];
                table+="<td>" + arr[i][item] + "</td>";
            };
            table+= "</tr>";
         };
        table+="</table>";
        getId("showTable").innerHTML = table;
        getId("changeTableButtons").style.display="block";

    };
    getId("showAllPersons").addEventListener("click", showArr, false);

    console.log(arr);
};
