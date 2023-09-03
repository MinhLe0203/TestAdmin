function Show() {
    var element = document.getElementById("change__information");
    var style = window.getComputedStyle(element);
    var icon = document.getElementById("information__list--items__icon");
    var ManagerDisplay = document.getElementById("dataContainer");
    //
    var colorText = document.getElementById("information__list");
    var ChangeInformation = document.getElementById("Change_information");
    var colorTextChangeInfro__Icon = document.getElementById("changeInfor__Icon");
    var colorTextChangeInfro = document.getElementById("information__list--items__text");
    var information = document.querySelector('.information')
    var ChangePassword = document.getElementById("Change_password");
    var colorTextChangePassword__Icon = document.getElementById("changePassword__icon");
    var colorTextChangePassword = document.getElementById("changePassword__list--items__text");
    //Manager Account 
    var colorTextManagerAccount__Icon = document.getElementById("ManagerAccount");
    var colorTextManagerAccount = document.getElementById("managerAcount__Text");
    //Scheduling
    var AreaSchedule = document.getElementById("Schedule");
    var navbarSchedulingIcon = document.getElementById("scheduling");
    var navbarSchedulingText = document.getElementById("chedulingText");
    if(style.display === "none" || icon.style.transform === "" || information.style.display ==="none") {
        ChangeInformation.style.display = "none";
        ChangePassword.style.display = "none";
        ManagerDisplay.style.display = "none";
        AreaSchedule.style.display = "none";
        information.style.display = 'block';
        element.style.display = "block";
        icon.style.transform = "rotate(90deg)";
        colorText.style.color = "#33b5e5";
        icon.style.color = "#33b5e5";   
        element.style.color = "#fff";
        colorTextChangeInfro__Icon.style.color = "#fff";   
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff";   
        colorTextChangePassword.style.color = "#fff";
        colorTextManagerAccount__Icon.style.color = "#fff" ;
        colorTextManagerAccount.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff";
    }
    else {
        AreaSchedule.style.display = "none";
        element.style.display = "none";
        icon.style.transform = "";
        colorText.style.color = "#fff";
        icon.style.color = "#fff";
        colorTextManagerAccount__Icon.style.color = "#fff" ;
        colorTextManagerAccount.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff";
    }
}

function ShowchangInfor() {
    var information = document.getElementById("information");
    var ChangeInformation = document.getElementById("Change_information");
    var icon = document.getElementById("information__list--items__icon");
    var ManagerDisplay = document.getElementById("dataContainer");
    //
    var colorText = document.getElementById("information__list")
    var colorTextChangeInfro__Icon = document.getElementById("changeInfor__Icon");
    var colorTextChangeInfro = document.getElementById("information__list--items__text");
    //
    var ChangePassword = document.getElementById("Change_password");
    var colorTextChangePassword__Icon = document.getElementById("changePassword__icon");
    var colorTextChangePassword = document.getElementById("changePassword__list--items__text");
    //Manager Account 
    var colorTextManagerAccount__Icon = document.getElementById("ManagerAccount");
    var colorTextManagerAccount = document.getElementById("managerAcount__Text");
    // Scheduling
    var AreaSchedule = document.getElementById("Schedule");
    var navbarSchedulingIcon = document.getElementById("scheduling");
    var navbarSchedulingText = document.getElementById("chedulingText");
    if(ChangeInformation.style.display === "none") {
        ChangeInformation.style.display = "block"
        ChangePassword.style.display = "none";
        AreaSchedule.style.display = "none";
        information.style.display = "none";
        ManagerDisplay.style.display = "none";
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#33b5e5" ;
        colorTextChangeInfro.style.color = "#33b5e5";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";

        colorTextManagerAccount__Icon.style.color = "#fff" ;
        colorTextManagerAccount.style.color = "#fff";

        navbarSchedulingIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff";
    }
    else {
        ChangeInformation.style.display = "none"
        AreaSchedule.style.display = "none"
        colorText.style.color = "#33b5e5";
        icon.style.color = "#33b5e5";  
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextManagerAccount__Icon.style.color = "#fff" ;
        colorTextManagerAccount.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff";
    }

}


