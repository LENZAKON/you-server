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
            $(target.parentNode.parentNode.parentNode.getElementsByClassName("school-simple-info")[0]).slideUp();

            $(target.parentNode.parentNode.getElementsByClassName("school-more")[0]).slideDown();

            document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0].style.display = "inline-block";
            $(target).css("display","none");

            var content1 = target.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("content");
            var len = content1.length;
            for (var i=0;i<len;i++){
                content1[0].className = "total-content";
            }

        })
    },
    customMade: function () {
        var madeBtn = document.getElementsByClassName("made-btn")[0];
        madeBtn.addEventListener("click",function (e) {
            $(document.getElementsByClassName("custom-made-form")[0]).slideDown();
        })
    },
    customMadeCancel: function () {
        var mengBan = document.getElementsByClassName("mengban")[0];
        mengBan.addEventListener("touchstart",function (e) {
            $(document.getElementsByClassName("custom-made-form")[0]).slideUp();
        })
    },
   clickMade: function () {
       var selfMade = document.getElementsByClassName("person-made");
       for (var j=0;j<selfMade.length;j++){
           selfMade[j].getElementsByTagName("label")[0].addEventListener("click",function (e) {
                var targrt = e.target;
                var schoolName = targrt.parentNode.parentNode.parentNode.getElementsByClassName("cus-mad-name")[0].innerText;
                console.log(schoolName)

           })
       }

       var  termMade = document.getElementsByClassName("term-made");
       for (var g=0;g<termMade.length;g++){
           termMade[g].getElementsByTagName("label")[0].addEventListener("click",function (e) {
               var targrt = e.target;
               var schoolName = targrt.parentNode.parentNode.parentNode.getElementsByClassName("cus-mad-name")[0].innerText;
               console.log(schoolName)
           })
       }
   }


}

var schDet = new SchoolDetial();
schDet.schoolMore();
schDet.customMade();
schDet.customMadeCancel();
schDet.clickMade();

function getElementTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}


//解决大学介绍省略的问题
window.onload = function () {

    var lines = (getElementTop(document.getElementsByClassName("icon")[0]) - getElementTop(document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0])) / 46;

    if (parseInt(lines) == 1) {
        document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0].className = "content content-line1";
    } else if (parseInt(lines) == 2) {
        document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0].className = "content content-line2";
    } else if (parseInt(lines) == 3) {
        document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0].className = "content content-line3";
    } else if (parseInt(lines) == 4) {
        document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0].className = "content content-line4";
    } else if (parseInt(lines) <= 0) {
        document.getElementsByClassName("school-introduce")[0].getElementsByClassName("content")[0].style.display = "none";
    }
}