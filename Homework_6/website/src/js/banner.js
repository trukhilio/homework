let slideIndex = 0;
let selectorFinder = (selector)=> document.querySelectorAll(selector);
let selectorOne = (selector)=> document.querySelector(selector);

let slideShow = (n, selector)=>{
    let slide = selectorFinder('.banner__slides_item');
    if (n > slide.length-1) {slideIndex = 0; n=slideIndex}
    if (n < 0) {slideIndex = slide.length-1; n=slideIndex}
    let x = 0;
    if (selector==='banner__slides_moveOne') {x = n-1}
    if (selector==='banner__slides_moveTwo') {x = n+1}
    if(x<0){x=slide.length-1}
    if(x>slide.length-1) {x=0}
    let item = Array.from(slide, (item)=>
        [item.classList.remove('banner__slides_on'),
        item.classList.remove('banner__slides_off'),
        item.classList.remove(selector)]);

    slide[x].classList.add(selector);
    slide[n].classList.add(selector);
    slide[n].classList.add('banner__slides_off');
    setTimeout(()=>{
        slide[x].classList.remove(selector);
        slide[n].classList.remove('banner__slides_off');
        slide[n].classList.remove(selector);
        slide[n].classList.add('banner__slides_on');
    }, 500);
};

let plusOne =(n, selector)=>{
    slideIndex +=n;
    slideShow(slideIndex, selector);
};

let slideTime = setInterval(()=>plusOne(1,'banner__slides_moveOne'), 5000);

let selectLeft = selectorOne('.arrow__item_left');
let selectRight = selectorOne('.arrow__item_right');

let slideNext = (n, selector)=>{
    clearInterval(slideTime);
    plusOne(n, selector);
    slideTime = setInterval(()=>plusOne(1,'banner__slides_moveOne'), 5000);
};

selectLeft.addEventListener('click', ()=>slideNext(-1, 'banner__slides_moveTwo'), false);
selectRight.addEventListener('click', ()=>slideNext(1, 'banner__slides_moveOne'), false);

