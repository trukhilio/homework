let getClass = (selector)=> document.querySelectorAll(selector);
let getClassTwo = (selector)=> document.querySelector(selector);

let tabs = getClass('.contentTwo__tab');
let tabsNum = getClass('.tabs__number');
let tabsContent = getClass('.contentTwo__text');
let tabOne = getClassTwo('.contentTwo__tab_one');
let tabTwo = getClassTwo('.contentTwo__tab_two');
let tabThree = getClassTwo('.contentTwo__tab_three');


let activeFunc = (selectElem,elemClass,n)=>{
    let tabsItem = Array.from(selectElem, (item)=>
        item.classList.remove(elemClass));
    selectElem[n].classList.add(elemClass);
};

let changerFunc = (n)=>{
    activeFunc(tabs, 'contentTwo__tab_active', n);
    activeFunc(tabsNum, 'tabs__number_active', n);
    activeFunc(tabsContent, 'contentTwo__text_active', n);
};

tabOne.addEventListener('click', ()=>{changerFunc(0)}, false);

tabTwo.addEventListener('click', ()=>{changerFunc(1)}, false);

tabThree.addEventListener('click', ()=>{changerFunc(2)}, false);