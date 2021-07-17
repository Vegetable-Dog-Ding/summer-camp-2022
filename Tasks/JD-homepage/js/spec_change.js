var bd_head = document.querySelector('.bd-head');
var a=bd_head.querySelectorAll('a');
var inner=document.querySelectorAll('.bd .inner');
for(var i=0;i<a.length;i++){
    a[i].setAttribute('index',i);
    a[i].onmouseover=function(){
        for(var j=0;j<a.length;j++){
            inner[j].className='inner';
        }
        var k =this.getAttribute('index');
        inner[k].className='inner emerge';
    }
}
var kill_items = document.querySelector('.kill-items');