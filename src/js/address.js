/**
 * Created by Lenovo on 2017/6/11.
 */
function Address() {

}

Address.prototype = {
    returnIndex:function () {
        document.getElementsByClassName("add-return")[0].addEventListener("click",function (e) {
            window.location.href = "index.html";
        })
    },
    turnToDingdan:function () {
        var footPrint = document.getElementsByTagName("nav")[0].getElementsByClassName("footprint")[0];
        footPrint.addEventListener("click",function (e) {
            window.location.href = "dingdan.html";
            // window.event.returnValue=false;
        })
    }
}

var addr = new Address();
addr.returnIndex();
addr.turnToDingdan();