window.onload=function(){
    var arr = [];
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

    var saveData = function(){
        window.localStorage.setItem("key1", JSON.stringify(arr));
    };

    var getArr = function(){
        var getData = window.localStorage.getItem('key1');
        if(getData!==null){
            arr = JSON.parse(getData);
        }
        else{
            return arr;
        }
        return arr;
    };

    var getId = function(id){
        return document.getElementById(id);
    };

    var showForm = function(id){
        getId(id).classList.remove('hideElement');
        getId(id).classList.add('showElement');
    };
    var hideForm = function(id){
        getId(id).classList.add('hideElement');
        getId(id).classList.remove('showElement');
    };
    // saveData();
    //do not unlock - will reset arr only with 3 first persons
    var arrCopy;
    var arrCopyFunc = function(){
        arrCopy = arr.slice();
        return arrCopy;
    };

    var validation = function(){
        var patternNameSname = /^[A-Z][a-z]+$/;
        var patternAge = /^\d{2}$/;
        var patternLang = /^\S+(\s(\S)+)?/;

        var patternFunc = function(pattern, idForm, idMessage){
            getId(idForm).oninput = function() {
                if (pattern.test(getId(idForm).value)) {
                    getId(idForm).classList.add('valid');
                    getId(idForm).classList.remove('error');
                    getId(idMessage).classList.add('messageValid');
                    getId(idMessage).classList.remove('errorMessage');
                }
                else {
                    getId(idForm).classList.remove('valid');
                    getId(idForm).classList.add('error');
                    getId(idMessage).classList.add('errorMessage');
                    getId(idMessage).classList.remove('messageValid');
                }
            };
        };
        patternFunc(patternNameSname, 'firstName', 'errorMessageName');
        patternFunc(patternNameSname, 'surname', 'errorMessageSname');
        patternFunc(patternAge, 'agePerson', 'errorMessageAge');
        patternFunc(patternLang, 'progLang', 'errorMessageProgLang');
    };

    getId('buttonAddNewPerson').addEventListener('click', function(){
        showForm('formAddPerson');
        validation();
    }, false);

    var clearClass = function(nameClass){
        var val = document.getElementsByClassName(nameClass);
        for (var i = val.length-1; i > -1; i--) {
            val[i].classList.remove(nameClass);
        };
    };

    var createModalWindow = function(){
        var parent = document.getElementsByTagName('body')[0];
        var obj = parent.firstChild;
        var modalWindow = document.createElement('div');
        parent.insertBefore(modalWindow, obj);
        modalWindow.id = 'back';
        modalWindow.innerHTML = "<div id='modal'><span>You want to add person</span>" +
        "<span class='modalData'>Name: " + getId("firstName").value + "</br>" +
        "Surname: " + getId("surname").value + "</br>" +
        "Age: " + getId("agePerson").value + "</br>" +
        "Programming languages: " + [getId("progLang").value] +  "</span>" +
        "<input type='button' id='ok' value='OK' class='buttonStyleMini'/>"+
        "<input type='button' id='cancel' value='Cancel' class='buttonStyleMini'/></div>";
    };

    var deleteModalWindow = function(){
        document.body.removeChild(getId('back'));
    };

    var formPerson = function(){
        add(new Person (getId('firstName').value, getId('surname').value, getId('agePerson').value, [getId('progLang').value]));
        saveData();
        arrCopyFunc();
        getId('formAddPerson').reset();
        clearClass('valid');
        clearClass('messageValid');
        if(getId('showAllPersons').value=='Hide table of persons'){
            return showArr(arrCopy);
        };
    };

    getId('submitAddNewPerson').addEventListener('click', function(){
        if (document.querySelectorAll('.error').length==0 && document.querySelectorAll('.valid').length==document.querySelectorAll('.checkIn').length){
            createModalWindow();
            getId('ok').addEventListener('click', function () {
                deleteModalWindow();
                formPerson()
            }, false);
            getId('cancel').addEventListener('click', deleteModalWindow, false);
        }
    }, false);

    getId('closeFormAddNewPerson').addEventListener('click', function(){
        hideForm('formAddPerson');
        getId('formAddPerson').reset();
        clearClass('valid');
        clearClass('messageValid');
        clearClass('error');
        clearClass('errorMessage');
    }, false);

    getArr();
    arrCopyFunc();
    var delThisPerson = function(i){
        arr.splice(i, 1);
        arrCopy.splice(i, 1);
        saveData();
        return showArr(arrCopy);
    };
    var generateArrTable = function(anyArray){
        var table = '<table>';
        table+= '<tr><th>№</th>' + '<th>Name</th>'
            + '<th>Surname</th>'+'<th>Age</th>'+'<th>Programming languages</th></tr>';
        for (var i=0; i<anyArray.length; i++){
            table+= '<tr>';
            table+= '<td>' + (i+1) + '</td>';
            for(item in anyArray[i]){
                anyArray[i][item];
                table+='<td>' + anyArray[i][item] + '</td>';
            };
            table+= '</tr>';
         };
        table+='</table>';
        getId('showTable').innerHTML = table;
    };

    var showArr = function(anyArray){
        generateArrTable(anyArray);
        showForm('changeTableButtons');
        showForm('showTable');
        getId('showAllPersons').value='Hide table of persons';
    };

    getId('showAllPersons').addEventListener('click', function(){
        if(getId('showAllPersons').value=='Show all persons')
        showArr(arr);
        else {
            hideForm('changeTableButtons');
            hideForm('showTable');
            getId('showAllPersons').value='Show all persons';
        }
    }, false);

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

    getId('sortByName').addEventListener('click', function(){sortArr('namePerson')}, false);

    getId('sortByAge').addEventListener('click', function(){sortArr('age')}, false);

    getId('sortByLang').addEventListener('click', function(){sortArr('lang', 'length')}, false);

    getId('sortBySname').addEventListener('click', function(){sortArr('sname')}, false);

    var delPersByNum = function(){
        var num = getId('numberInTheList').value;
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
        getId('numberInTheList').value = '';
        return showArr(arrCopy);
    };
    getId('deletePersonByNumber').addEventListener('click', delPersByNum, false);

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
        var numName = arrCopy.indexOf(getId('nameOfThePerson').value);
        arr.splice(numName, 1);
        arrCopy.splice(numName, 1);
        saveData();
        getId('nameOfThePerson').value = '';
        return showArr(arrCopy);
    };
    getId('deletePersonByName').addEventListener('click', delPersBySname, false);
};


