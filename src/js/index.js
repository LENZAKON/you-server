/**
 * Created by Lenovo on 2017/6/8.
 */

//解决安卓机的软键盘把flex导航栏顶上去
(function () {
    var allHeight = window.innerHeight;

    setInterval(function () {
        if (allHeight != window.innerHeight){
            allHeight - window.innerHeight
            $("nav").css("display","none");
        }else {
            $("nav").css("display","flex");
        }
    },0)
})();


//点击学校
function indexSchool(){

}

indexSchool.prototype = {
    clickSchool: function () {
        var schoolItems = document.getElementsByClassName("school-item");
        for (var i=0;i<schoolItems.length;i++){
            $(schoolItems[i]).on("click",function (e) {
                var schoolName = $(this).find(".school-name").text();
                if (schoolName == "汕头大学"){
                    //跳转到学校页面
                    window.location.href = "shantouSchool.html";
                    window.event.returnValue=false;
                }else if (schoolName == "韩山师范学院"){
                    window.location.href = "hanshiSchool.html";
                    window.event.returnValue=false;
                }else if (schoolName == "汕头职业技术学院"){
                    window.location.href = "shanzhiyuanSchool.html";
                    window.event.returnValue=false;
                }
            })
        }
    },
    turnToDingdan: function () {
        var footPrint = document.getElementsByTagName("nav")[0].getElementsByClassName("footprint")[0];
        footPrint.addEventListener("click",function (e) {
            window.location.href = "dingdan.html";
            // window.event.returnValue=false;
        })
    },
    turnAddress: function () {
        document.getElementsByClassName("curren-add")[0].addEventListener("click",function (e) {
            window.location.href = "address.html";
        })
    },
    turnSchoolSearch:function () {

        document.getElementsByClassName("address-con")[0].getElementsByTagName("input")[0].addEventListener('keypress',function(e){
            if(e.keyCode === 13) {
                window.location.href = "school-search.html";
                window.event.returnValue=false;
            }
        });

    }

}

var inSch = new indexSchool();
inSch.clickSchool();
inSch.turnToDingdan();
inSch.turnAddress();
inSch.turnSchoolSearch();