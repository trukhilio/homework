window.onload = function(){

    var getId = function (id){
        return document.getElementById(id);
    };
    var changePage = document.body.innerHTML;
    var textClear = function(){
        var findTextClear = /<span class="changeColor">([\s\S]+?)<\/span>/gi;
        var onFinishClear = changePage.replace(findTextClear,'$1');
        if (onFinishClear!== undefined) {
            document.body.innerHTML = onFinishClear;
        };
        return window.onload();
    };

    var textFindOnPage = function(){
        var findText = new RegExp(getId("textFind").value + '(?![^<]*?>)', 'ig');
        if(getId("textFind").value!=="") {
            var  onFinish = changePage.replace(findText, '<span class="changeColor">$&</span>');
            console.log(onFinish);
            if (onFinish !== undefined) {
                document.body.innerHTML = onFinish;
            }
            return window.onload();
        };
    };

    getId('findButton').addEventListener('click', textFindOnPage, false);
    getId('clearButton').addEventListener('click', textClear, false);

};
