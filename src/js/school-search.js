/**
 * Created by Lenovo on 2017/6/7.
 */

var schoolObj = {
    schoolName:[],
    schoolItem:[]
};
var addressObj = {
    addressName:[],
    addressItem:[]
};



function School() {

}

School.prototype = {
    // schoolObj : {
    //     schoolName:[],
    //     schoolItem:[]
    // },
    // addressObj: {
    //     addressName:[],
    //     addressItem:[]
    // },
    school: function () {
        var schoolItems = document.getElementsByClassName("school-item");
        for (var i=0;i<schoolItems.length;i++){
            var schoolName = schoolItems[i].getElementsByClassName("school-name")[0].innerText;
            schoolObj.schoolName.push(schoolName);
            schoolObj.schoolItem.push(schoolItems[i]);
        }
    },
    address:function () {
        var addressItems = document.getElementsByClassName("address-item");
        for (var i=0;i<addressItems.length;i++){
            var addressName = addressItems[i].getElementsByClassName("address-name")[0].innerText;
            addressObj.addressItem.push(addressItems[i]);
            addressObj.addressName.push(addressName);
        }
    },
    addressInput: function () {
        // this.school();
        // this.address();
        var addCon = document.getElementsByTagName("input")[0].value;
        for (var i=0;i<schoolObj.schoolName.length;i++){
            var s = schoolObj.schoolName[i].indexOf(addCon);

            if (s != -1){
                $(schoolObj.schoolItem[i]).css("display","inline-block");

                //输入框中的文字匹配下拉列表中的文字
                var addConLeng = addCon.length;
                var iItems = schoolObj.schoolItem[i].getElementsByTagName("i");
                for (var g=0;g<schoolObj.schoolItem[i].getElementsByClassName("school-name")[0].innerText.length;g++){
                    if (g < s || g >= s+addConLeng){
                        $(iItems[g+1]).css("color","#38383c");
                    }else if ( g >= s && g < s+addConLeng ){
                        $(iItems[g+1]).css("color","blue");
                    }
                }

            }else {
                $(schoolObj.schoolItem[i]).css("display","none");
            }
        }
        for (var j=0;j<addressObj.addressName.length;j++){
            var y = addressObj.addressName[j].indexOf(addCon);
            if (y != -1){
                $(addressObj.addressItem[j]).css("display","inline-block");

                //输入框中的文字匹配下拉列表中的文字
                var addConLeng = addCon.length;
                var iItems = addressObj.addressItem[j].getElementsByTagName("i");
                for (var g=0;g<addressObj.addressItem[j].getElementsByClassName("address-name")[0].innerText.length;g++){
                    if (g < y || g >= y+addConLeng){
                        $(iItems[g+1]).css("color","#38383c");
                    }else if ( g >= y && g < y+addConLeng ){
                        $(iItems[g+1]).css("color","blue");
                    }
                }

            }else {
                $(addressObj.addressItem[j]).css("display","none");
            }
        }
    },
    returnIndex: function () {
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

var schoolOperate = new School();
schoolOperate.address();
schoolOperate.school();
schoolOperate.returnIndex();
schoolOperate.turnToDingdan();

setInterval(schoolOperate.addressInput,500);

