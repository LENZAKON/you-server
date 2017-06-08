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

                //跳转到学校页面
                window.location.href = "http://192.168.0.106:8080/YOUServer/src/school.html";
                window.event.returnValue=false;

            })
        }
    }
}

var inSch = new indexSchool();
inSch.clickSchool();