function ShowchangPassword() {
    var information = document.getElementById("information");
    var ChangeInformation = document.getElementById("Change_information");
    var ChangePassword = document.getElementById("Change_password");
    var ManagerDisplay = document.getElementById("dataContainer");
    // Xóa màu
    var icon = document.getElementById("information__list--items__icon");
    var colorText = document.getElementById("information__list");
    var colorTextChangeInfro__Icon = document.getElementById("changeInfor__Icon");
    var colorTextChangeInfro = document.getElementById("information__list--items__text");
    //
    var colorTextChangePassword__Icon = document.getElementById("changePassword__icon");
    var colorTextChangePassword = document.getElementById("changePassword__list--items__text");
    //Manager Account 
    var colorTextManagerAccount__Icon = document.getElementById("ManagerAccount");
    var colorTextManagerAccount = document.getElementById("managerAcount__Text");
    //Scheduling
    var AreaSchedule = document.getElementById("Schedule");
    var navbarSchedulingIcon = document.getElementById("scheduling");
    var navbarSchedulingText = document.getElementById("chedulingText");
    if(ChangePassword.style.display === "none") {
        ChangePassword.style.display = "block";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        ManagerDisplay.style.display = "none";
        AreaSchedule.style.display = "none";
        //
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextManagerAccount.style.color = "#fff" ;

        navbarSchedulingIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff" ;

        colorTextManagerAccount__Icon.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#33b5e5" ;
        colorTextChangePassword.style.color = "#33b5e5";
    }
    else {
        ChangePassword.style.display = "none";
        ChangeInformation.style.display = "none"
        colorText.style.color = "#33b5e5";
        icon.style.color = "#33b5e5";  
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff" ;
    }

}

