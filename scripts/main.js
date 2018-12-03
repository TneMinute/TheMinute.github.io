main();
function main() {
    var obj1 = document.getElementById('banner');
    var li = document.getElementsByTagName('li');
    var j = 3;
    var iIndex = 1;
    var time;

    for(var i = 3; i < li.length; i++) {
        if(i == j) {
            li[i].style.opacity = '1';
            continue;
        } else {
            li[i].style.opacity = '0';
        }
    }

    function startRoll() {
        j++;
        if(j >= li.length) {
            j = 3;
        }
        li[j].style.zIndex = iIndex;
        iIndex++;
        fadein(li[j], 1);
    };

    function fadein(obj, period) {
        clearInterval(obj.time);
        obj.time = setInterval(function() {
            var opacityValue = Number.parseFloat(obj.style.opacity);
            opacityValue += 0.02;
            if(opacityValue < 1) {
                obj.style.opacity = opacityValue;
            } else {
                obj.style.opacity = '1';
                clearInterval(obj.time);

                for(var i = 3; i < li.length; i++) {
                    if(i == j) {
                        continue;
                    } else {
                        li[i].style.opacity = '0';
                    }
                }
            }

        }, 20);
    }
    time = setInterval(startRoll, 2000);
}
