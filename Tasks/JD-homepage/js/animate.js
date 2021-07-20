var gridRightPage = document.querySelector('.grid .col2-left .next-page');
var gridLeftPage = document.querySelector('.grid .col2-left .last-page');
var killRightPage = document.querySelector('.kill .kill-next');
var killLeftPage = document.querySelector('.kill .kill-last');
function animateTo(obj, target) {
    clearInterval(obj.timer);
    gridRightPage.disabled = 'disabled';
    gridLeftPage.disabled = 'disabled';
    killRightPage.disabled = 'disabled';
    killLeftPage.disabled = 'disabled';
    obj.timer = setInterval(function () {
        var stepTo = (target - obj.offsetLeft) / 10;
        stepTo > 0 ? stepTo = Math.ceil((target - obj.offsetLeft) / 10) : stepTo = Math.floor((target - obj.offsetLeft) / 10);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            gridRightPage.disabled = '';
            gridLeftPage.disabled = '';
            killRightPage.disabled = '';
            killLeftPage.disabled = '';
        }
        else {
            obj.style.left = obj.offsetLeft + stepTo + 'px';
        }
    }, 15);
}
function animateFor(obj, target) {
    clearInterval(obj.timer);
    gridRightPage.disabled = 'disabled';
    gridLeftPage.disabled = 'disabled';
    killRightPage.disabled = 'disabled';
    killLeftPage.disabled = 'disabled';
    var origin = obj.offsetLeft;
    obj.timer = setInterval(function () {
        var stepFor = (origin + target - obj.offsetLeft) / 10;
        stepFor > 0 ? stepFor = Math.ceil((origin + target - obj.offsetLeft) / 10) : stepFor = Math.floor((origin + target - obj.offsetLeft) / 10);
        if (obj.offsetLeft - origin == target) {
            clearInterval(obj.timer);
            gridRightPage.disabled = '';
            gridLeftPage.disabled = '';
            killRightPage.disabled = '';
            killLeftPage.disabled = '';
        }
        else {
            obj.style.left = obj.offsetLeft + stepFor + 'px';
        }
    }, 15);
}

function animateWindow(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var stepWindow = (target - obj.pageYOffset) / 10;
        stepWindow > 0 ? stepWindow = Math.ceil((target - obj.pageYOffset) / 10) : stepWindow = Math.floor((target - obj.pageYOffset) / 10);
        if (obj.pageYOffset == target) {
            clearInterval(obj.timer);
        }
        else {
            obj.scroll(0,obj.pageYOffset+stepWindow);
        }
    }, 15);
}