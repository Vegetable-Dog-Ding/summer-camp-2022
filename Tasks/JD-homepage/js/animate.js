function animate(obj,target) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step=(target-obj.offsetLeft)/10;
        step>0? step=Math.ceil((target-obj.offsetLeft)/10):step=Math.floor((target-obj.offsetLeft)/10);
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
        }
        else{
            obj.style.left=obj.offsetLeft+step+'px';
        }
    },15);
}