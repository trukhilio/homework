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

    var showForm = function(){
        getId("formAddPerson").style.display="block";
        getId("formAddPerson").reset();
    };

    getId("buttonAddNewPerson").addEventListener("click", showForm, false);

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
    //function(){
    // return arr.slice();
    // };

    var temp = function(){
        add(new Person (getId("firstName").value, getId("surname").value, getId("agePerson").value, [getId("progLang").value]));
        getId("formAddPerson").style.display="none";
        saveData();
        arrCopy = arr.slice();
    };

    getId("submitAddNewPerson").addEventListener("click", temp, false);

    getArr();
    arrCopy = arr.slice();
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
        getId("changeTableButtons").style.display="block";
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
    // var sortByProp = function(prop){
    //     var sort = arrCopy.sort(sorting(prop));
    //     generateArrTable(arrCopy);
    // };


    var sortArrByName = function() {
        var sort = arrCopy.sort(sorting('namePerson'));
        generateArrTable(arrCopy);
        // return arrCopy;
    };
    getId("sortByName").addEventListener("click", sortArrByName, false);

    var sortArrByAge = function(){
        var sort = arrCopy.sort(sorting('age'));
        generateArrTable(arrCopy);
        // return arrCopy;
    };
    getId("sortByAge").addEventListener("click", sortArrByAge, false);

    var sortArrByLang = function(){
        var sort = arrCopy.sort(sorting('lang', 'length'));
        generateArrTable(arrCopy);
        // return arrCopy;
    };
    getId("sortByLang").addEventListener("click", sortArrByLang, false);

    var sortArrBySurname = function(){
        var sort = arrCopy.sort(sorting('sname'));
        generateArrTable(arrCopy);
        // return arrCopy;
    };
    getId("sortBySname").addEventListener("click", sortArrBySurname, false);

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
        console.log (numArr);
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
