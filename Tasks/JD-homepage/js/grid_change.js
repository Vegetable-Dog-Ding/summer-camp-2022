//轮播图
var gridA=document.querySelectorAll('.grid-col2 .col2-left .col2-left-image');
var gridUl=document.querySelector('.grid .page-list');
var gridPageItems=document.querySelector('.grid .pageitems');
var gridTransformWidth= gridA[0].offsetWidth;
var gridALength=gridA.length;
var gridTimer;
for(var i=0; i<gridA.length; i++){
    var gridLi=document.createElement('li');
    gridUl.appendChild(gridLi);
}
var gridLis=document.querySelectorAll('.grid .col2-left ul li');
for(i=0;i<gridLis.length;i++){
    gridLis[i].onmouseover=function(){
        this.className='current';     //classList
    }
    gridLis[i].onmouseout=function(){
        this.className='';
    }
}
for(i=0;i<gridLis.length;i++){
    gridLis[i].setAttribute('order',i);
}
console.log(gridALength);
for(i=0;i<gridLis.length;i++){
    gridLis[i].onclick=function(){
        var gridOrder=this.getAttribute('order');
        animateTo(gridPageItems,-gridOrder*gridTransformWidth);
    }
}
gridRightPage.onclick=function(){
    if(gridPageItems.offsetLeft== -gridTransformWidth*(gridALength-1)){
        animateTo(gridPageItems,0);
    }
    else {animateFor(gridPageItems, -gridTransformWidth);}
}
gridLeftPage.onclick=function(){
    if(gridPageItems.offsetLeft==0){
       animateTo(gridPageItems,-(gridALength-1)* gridTransformWidth)
    }
    else {animateFor(gridPageItems,gridTransformWidth);
    }
}
gridTimer=setInterval(function () {
    if(gridPageItems.offsetLeft<= -gridTransformWidth*(gridALength-1)){
    animateTo(gridPageItems,0);
}
else {animateFor(gridPageItems, -gridTransformWidth);}
},4000);
