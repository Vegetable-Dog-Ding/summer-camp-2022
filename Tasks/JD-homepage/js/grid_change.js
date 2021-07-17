var a=document.querySelectorAll('.grid-col2 .col2-left .col2-left-image');

var ul=document.querySelector('.grid .page-list');
var pageitems=document.querySelector('.grid .pageitems');
for(var i=0;i<a.length;i++){
    var li=document.createElement('li');
    ul.appendChild(li);
}

// 轮播图
var li=document.querySelectorAll('.grid .col2-left ul li');
for(i=0;i<li.length;i++){
    li[i].onmouseover=function(){
        for(i=0;i<li.length;i++){
            li[i].className='';
        }
        this.className='current';
    }
}
for(i=0;i<li.length;i++){
    li[i].setAttribute('order',i);
}
var transformWidth= a[0].offsetWidth;
for(i=0;i<li.length;i++){
    li[i].onclick=function(){
        var order=this.getAttribute('order');
        animate(pageitems,-order*transformWidth);
    }
}