function animateto(obj,target) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var stepto=(target-obj.offsetLeft)/10;
        stepto>0? stepto=Math.ceil((target-obj.offsetLeft)/10):stepto=Math.floor((target-obj.offsetLeft)/10);
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
        }
        else{
            obj.style.left=obj.offsetLeft+stepto+'px';
        }
    },15);
}
function animatefor(obj,target) {
    clearInterval(obj.timer);
    var origin=obj.offsetLeft;
    obj.timer=setInterval(function(){
        var stepfor=(origin+target-obj.offsetLeft)/10;
        stepfor>0? stepfor=Math.ceil((origin+target-obj.offsetLeft)/10):stepfor=Math.floor((origin+target-obj.offsetLeft)/10);
        if(obj.offsetLeft-origin==target){
            clearInterval(obj.timer);
        }
        else{
            obj.style.left=obj.offsetLeft+stepfor+'px';
        }
    },15);
}