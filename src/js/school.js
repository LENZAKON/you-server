/**
 * Created by Lenovo on 2017/6/9.
 */
function SchoolDetial() {

}

SchoolDetial.prototype = {
    schoolMore:function () {
        var moreIcon = document.getElementsByClassName("more-icon")[0];
        moreIcon.addEventListener("click",function (e) {
            var target = e.target;
            $(target.parentNode.parentNode.parentNode.getElementsByClassName("school-simple-info")[0]).css("display","none");
            $(target.parentNode.parentNode.getElementsByClassName("school-more")[0]).slideDown();
            $(target).css("display","none");
        })
    }
}

var schDet = new SchoolDetial();
schDet.schoolMore();