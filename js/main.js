

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


document.addEventListener('scroll', () => {
    

    const heiPosition = document.querySelector('.aboutWrap').getBoundingClientRect().top + window.pageYOffset;
    const nowHei = document.querySelector('.aboutWrap').clientHeight;
    
    console.log(heiPosition - nowHei);

});