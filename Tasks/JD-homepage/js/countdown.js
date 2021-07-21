var hour=document.querySelector('.countdown .hour');
var minute=document.querySelector('.countdown .minute');
var second=document.querySelector('.countdown .second');
var inputTime= +new Date('2021-7-25 0:0:0');
var x= new Date();
function countDown(){
    var nowtime = +new Date();
    var times = (inputTime-nowtime)/1000;
    var h = parseInt(times / 60 / 60);
    h<10 ? h='0'+h:h;
    hour.innerHTML = h;
    var m = parseInt(times / 60 % 60);
    m<10 ? m='0'+m:m=m;
    minute.innerHTML=m;
    var s = parseInt(times % 60);
    s<10 ? s='0'+s:s=s;
    second.innerHTML=s;
}
countDown();
setInterval(countDown,1000);