function ShowPassword() {
    var showPassword = document.getElementById("show__password");
    var password = document.getElementById("password");
    if(showPassword.checked) {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}

function ShowChangePassword() {
    var showPassword = document.getElementById("changePassword__show--password");
    var passwordOld = document.getElementById("password__old");
    var password = document.getElementById("password__new");
    var Confirmpassword = document.getElementById("confirm__password--new");
    if(showPassword.checked) {
        passwordOld.type = "text";
        password.type = "text";
        Confirmpassword.type = "text";
    }
    else {
        passwordOld.type = "password";
        password.type = "password";
        Confirmpassword.type = "password";
    }
}

function CloseAdminChangeUser() {
    var close = document.getElementById("Admin__change--user");
    if(close.style.display === "none") {
        close.style.display = "none";
        localStorage.removeItem("IdUser");
    }
    else {
        localStorage.removeItem("IdUser");
        close.style.display = "none";
    }
}
// ClassRoom
// function showInforClassRoom() {
//     // display
//     var managementClassRoom = document.getElementById("management_classRoom");
//     var style = window.getComputedStyle(managementClassRoom);
//     var updateClassRoom = document.getElementById("update_classRoom");
//     var addClassRoom = document.getElementById("add_classRoom");
//     var dataContainer = document.getElementById("dataContainer");
//     var managementClass = document.getElementById("management_class");
//     // text and icon
//     var managerAcountText = document.getElementById("managerAcount__Text");
//     var managerAcountIcon = document.getElementById("managerAcount__Icon");
//     var managerClassRoomText = document.getElementById("managerClassRoom__Text");
//     var managerClassRoomIcon = document.getElementById("managerClassRoom__Icon");
//     //Scheduling
//     var AreaSchedule = document.getElementById("Schedule");
//     var navbarSchedulingIcon = document.getElementById("scheduling");
//     var navbarSchedulingText = document.getElementById("chedulingText");
//     if (style.display === "none") {
//         // display
//         managementClassRoom.style.display = "block";
//         dataContainer.style.display = "none";
//         updateClassRoom.style.display = "none";
//         addClassRoom.style.display = "none";
//         managementClass.style.display = "none";
//         AreaSchedule.style.display = "none";
//         // color
//         managerAcountText.style.color = "#fff";
//         managerAcountIcon.style.color = "#fff";
//         managerClassRoomText.style.color = "#31B1DB";
//         managerClassRoomIcon.style.color = "#31B1DB";
//         navbarSchedulingIcon.style.color = "#fff";
//         navbarSchedulingText.style.color = "#fff";
      
//     } else {
//         managementClassRoom.style.display = "none";
//         dataContainer.style.display = "none";
//         updateClassRoom.style.display = "none";
//         addClassRoom.style.display = "none";
//         managementClass.style.display = "none";
//         navbarSchedulingIcon.style.color = "#fff";
//         navbarSchedulingText.style.color = "#fff";
//     }
// }

// function editInforClassRoom(){
//     var updateClassRoom = document.getElementById("update_classRoom");
//     var managementClassRoom = document.getElementById("management_classRoom");
//     var style = window.getComputedStyle(updateClassRoom);

//     if(style.display === "none"){
//         updateClassRoom.style.display = "block";
//         managementClassRoom.style.display = "none";
//     }

// }
// function addClassRoom(){
//     var addclassRoom = document.getElementById("add_classRoom");
//     var style = window.getComputedStyle(updateClassRoom);
//     var updateClassRoom = document.getElementById("update_classRoom");
//     var managementClassRoom = document.getElementById("management_classRoom");

//     if(style.display === "none"){
//         addclassRoom.style.display = "block";
//         managementClassRoom.style.display = "none";
//         updateClassRoom.style.display = "none";
//     }
// }
function deleteInforClassRoom(){
    alert("Xóa thành công");
}
function checkOnClickEditClassRoom(){
    alert("Sửa thành công");
}
function checkOnClickAddClassRoom(){
    alert("Thêm thành công");
}  

// Class
function showInforClass(){
    var addClass = document.getElementById("add_class");
    var style = window.getComputedStyle(addClass);
    var managementClassRoom = document.getElementById("management_classRoom");
    var updateClass = document.getElementById("update_class");
    var managementClass = document.getElementById("management_class");

    if(style.display === "none"){
        addClass.style.display = "block";
        managementClass.style.display = "none";
        managementClassRoom.style.display = "none";
        updateClass.style.display = "none";
    }
    else{
        managementClass.style.display = "none";
        managementClassRoom.style.display = "none";
        updateClass.style.display = "none";
        addClass.style.display = "none";
    }
}

function editInforClass(){
    var updateClass = document.getElementById("update_class");
    var style = window.getComputedStyle(updateClass);
    var managementClassRoom = document.getElementById("management_classRoom");
    var managementClass = document.getElementById("management_class");

    if(style.display === "none"){
        updateClass.style.display = "block";
        managementClassRoom.style.display = "none";
        managementClass.style.display = "none";
    }

}


function ShowScheduling() {
    //Phần sắp xếp lịch
    var AreaSchedule = document.getElementById("Schedule");
    var navbarSchedulingIcon = document.getElementById("scheduling");
    var navbarSchedulingText = document.getElementById("chedulingText");
    //
    var information = document.getElementById("information");
    var informationText = document.getElementById("information__list");
    var informationIcon = document.getElementById("information__list--items__icon");
    //
    var changeInformation = document.getElementById("Change_information");
    var changeInformationIcon = document.getElementById("changeInfor__Icon");
    var changeInformationText = document.getElementById("information__list--items__text");
    //
    var ChangePass = document.getElementById("Change_password");
    var changePassIcon = document.getElementById("changePassword__icon");
    var changePassText = document.getElementById("changePassword__list--items__text");
    //
    var managerAccount = document.getElementById("dataContainer");
    var managerAccIcon = document.getElementById("managerAcount__Icon");
    var managerAccText = document.getElementById("managerAcount__Text");
    // display
    var managementClassRoom = document.getElementById("management_classRoom");
    var style = window.getComputedStyle(AreaSchedule);
    var updateClassRoom = document.getElementById("update_classRoom");
    var addClassRoom = document.getElementById("add_classRoom");
    var dataContainer = document.getElementById("dataContainer");
    var managementClass = document.getElementById("management_class");
    // text and icon
    var managerAcountText = document.getElementById("managerAcount__Text");
    var managerAcountIcon = document.getElementById("managerAcount__Icon");
    var managerClassRoomText = document.getElementById("managerClassRoom__Text");
    var managerClassRoomIcon = document.getElementById("managerClassRoom__Icon");
    
    if (style.display === "none") {
        // display
        AreaSchedule.style.display = "block";
        managementClassRoom.style.display = "none";
        dataContainer.style.display = "none";
        updateClassRoom.style.display = "none";
        addClassRoom.style.display = "none";
        managementClass.style.display = "none";
        information.style.display = "none";
        changeInformation.style.display = "none";
        ChangePass.style.display = "none";
        managerAccount.style.display = "none";
        // color
        managerAcountText.style.color = "#fff";
        managerAcountIcon.style.color = "#fff";
        managerClassRoomText.style.color = "#fff";
        managerClassRoomIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#31B1DB";
        navbarSchedulingIcon.style.color = "#31B1DB";

        informationText.style.color = "#fff";
        informationIcon.style.color = "#fff";

        changeInformationText.style.color = "#fff";
        changeInformationIcon.style.color = "#fff";
        //
        changePassIcon.style.color = "#fff";
        changePassText.style.color = "#fff";
        //
        managerAccIcon.style.color = "#fff";
        managerAccText.style.color = "#fff";
      
    } else {
        changeInformation.style.display = "none";
        information.style.display = "none";
        ChangePass.style.display = "none";
        managerAccount.style.display = "none";
        AreaSchedule.style.display = "none";
        managementClassRoom.style.display = "none";
        dataContainer.style.display = "none";
        updateClassRoom.style.display = "none";
        addClassRoom.style.display = "none";
        managementClass.style.display = "none";
        navbarSchedulingText.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";

        informationText.style.color = "#fff";
        informationIcon.style.color = "#fff";

        changeInformationText.style.color = "#fff";
        changeInformationIcon.style.color = "#fff";

        changePassIcon.style.color = "#fff";
        changePassText.style.color = "#fff";
        //
        managerAccIcon.style.color = "#fff";
        managerAccText.style.color = "#fff";
    }
}