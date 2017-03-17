window.onload = function(){
    var arr = [];

    var saveData = function(){
        window.localStorage.setItem("key1", JSON.stringify(arr));
    };

    var getArr = function(){
        var getData = window.localStorage.getItem("key1");
        arr = JSON.parse(getData);
        return arr;
    };

    var getId = function(id){
        return document.getElementById(id);
    };

    var showForm = function(id){
        getId(id).classList.remove("hideElement");
        getId(id).classList.add("showElement");
    };
    var hideForm = function(id){
        getId(id).classList.add("hideElement");
        getId(id).classList.remove("showElement");
    };

    getId("buttonAddNewPerson").addEventListener("click", function(){showForm("formAddPerson")}, false);

    var Person = function(namePerson, sname, age, lang){
        this.namePerson = namePerson;
        this.sname = sname;
        this.age = age;
        this.lang = lang;
    };
    var add = function(person){
        arr.push(person);
    };

    add(new Person ('Anton', 'Tomovsky', 27, ['php', 'java', 'ruby', 'go']));
    add(new Person ('Maria', 'Shults', 25, ['php', 'java', 'python']));
    add(new Person ('Dan', 'Blinov', 30, ['java', 'python', 'delphi', 'swift', 'dart']));
    // saveData();
    //do not unlock - will reset arr only with 3 first persons
    var arrCopy = arr.slice();
    var arrCopyFunc = function(){
        arrCopy = arr.slice();
    };

    var temp = function(){
        add(new Person (getId("firstName").value, getId("surname").value, getId("agePerson").value, [getId("progLang").value]));
        saveData();
        arrCopyFunc();
        getId("formAddPerson").reset();
    };

    getId("submitAddNewPerson").addEventListener("click", function(){
        var confirmPerson = confirm ("You want to add person\n" +
            "\nName: " + getId("firstName").value +
            "\nSurname: " + getId("surname").value +
            "\nAge: " + getId("agePerson").value +
            "\nProgramming languages: " + [getId("progLang").value]);
        if (confirmPerson===true) temp();
    }, false);

    getId("closeFormAddNewPerson").addEventListener("click", function(){
        hideForm("formAddPerson");
        getId("formAddPerson").reset();
    }, false);

    getArr();
    arrCopyFunc();
    var generateArrTable = function(anyArray){
        var table = "<table>";
        for (var i=0; i<anyArray.length; i++){
            table+= "<tr>";
            table+= "<td>" + (i+1) + "</td>";
            for(item in anyArray[i]){
                anyArray[i][item];
                table+="<td>" + anyArray[i][item] + "</td>";
            };
            table+= "</tr>";
         };
        table+="</table>";
        getId("showTable").innerHTML = table;
    };

    var showArr = function(anyArray){
        generateArrTable(anyArray);
        showForm("changeTableButtons");
    };

    getId("showAllPersons").addEventListener("click", function(){showArr(arr)}, false);

    var sorting = function(prop, moreProp){
            return (function (a, b) {
                if (moreProp===undefined) {
                    if (a[prop] < b[prop]) {
                        return -1;
                    }
                    if (a[prop] > b[prop]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                else{
                    return b[prop][moreProp] - a[prop][moreProp]
                }
            });
    };

    var sortArr = function(prop, moreProp) {
        arrCopy.sort(sorting(prop, moreProp));
        generateArrTable(arrCopy);
    };

    getId("sortByName").addEventListener("click", function(){sortArr("namePerson")}, false);

    getId("sortByAge").addEventListener("click", function(){sortArr("age")}, false);

    getId("sortByLang").addEventListener("click", function(){sortArr("lang", "length")}, false);

    getId("sortBySname").addEventListener("click", function(){sortArr("sname")}, false);

    var delPersByNum = function(){
        var num = getId("numberInTheList").value;
        var numValue = arrCopy[num-1].namePerson;
        arrCopy.splice(num-1, 1);
        function numSpliceArr(){
            for (var i=0; i<arr.length; i++){
                if (arr[i].namePerson == numValue)
                    break;
            };
            return i;
        };
        var numArr = numSpliceArr();
        arr.splice(numArr, 1);
        saveData();
        return showArr(arrCopy);
    };
    getId("deletePersonByNumber").addEventListener("click", delPersByNum, false);

    var delPersBySname = function(){
        Array.prototype.indexOf = inf;
        function inf(value){
            var i;
            for (i=0; i<this.length; i++){
                if (this[i].namePerson == value)
                    break;
            }
            return i
        };
        var numName = arrCopy.indexOf(getId("nameOfThePerson").value);
        arr.splice(numName, 1);
        arrCopy.splice(numName, 1);
        saveData();
        return showArr(arrCopy);
    };
    getId("deletePersonByName").addEventListener("click", delPersBySname, false);
};
