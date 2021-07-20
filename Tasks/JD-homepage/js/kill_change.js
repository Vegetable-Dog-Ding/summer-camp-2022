var killRightPage=document.querySelector('.kill .kill-next');
var killLeftPage=document.querySelector('.kill .kill-last');
var killItems=document.querySelector('.kill .kill-items');
var killA=document.querySelectorAll('.kill .kill-items a');
var killALength=killA.length/4;
var killTransformWidth=killA[0].offsetWidth*4;
killRightPage.onclick=function(){
    if(killItems.offsetLeft== -killTransformWidth*(killALength-1)){
        animateTo(killItems,0);
    }
    else animateFor(killItems,-killTransformWidth);
}
killLeftPage.onclick=function(){
    if(killItems.offsetLeft==0){
        animateTo(killItems,-(killALength-1)*  killTransformWidth);
    }
    else animateFor(killItems,killTransformWidth);
}