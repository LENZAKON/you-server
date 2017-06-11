/**
 * Created by Lenovo on 2017/6/10.
 */

function changeStatusChange() {
    var startX,startY,moveEndX,moveEndY,X,Y;
    $('#change').on('touchstart',function(e){
        //使得页面不能上下滚动
        // e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });

    $('#change').on('touchmove',function(e){
        // e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        moveEndY = e.originalEvent.changedTouches[0].pageY;

        X = moveEndX - startX;
        Y = moveEndY - startY;

        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {

            document.getElementsByClassName("tittle")[0].getElementsByClassName("all-dingdan")[0].className = "all-dingdan select";
            document.getElementsByClassName("tittle")[0].getElementsByClassName("wait-pay")[0].className = "wait-pay unselect";


        }else if ( Math.abs(X) > Math.abs(Y) && X < 0 ){

            document.getElementsByClassName("tittle")[0].getElementsByClassName("all-dingdan")[0].className = "all-dingdan unselect";
            document.getElementsByClassName("tittle")[0].getElementsByClassName("wait-pay")[0].className = "wait-pay select";

        }

    });
}
changeStatusChange();

var DingDan = function () {

};

DingDan.prototype = {
    turnToIndex : function () {
        var index = document.getElementsByTagName("nav")[0].getElementsByClassName("home")[0];
        index.addEventListener("click",function (e) {
            window.location.href = "index.html";
            // window.event.returnValue=false;
        })
    }
}

var dingdan = new DingDan();
dingdan.turnToIndex();