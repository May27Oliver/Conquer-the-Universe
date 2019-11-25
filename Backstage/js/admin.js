function $id(id) {
    return document.getElementById(id);
}

function $class(className) {
    return document.querySelector(className);
}


$('body').on('click', '#btnNewAdmin', function () {
    let newAdmin = $("<tr class='newAdmin'></tr>").html(
        `<td></td>
<td><input id="newAdminName" type="text" value="" name="mng"></td>
<td><input id="newAdminPsw" type="text" value="" name="mng"></td>
<td>
    <select id="adminAuthority" class="form-control">
        <option value="0">唯讀</option>
        <option value="1">管理員</option>
    </select>
</td>
<td>
    <button type="button" class="btn btn-pill btn-success btn-xl" id="btnAddAdmin" onclick=registerAdmin()>新增</button>
</td>
<td>    
    <button type="button" class="btn btn-pill btn-secondary btn-xl" id="btnNoCreateAdmin">取消</button>
</td>`);
    if ($('.newAdmin').length == 0) {
        $('#adminTable').append(newAdmin);
    }
})

$('body').on('click', '#btnNoCreateAdmin', function () {
    this.parentElement.parentElement.remove();
})


/*-------------- 登出 --------------*/
function logOut(){
    let xhr = new XMLHttpRequest();
    let adminName = $class(".adminName");
    let logOut = $class(".logOut");
    xhr.onload=function(){
        if(xhr.status==200){
            logOut.innerHTML = "登入";
            adminName.innerHTML ="";
            location.href = "index.html";
        }
    }
    xhr.open("get", "php/logOut.php", true);
    xhr.send(null);
}
// $id("btnAddAdmin").onclick=registerAdmin;

function registerAdmin(){
    // console.log("帳號：",$id("newAdminName").value);
    // console.log("密碼：",$id("newAdminPsw").value);


    if($id("newAdminName").value=="" && $id("newAdminPsw").value==""){
        loginRig.innerText="帳號或密碼欄位不得為空";
    }else{
        var xhr=new XMLHttpRequest();
        xhr.onload=function(){
            if(xhr.status==200){
                alert("新增帳號成功");
            }else{
                alert(xhr.responseText);
            }   
        }
    }
        let url="php/registerAdmin.php";
        xhr.open("post",url,true);
        let query_string=`newAdminName=${$id("newAdminName").value} & newAdminPsw=${$id("newAdminPsw").value}`;
        //memId,memPsw跟登入一樣
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(query_string);

}

window.addEventListener("load", function(){
    //-------------- 檢查是否登入 --------------//
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let admin = JSON.parse(xhr.responseText);
        let adminName = $class(".adminName");
        let logOut = $class(".logOut");
        if (admin.adminNo) {
            adminName.innerHTML = `嗨，${admin.adminName}！`;
            logOut.innerText = "登出";
        }
    }
    xhr.open("get", "php/getLoginInfo.php", true);
    xhr.send(null);
}, false);