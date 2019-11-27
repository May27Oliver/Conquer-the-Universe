function $id(id) {
    return document.getElementById(id);
}

function $class(className) {
    return document.querySelector(className);
}

let backendCloud = $id("backendCloud");
let loginBoxClose = $id("loginBoxClose");
let loginWrap = $id("loginWrap");
let loginPage = $class(".loginPage");
let adminId = $id("adminId");
let adminPsw = $id("adminPsw");
let adminName = $id("adminName");
let loginMsg = $id("loginMsg");

/*-------------- 燈箱開關 --------------*/
//燈箱打開
function loginAdmin() {
    if (!sessionStorage["adminId"]) {
        loginWrap.style.display = "";
        loginPage.style.display = "";
    } else {
        location.href = "adminManage.html";
    }
}
//燈箱關閉
function closeBox() {
    loginWrap.style.display = "none";
    adminId.value = "";
    adminPsw.value = "";
    loginMsg.innerText = "";
}

/*-------------- 管理員登入回應 --------------*/
function login() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (!sessionStorage["adminId"]) {
            let admin = JSON.parse(xhr.responseText);
            if (admin.error) {
                loginMsg.innerText = admin.error;
            } else {
                loginWrap.style.display = "none";
                loginPage.style.display = "none";
                location.href = "adminManage.html";
            }
        } else {
            loginMsg.innerText = admin.error;
        }
    }

    let url = "php/login.php";
    xhr.open("post", url, true);
    let query_string = `adminId=${adminId.value} & adminPsw=${adminPsw.value}`;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(query_string);
    // console.log(query_string);
}