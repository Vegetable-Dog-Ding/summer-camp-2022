//轮播图
var grid_a=document.querySelectorAll('.grid-col2 .col2-left .col2-left-image');
var grid_ul=document.querySelector('.grid .page-list');
var grid_pageitems=document.querySelector('.grid .pageitems');
var grid_transformWidth= grid_a[0].offsetWidth;
var grid_a_length=grid_a.length;
var grid_right_page=document.querySelector('.grid .col2-left .next-page');
var grid_left_page=document.querySelector('.grid .col2-left .last-page');
for(var i=0;i<grid_a.length;i++){
    var grid_li=document.createElement('li');
    grid_ul.appendChild(grid_li);
}
var grid_lis=document.querySelectorAll('.grid .col2-left ul li');
for(i=0;i<grid_lis.length;i++){
    grid_lis[i].onmouseover=function(){
        this.className='current';
    }
    grid_lis[i].onmouseout=function(){
        this.className='';
    }
}
for(i=0;i<grid_lis.length;i++){
    grid_lis[i].setAttribute('order',i);
}
for(i=0;i<grid_lis.length;i++){
    grid_lis[i].onclick=function(){
        var grid_order=this.getAttribute('order');
        animateto(grid_pageitems,-grid_order*grid_transformWidth);
        console.log(grid_pageitems.offsetLeft);
        if(grid_order==grid_lis.length-1){
            grid_right_page.disabled='disabled';
            grid_left_page.disabled='';
        }
        else if(grid_order==0){
            grid_left_page.disabled='disabled';
            grid_right_page.disabled='';
        }
        else{
            grid_right_page.disabled='';
            grid_left_page.disabled='';
        }
    }
}
console.log(grid_pageitems.offsetLeft);
grid_right_page.onclick=function(){
    animatefor(grid_pageitems,-grid_transformWidth);
    console.log(grid_pageitems.offsetLeft);
    grid_left_page.disabled='';
    if(grid_pageitems.offsetLeft==-grid_transformWidth*(grid_a_length-2)){
        grid_right_page.disabled='disabled';
    }
}
grid_left_page.onclick=function(){
    animatefor(grid_pageitems,grid_transformWidth);
    console.log(grid_pageitems.offsetLeft);
    grid_right_page.disabled='';
    if(grid_pageitems.offsetLeft==-grid_transformWidth){
        grid_left_page.disabled='disabled';
    }
}

