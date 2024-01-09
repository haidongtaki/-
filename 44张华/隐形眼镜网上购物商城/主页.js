var ecbt = document.querySelector('#cbt');
var egcode = document.querySelector('.gcode');
var usercode = document.querySelector('#usercode');
var getcode = function () {
    //Math.random()生成0~1的随机数,小数点在16或17之间
    //toString(36)转为36进制,36进制包含所以数字和字母
    //substr(3, 5)从第三位截取往后五位,因为前两位是0
    var code = Math.random().toString(36).substr(3, 4);
    return code;
}


egcode.onclick = function () {
    egcode.innerHTML = getcode();
}
egcode.click();
var parent = document.querySelector('form');

//进行注册
var reg = document.querySelector('#reg');
//判断验证码是否正确
ecbt.onclick = function () {
    if (egcode.innerHTML == usercode.value) {
        var a = confirm('验证码正确');
        if (a == true) {
            //验证码正确删除验证码节点

            parent.removeChild(parent.children[2]);

        }

        return false;
    } else {
        alert('验证码错误');
        return false;
    }

}
//使用正则表达式检验注册的账号密码等是否符合要求
var users = /^[0-9]{8,}$/;
var passwords = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;

reg.onclick = function () {
    var user = document.querySelector('#user').value;
    var password = document.querySelector('#password').value;

    if (users.test(user)) {

    } else {
        alert('账号不符合要求');
        return false;
    }
    if (passwords.test(password)) {
        if (password != password1) {//判断两次输入的值是否一致，不一致则显示错误信息
            document.getElementById("msg").innerHTML = "两次输入密码不一致，请重新输入";//在div显示错误信息
            return false;
        } else {
            //密码一致，可以继续下一步操作
            document.getElementById("msg").innerHTML = "";

        }
    } else {
        alert('密码不符合要求');
        return false;
    }
    if ((users.test(user)) && (passwords.test(password))) {
        alert('登录成功');
    }
}
var ecbt1 = document.querySelector('#cbt1');
var usercode1 = document.querySelector('#usercode1');
//进行注册
var reg1 = document.querySelector('#reg1');

//使用正则表达式检验注册的账号密码等是否符合要求
var users1 = /^[0-9]{8,}$/;
var passwords1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
var phones1 = /^[0-9]{11}$/;
var regus1 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;

reg1.onclick = function () {
    var user1 = document.querySelector('#user1').value;
    var password2 = document.querySelector('#password2').value;
    var password1 = document.querySelector('#password1').value;
    var phone1 = document.querySelector('#phone1').value;
    var regu1 = document.querySelector('#regu1').value;


    if (users1.test(user1)) {

    } else {
        alert('账号不符合要求');
        return false;
    }
    if (passwords1.test(password2)) {
        if (password2 != password1) {//判断两次输入的值是否一致，不一致则显示错误信息
            document.getElementById("msg1").innerHTML = "两次输入密码不一致，请重新输入";//在div显示错误信息
            return false;
        } else {
            //密码一致，可以继续下一步操作
            document.getElementById("msg1").innerHTML = "";

        }
    } else {
        alert('密码不符合要求');
        return false;
    }
    if (phones1.test(phone1)) {


    } else {
        alert('号码不符合要求');
        return false;

    }
    if (regus1.test(regu1)) {


    } else {
        alert('邮箱不符合要求');
        return false;

    }
    if ((users1.test(user1)) && (passwords1.test(password2)) && (regus1.test(regu1)) &&
        (phones1.test(phone1)) && (password2 = password1)) {
        alert('注册成功');
    }
}