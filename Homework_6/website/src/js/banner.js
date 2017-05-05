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

    arr[2].classList.add('banner__slides_one');
    arr[2].classList.remove('banner__slides_two', 'banner__slides_three');

    arr[0].classList.add('banner__slides_two');
    arr[0].classList.remove('banner__slides_one', 'banner__slides_three');

    arr[1].classList.add('banner__slides_three');
    arr[1].classList.remove('banner__slides_one', 'banner__slides_two');

    let inTimerFunc = (firstItem, lastItem)=>{
        arr.move(firstItem, lastItem);
        arr[0].classList.add('banner__slides_one');
        arr[0].classList.remove('banner__slides_two', 'banner__slides_three');

        arr[1].classList.add('banner__slides_two');
        arr[1].classList.remove('banner__slides_one', 'banner__slides_three');

        arr[2].classList.add('banner__slides_three');
        arr[2].classList.remove('banner__slides_one', 'banner__slides_two');

        let itemRemove = arr.map((item)=>item.classList.remove(selector));
    };

    if (selector==='banner__slides_moveOne'){
        setTimeout(()=>{inTimerFunc(0, arr.length-1)}, 1000);
    }

    if (selector==='banner__slides_moveTwo')
        setTimeout(()=>{inTimerFunc(arr.length-1, 0)}, 1000);
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

