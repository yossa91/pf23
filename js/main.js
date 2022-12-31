

//인트로 애니메이션 후 헤더아웃 메인인
/*
const mainIn = document.querySelector('main');
const headerOut = document.querySelector('header');

setTimeout(() => {
    mainIn.style.display = 'block';
    mainIn.style.height = 'auto';
    mainIn.style.overflow = 'auto';
    headerOut.style.display = 'none';
}, 2700);
*/


    

//어바웃 스크롤 이벤트 

document.addEventListener('scroll', () => {

    const showBox = document.querySelectorAll('.aboutBox div');
    const lengthBox = document.querySelector('.aboutHei').clientHeight;
    const lengthBoxOne = lengthBox / 3;
    const heiTop = document.querySelector('.aboutFix').getBoundingClientRect().top + window.pageYOffset;
    const length = document.querySelector('.introWrap').clientHeight;

    let nowTop = heiTop - length;
    let opacity;

    if(nowTop < 300){
        showBox[0].style.opacity = 0;
        showBox[1].style.opacity = 0;
        showBox[2].style.opacity = 0;   
    }else if(nowTop > 300 && nowTop < lengthBoxOne){
        opacity = nowTop * 0.001
        showBox[0].style.opacity = opacity;
        showBox[1].style.opacity = 0;
        showBox[2].style.opacity = 0;
    }else if(nowTop > lengthBoxOne && nowTop < lengthBoxOne * 2){
        opacity = (nowTop - lengthBoxOne) * 0.001
        showBox[0].style.opacity = 1;
        showBox[1].style.opacity = opacity;
        showBox[2].style.opacity = 0;
    }else if(nowTop > lengthBoxOne * 2 && nowTop < lengthBoxOne * 3){
        opacity = (nowTop - lengthBoxOne * 2) * 0.001
        showBox[0].style.opacity = 1;
        showBox[1].style.opacity = 1;
        showBox[2].style.opacity = opacity;
    }

    




});