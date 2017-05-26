const selectorFinder = (selector)=> document.querySelectorAll(selector);
const selectorOne = (selector)=> document.querySelector(selector);

const slide = selectorFinder('.banner__slides_item');
let arr = Array.from(slide);

const slideShow = (selector)=>{
    Array.prototype.move = (old_index, new_index) =>{
        if (new_index >= arr.length) {
            let k = new_index - arr.length;
            while ((k--) + 1) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    };

    let itemAdd = arr.map((item)=>item.classList.add(selector));

    const changerFunc = ()=>{
        let len = arr.length;
        let arrTem = () => arr.map((item ,key) => item.style.order = key);
        if (selector==='banner__slides_moveOne'){
            arr.move(0, len-1);
            arrTem();
        }

        if (selector==='banner__slides_moveTwo'){
            arr.move(len-1, 0);
            arrTem();
        }

        let itemRemove = arr.map((item)=>item.classList.remove(selector));
    };

    setTimeout(()=>{changerFunc()}, 1000);
};

let slideTime = setInterval(()=>slideShow('banner__slides_moveOne'), 5000);

let selectLeft = selectorOne('.arrow__item_left');
let selectRight = selectorOne('.arrow__item_right');

let slideNext = (selector)=>{
    clearInterval(slideTime);
    slideShow(selector);
    slideTime = setInterval(()=>slideShow('banner__slides_moveOne'), 5000);
};

selectLeft.addEventListener('click', ()=>slideNext('banner__slides_moveTwo'), false);
selectRight.addEventListener('click', ()=>slideNext('banner__slides_moveOne'), false);

