var fixedColumn=document.getElementById('fixed-column');
var back=document.querySelector('#fixed-column .fixed-column-back');
var columnSpec=document.querySelector('#fixed-column .column-spec');
document.addEventListener('scroll',function(){
    if(window.pageYOffset>=600){
        fixedColumn.classList.remove('unfixed');
        back.style.display='flex';
    }
    else {
        fixedColumn.classList.add('unfixed');
        back.style.display='none';
}});
back.addEventListener('click',function(){
    animateWindow(window,0);
})
// // setInterval(function(){
// //     console.log(window.pageYOffset);
// },2000);
columnSpec.addEventListener('click',function(){
    animateWindow(window,900);
})
