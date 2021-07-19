var kill_right_page=document.querySelector('.kill .kill-next');
var kill_left_page=document.querySelector('.kill .kill-last');
var kill_items=document.querySelector('.kill .kill-items');
var kill_a=document.querySelectorAll('.kill .kill-items a');
var kill_a_length=kill_a.length/4;
var kill_transformWidth=kill_a[0].offsetWidth*4;
console.log(kill_a_length);
kill_right_page.onclick=function(){
    animatefor(kill_items,-kill_transformWidth);
    kill_left_page.disabled='';
    if(kill_items.offsetLeft==-kill_transformWidth*(kill_a_length-2)){
        kill_right_page.disabled='disabled';
    }
}
kill_left_page.onclick=function(){
    animatefor(kill_items,kill_transformWidth);
    kill_right_page.disabled='';
    if(kill_items.offsetLeft==-kill_transformWidth){
        kill_left_page.disabled='disabled';
    }
}
