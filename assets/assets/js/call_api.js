function login() {
  const loginUrl = "https://localhost:7013/api/Users/SignIn";
  const username = document.getElementById("name-login").value;
  const password = document.getElementById("password").value;
  fetch(loginUrl, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email: username,
      passWordHas: password,
      }),
  })
  .then((response) => {
      if (!response.ok) {
        alert("Đăng nhập không thành công.\nVui lòng kiểm tra lại tài khoản và mật khẩu");
      throw new Error("Đăng nhập không thành công.");
      }
      return response.json();
  })
  .then((data) => {
    if(data.token === "Tên đăng nhập hoặc mật khẩu không đúng" || data.token === "Tài khoản của bạn đã bị khóa. Vui lòng liên hệ Admin để mở") {
        alert(data.token);
    }
    else {
        // Xử lý dữ liệu trả về từ API
        // console.log(data);
        // const setjson=JSON.stringify(data);
        
        localStorage.setItem("login",data.token);
        // Thực hiện các hành động khác sau khi đăng nhập thành công
        const namelogin = data.name;
        localStorage.setItem("fullname",namelogin);
        localStorage.setItem("email",data.email);
        localStorage.setItem("avata",data.avata);
        if(username == data.email && password == data.password  ) {
            window.location.href = "main_admin.html";
        }
        else {
            alert(data.token);
        }
    }

      // localStorage.removeItem("signin");
  })
  .catch((error) => {
      // Xử lý lỗi
      console.error(error);
  });
}

// sign up
function signin() {
  const signinUrl = "https://localhost:7013/api/Users/SignUp";
  const email = document.getElementById("account").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmPassWord").value;
  const firstname = document.getElementById("first__name").value;
  const lastname = document.getElementById("last__name").value;
  const dateofbirth = document.getElementById("birth").value;
  var genderRadioButtons = document.getElementsByName("gender");
  var genderValue;
  for (var i = 0; i < genderRadioButtons.length; i++) {
      if (genderRadioButtons[i].checked) {
          var selectedGender = genderRadioButtons[i].value;
          genderValue = (selectedGender === "Nam") ? "1" : "0";
      }
  }
  const numberphone = document.getElementById("phonenumber").value;
  var avata = document.getElementById("avata").value;
  if (genderValue === "0" && (!avata || avata === "")) {
    avata = "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000";
  } else if (genderValue === "1" && (!avata || avata === "")) {
    avata = "https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png";
  }
  fetch(signinUrl, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName:firstname,
        lastName:lastname,
        email: email,
        phoneNumber: numberphone,
        password: password,
        confirmPassword: confirmpassword,
        gender: genderValue,
        dateOfBirth: dateofbirth,
        avata: avata
      }),
  })
  .then((response) => {
      if (!response.ok) {
      alert("Đăng ký không thành công.\nVui long kiểm tra lại")
      throw new Error("Đăng ký không thành công.");
      }
      return response.json();
  })
  .then((data) => {
      // Xử lý dữ liệu trả về từ API
      alert(data.status);
      window,location.href = "index.html";
      // alert(data.result);

  })
  .catch((error) => {
      // Xử lý lỗi
      console.error(error);
  });
}

function DeleteLocalStorage() {
  localStorage.removeItem("fullname");
  localStorage.removeItem("avata");
  localStorage.removeItem("login");
  localStorage.removeItem("dateofbirth");
  localStorage.removeItem("email");
  localStorage.removeItem("username");
  localStorage.removeItem("gender");
}

function getInformation() {
  const getInforUrl = "https://localhost:7013/api/Users/Info";

  fetch(`${getInforUrl}?email=${localStorage.getItem("email")}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error("Lỗi khi gọi API");
      }
      return response.json();
  })
  .then((data) => {
    localStorage.setItem("username", data.email);
    localStorage.setItem("fullname", data.userName);
    const dateObject = new Date(data.dateOfBirth);

    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
    const year = dateObject.getFullYear();
    
    const formattedDate = `${day}-${month}-${year}`;
    localStorage.setItem("dateofbirth", formattedDate);
    localStorage.setItem("gender", data.gender === 1 ? "Nữ" : "Nam");

    // Lấy tên đăng nhập từ localStorage
    const username = localStorage.getItem("email");
    const dateofbirth = localStorage.getItem("dateofbirth");
    const gender = localStorage.getItem("gender");
    // Hiển thị tên đăng nhập
    const nameLogin = document.getElementById("account__infor--username__input"); 
    const FullName = document.getElementById("account__infor--fullname__input"); 
    const DateOfBirth = document.getElementById("infor__list--birth__input"); 
    const Gender = document.getElementById("infor__list--gender__input"); 
    // Change infor
    const changeFirstName = document.getElementById("Change__firstName"); 
    const changeLastName = document.getElementById("Change_lastName"); 
    const changeDateOfBirth = document.getElementById("Change__dateOfBirth"); 
    const changeGender = document.getElementById("Change__gender"); 
    const changeAvata = document.getElementById("Change_avata"); 
    // get: Insert data to Input
    nameLogin.value = username; 
    FullName.value = fullname;
    DateOfBirth.value = dateofbirth;
    Gender.value = gender;

    //Change: Insert data to input 
    changeFirstName.value = data.firstName;
    changeLastName.value = data.lastName
    changeDateOfBirth.value = dateofbirth;
    changeGender.value = gender;
    changeAvata.value = localStorage.getItem("avata");
    })
  .catch((error) => {
      // Xử lý lỗi
      console.error(error);
  });
}

function ChangeInformation() {
    const changeInforUrl = "https://localhost:7013/api/EditAccount";
    const changeFirstName = document.getElementById("Change__firstName").value; 
    const changeLastName = document.getElementById("Change_lastName").value; 
    const changeDateOfBirth = document.getElementById("Change__dateOfBirth").value; 
    const changeGenderInput = document.getElementById("Change__gender"); 
    const changeAvata = document.getElementById("Change_avata").value; 
    let changeGender = changeGenderInput.value.toUpperCase(); // Chuyển đổi thành chữ in hoa
  
    if (changeGender === "NAM") {
        changeGender = 1;
    }
    else if (changeGender === "NỮ") {
        changeGender = 0;
    }
    else {
        changeGender = 0;
    }
  
    var parts = changeDateOfBirth.split('-'); // Tách ngày, tháng và năm thành mảng
  
    if (parts.length !== 3) {
        return "Ngày không hợp lệ";
    }
  
    var ngay = parts[0];
    var thang = parts[1];
    var nam = parts[2];
  
    var ngayMoi = nam + '-' + thang.padStart(2, '0') + '-' + ngay.padStart(2, '0');
      // Gửi request fetch
    fetch(`${changeInforUrl}?token=${localStorage.getItem("login")}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json", // Đặt Content-Type tùy theo yêu cầu của API
    },
    body: JSON.stringify({
        firstName: changeFirstName,
        lastName: changeLastName,
        email: "string",
        numberPhone: 0,
        gender: changeGender,
        dateOfBirth: ngayMoi,
        avata: changeAvata, 
        usedStated: 0,
        description: "",
    }),
    })
    .then((response) => {
    if (!response.ok) {
        throw new Error("Lỗi khi gọi API");
    }
    return response.json();
    })
    .then((data) => {
    alert(data.result);
    })
    .catch((error) => {
    // Xử lý lỗi
    console.error(error);
    });
    
}
  


function ChangePassword() {
    const changeInforUrl = "https://localhost:7013/api/ChangerPassWord";
    const password__old = document.getElementById("password__old").value; 
    const password__new = document.getElementById("password__new").value; 
    const confirm__password = document.getElementById("confirm__password--new").value; 
    fetch(`${changeInforUrl}?token=${localStorage.getItem("login")}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passWordHas: password__old,
          newPassword: password__new,
          confirmNewPassword: confirm__password
        }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Lỗi khi gọi API");
        }
        return response.json();
    })
    .then((data) => {
        alert(data.status);
    })
    .catch((error) => {
        // Xử lý lỗi
        console.error(error);
    });
}

function GetAccountManager() {
    const changeInforUrl = "https://localhost:7013/api/UserManager";
    const accountManager = document.getElementById("account__manager"); 
    fetch(changeInforUrl, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   passWordHas: password__old,
        //   newPassword: password__new,
        //   confirmNewPassword: confirm__password
        // }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Lỗi khi gọi API");
        }
        return response.json();
    })
    .then((data) => {
        // alert(data.status);
        data.forEach(item => {
            alert(item);
            const divElement = document.createElement('div');
            divElement.textContent = item;
            accountManager.appendChild(divElement);
        });
    })
    .catch((error) => {
        // Xử lý lỗi
        console.error(error);
    });
}

let dataLoaded = false;
let tableBody = null; 
let pageIndexManagerAccount = 1;

// Gọi API với số trang được truyền vào
async function fetchApiWithPageNumberManagerAccount(pageNumber) {
    try {
        
        const getAccountUrl = `https://localhost:7013/api/UserManager?pageIndex=${pageNumber}&pageSize=${10}`;
        const response = await fetch(getAccountUrl);
        const data = await response.json();
        displayDataAndPaginationManagerAccount(data, pageNumber);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}

// Hiển thị dữ liệu và nút phân trang
function displayDataAndPaginationManagerAccount(data, currentPage) {
    const dataContainer = document.getElementById('table__Account--full');//AccountManager__search--table
    const SearchAccountManager = document.getElementById('AccountManager__search--table');
    //Hiển thị
    var information = document.getElementById("information");
    var ChangeInformation = document.getElementById("Change_information");
    var ChangePassword = document.getElementById("Change_password");
    var ManagerDisplay = document.getElementById("dataContainer");//search_table--managerAccount
    var SearchTableManagerAccount = document.getElementById("table__Account--item");//search_table--managerAccount
    var managementClassRoom = document.getElementById("management_classRoom");
    var managerAcountIcon = document.getElementById("managerAcount__Icon");
    const DataNull = document.getElementById('accountManager__list--user');
    //
    var Scheduling = document.getElementById("Schedule");

    // Xóa màu
    var icon = document.getElementById("information__list--items__icon");
    var colorText = document.getElementById("information__list");
    var managerClassRoomText = document.getElementById("managerClassRoom__Text");
    var managerClassRoomIcon = document.getElementById("managerClassRoom__Icon");
    //Change Infomation
    var colorTextChangeInfro__Icon = document.getElementById("changeInfor__Icon");
    var colorTextChangeInfro = document.getElementById("information__list--items__text");
    // Change Password
    var colorTextChangePassword__Icon = document.getElementById("changePassword__icon");
    var colorTextChangePassword = document.getElementById("changePassword__list--items__text");
    //Manager Account 
    var colorTextManagerAccount__Icon = document.getElementById("ManagerAccount");
    var colorTextManagerAccount = document.getElementById("managerAcount__Text");
    // Scheduling
    var navbarSchedulingIcon = document.getElementById("scheduling");
    var navbarSchedulingText = document.getElementById("chedulingText");
    if(SearchTableManagerAccount.style.display === "none") {
        // HIển thị
        ManagerDisplay.style.display = "block";
        SearchTableManagerAccount.style.display = "block";
        // Tắt hiển thị
        managementClassRoom.style.display = "none";
        ChangePassword.style.display = "none";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        SearchAccountManager.style.display = "none";
        Scheduling.style.display = "none";
        // Đổi màu
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        managerClassRoomText.style.color = "#fff";
        managerClassRoomIcon.style.color = "#fff";
        navbarSchedulingText.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";
        //set color manager account
        colorTextManagerAccount__Icon.style.color = "#33b5e5" ;
        SearchTableManagerAccount.style.display = "none";
        colorTextManagerAccount.style.color = "#33b5e5";
        managerAcountIcon.style.color = "#31B1DB";
    }
    else {
        // Display = none
        ManagerDisplay.style.display = "block";
        managementClassRoom.style.display = "none";
        ChangePassword.style.display = "none";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        Scheduling.style.display = "none";
        // Đổi màu
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        managerClassRoomText.style.color = "#fff";
        managerClassRoomIcon.style.color = "#fff";
        //
        //set color manager account
        colorTextManagerAccount__Icon.style.color = "#33b5e5" ;
        colorTextManagerAccount.style.color = "#33b5e5";
        managerAcountIcon.style.color = "#31B1DB";
        //
        navbarSchedulingText.style.color = "#fff";
        navbarSchedulingIcon.style.color = "#fff";
    }
    
    // 
    const ShowListAccount = document.getElementById('accountManager__list--user');
    // const tableClass = document.getElementById('select__subject--item');
    // const Schedule = document.getElementById('Schedule');//Schedule
    // if(tableClass.style.display === "none") {
    //     tableClass.style.display = "block";
    // }
    // else {
    //     tableClass.style.display = "block";
    // }
    // Hiển thị dữ liệu trong bảng
    if (!tableBody) {
        const table = document.createElement('table');
        table.id = "table__managerAccount";
        table.classList.add("striped-table");
        table.innerHTML = `
        <thead>
            <tr>
                <th>STT</th>
                <th>ID người dùng</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
            </tr>
        </thead>
            <tbody>
            </tbody>
        `;
        dataContainer.appendChild(table);
        tableBody = table.querySelector('tbody');
    }
    else {
        tableBody.innerHTML = ''; 
    }

    tableBody.innerHTML = '';
    var stt = 1;
    data.result.forEach(item => {
        const dateObject = new Date(item.dateOfBirth);
                    const day = dateObject.getDate();
                    const month = dateObject.getMonth() + 1;
                    const year = dateObject.getFullYear();
                    const formattedDate = `${day}-${month}-${year}`;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${stt}</td>
                        <td>${item.id}</td>
                        <td>${item.fullName}</td>
                        <td>${item.email}</td>
                        <td>0${item.phone}</td>
                        <td>${formattedDate}</td>
                        <td>${item.gender === 1 ? "Nam" : "Nữ"}</td>
                        <td>${item.usedState === 0 ? "Đang mở" : "Tạm khóa"}</td>
                        <td>
                            <div class="hover-container">
                                <i class="fa-solid fa-screwdriver-wrench admin__fix--icon" data-id="${item.id}" onclick = "ShowChangeInforUser('${item.id}')"></i>
                                <span class="tooltip">Sửa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-trash-can admin__delete--icon" data-id="${item.id}" onclick = "AdminDeleteUser('${item.id}')"></i>
                                <span class="tooltip">Xóa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-lock admin__lock--icon" data-id="${item.id}" onclick = "AdminLockAccount('${item.id}')"></i>
                                <span class="tooltip">Khóa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-unlock admin__unlock--icon" data-id="${item.id}" onclick = "AdminUnLockAccount('${item.id}')"></i>
                                <span class="tooltip">Mở Khóa</span>
                            </div>
                        </td>
        `;
        stt++;
        tableBody.appendChild(row);
    });

    // Tạo và gắn sự kiện cho các nút phân trang
    const paginationContainer = document.createElement("div");
    paginationContainer.style.margin = "20px 20px";
    paginationContainer.style.position = "absolute";
    paginationContainer.style.left = "60%";

    for (let i = 1; i <= Math.ceil(data.totalRecords / 5); i++) {
        const button = document.createElement("button");
        button.style.padding = "10px 10px";
        button.innerText = i;

        button.addEventListener("click", () => {
            pageIndexManagerAccount = i;
            fetchApiWithPageNumberManagerAccount(pageIndexManagerAccount);
        });

        paginationContainer.appendChild(button);
    }

    tableBody.appendChild(paginationContainer);
}

// Hàm gọi API ban đầu và hiển thị dữ liệu
async function GetAllManagerAccountForSchedule(pageIndex) {

    // Gọi API ban đầu với số trang pageIndex
    if (!dataLoaded) {
        await fetchApiWithPageNumberManagerAccount(pageIndex);
        dataLoaded = true;
    }
    else {
        await fetchApiWithPageNumberManagerAccount(pageIndex);
    }
}

// Search Account

let dataLoaded__search = false;
let tableBody__search = null; 
let pageIndexSearchAccount = 1;

// Gọi API với số trang được truyền vào
async function fetchApiWithPageNumberSearchAccount(pageNumber, userId) {
    try {
        
        const getAccountUrl = `https://localhost:7013/api/UserManager/Id?id=${userId}&pageIndex=${pageNumber}&pageSize=${10}`;
        const response = await fetch(getAccountUrl);
        const data = await response.json();
        displayDataAndPaginationManagerAccount(data, pageNumber);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}

// Hiển thị dữ liệu và nút phân trang
function displayDataAndPaginationSearchAccount(data, currentPage) {
    // lấy dữ liệu từ thẻ input
    const userId = document.getElementById("accountManager__search--name").value;
    //
    const dataContainer = document.getElementById('table__Account--item');
    
    const ShowListAccount = document.getElementById('accountManager__list--user');
    //Hiển thị
    var information = document.getElementById("information");
    var ChangeInformation = document.getElementById("Change_information");
    var ChangePassword = document.getElementById("Change_password");
    var ManagerDisplay = document.getElementById("dataContainer");
    const ListAccountManager = document.getElementById('table__Account--full');
    const DataNull = document.getElementById('accountManager__list--user');
    // Xóa màu
    var icon = document.getElementById("information__list--items__icon");
    var colorText = document.getElementById("information__list");
    //Change Infomation
    var colorTextChangeInfro__Icon = document.getElementById("changeInfor__Icon");
    var colorTextChangeInfro = document.getElementById("information__list--items__text");
    // Change Password
    var colorTextChangePassword__Icon = document.getElementById("changePassword__icon");
    var colorTextChangePassword = document.getElementById("changePassword__list--items__text");
    //Manager Account 
    var colorTextManagerAccount__Icon = document.getElementById("ManagerAccount");
    var colorTextManagerAccount = document.getElementById("managerAcount__Text");
    if(ListAccountManager.style.display === "block") {
        // HIển thị
        ManagerDisplay.style.display = "block";
        // Tắt hiển thị
        ChangePassword.style.display = "none";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        ListAccountManager.style.display = "none";
        // Đổi màu
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        //set color manager account
        colorTextManagerAccount__Icon.style.color = "#33b5e5" ;
        colorTextManagerAccount.style.color = "#33b5e5";
    }
    else {
        // Display = none
        ManagerDisplay.style.display = "block";
        ChangePassword.style.display = "none";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        ListAccountManager.style.display = "none";
        // Đổi màu
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        //set color manager account
        colorTextManagerAccount__Icon.style.color = "#33b5e5" ;
        colorTextManagerAccount.style.color = "#33b5e5";
    }
    // Hiển thị dữ liệu trong bảng
    if (!tableBody__search) {
        const table = document.createElement('table');
        table.id = "table__managerAccount";
        table.classList.add("striped-table");
        table.innerHTML = `
        <thead>
            <tr>
                <th>STT</th>
                <th>ID người dùng</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
            </tr>
        </thead>
            <tbody>
            </tbody>
        `;
        dataContainer.appendChild(table);
        tableBody__search = table.querySelector('tbody');
    }
    else {
        tableBody__search.innerHTML = ''; 
    }

    tableBody__search.innerHTML = '';
    var stt = 1;
    data.result.forEach(item => {
        const dateObject = new Date(item.dateOfBirth);
                    const day = dateObject.getDate();
                    const month = dateObject.getMonth() + 1;
                    const year = dateObject.getFullYear();
                    const formattedDate = `${day}-${month}-${year}`;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${stt}</td>
                        <td>${item.id}</td>
                        <td>${item.fullName}</td>
                        <td>${item.email}</td>
                        <td>0${item.phone}</td>
                        <td>${formattedDate}</td>
                        <td>${item.gender === 1 ? "Nam" : "Nữ"}</td>
                        <td>${item.usedState === 0 ? "Đang mở" : "Tạm khóa"}</td>
                        <td>
                            <div class="hover-container">
                                <i class="fa-solid fa-screwdriver-wrench admin__fix--icon" data-id="${item.id}" onclick = "ShowChangeInforUser('${item.id}')"></i>
                                <span class="tooltip">Sửa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-trash-can admin__delete--icon" data-id="${item.id}" onclick = "AdminDeleteUser('${item.id}')"></i>
                                <span class="tooltip">Xóa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-lock admin__lock--icon" data-id="${item.id}" onclick = "AdminLockAccount('${item.id}')"></i>
                                <span class="tooltip">Khóa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-unlock admin__unlock--icon" data-id="${item.id}" onclick = "AdminUnLockAccount('${item.id}')"></i>
                                <span class="tooltip">Mở Khóa</span>
                            </div>
                        </td>
        `;
        stt++;
        tableBody__search.appendChild(row);
    });

    // Tạo và gắn sự kiện cho các nút phân trang
    const paginationContainer = document.createElement("div");
    paginationContainer.style.margin = "20px 20px";
    paginationContainer.style.position = "absolute";
    paginationContainer.style.left = "60%";

    for (let i = 1; i <= Math.ceil(data.totalRecords / 5); i++) {
        const button = document.createElement("button");
        button.style.padding = "10px 10px";
        button.innerText = i;

        button.addEventListener("click", () => {
            pageIndexSearchAccount = i;
            fetchApiWithPageNumberSearchAccount(pageIndexSearchAccount, userId);
        });

        paginationContainer.appendChild(button);
    }

    tableBody__search.appendChild(paginationContainer);
}

// Hàm gọi API ban đầu và hiển thị dữ liệu
async function GetAllSearchAccountForSchedule(pageIndex) {
    const userId = document.getElementById("accountManager__search--name").value;
    // Gọi API ban đầu với số trang pageIndex
    if(userId === "") {
        if (!dataLoaded) {
            await fetchApiWithPageNumberManagerAccount(pageIndex);
            dataLoaded = true;
        }
        else {
            await fetchApiWithPageNumberManagerAccount(pageIndex);
        }
    }
    else {
        if (!dataLoaded__search) {
            await fetchApiWithPageNumberSearchAccount(pageIndex, userId);
            dataLoaded__search = true;
        }
        else {
            await fetchApiWithPageNumberSearchAccount(pageIndex, userId);
        }
    }
    
}


// Admin sửa thông tin tài khoản
function ShowChangeInforUser(itemId) {
    const getInforUser = "https://localhost:7013/api/UserManager/Id";
    const changeFirstName = document.getElementById("Change__firstName--admin"); 
    const changeLastName = document.getElementById("Change_lastName--admin"); 
    const changeEmail = document.getElementById("Change_Email--admin"); 
    const changePhoneNumber = document.getElementById("Change_numberphone--admin"); 
    const changeDateOfBirth = document.getElementById("Change__dateOfBirth--admin"); 
    const changeGender = document.getElementById("Change__gender--admin"); 
    const changeAvata = document.getElementById("Change_avata--admin"); 
    const ShowAdminChangeUser = document.getElementById("Admin__change--user"); 
    if(ShowAdminChangeUser.style.display === "none") {
        ShowAdminChangeUser.style.display = "block";
    }
    else {
        ShowAdminChangeUser.style.display = "block";
    }
    // Send request to get infor user
    fetch(`${getInforUser}?id=${itemId}&pageIndex=${1}&pageSize=${1}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json", // Đặt Content-Type tùy theo yêu cầu của API
        },
        })
        .then((response) => {
        if (!response.ok) {
            throw new Error("Lỗi khi gọi API");
        }
        return response.json();
        })
        .then((data) => {
            data.result.forEach(item => { 
                const dateObject = new Date(item.dateOfBirth);
                localStorage.setItem("IdUser", itemId);
                const day = dateObject.getDate();
                const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
                const year = dateObject.getFullYear();
                if(item.gender === 1) {
                    item.gender = "Nam";
                }
                else item.gender = "Nữ";
                const formattedDate = `${day}-${month}-${year}`;
                changeFirstName.value = item.firstName;
                changeLastName.value = item.lastName;
                changeEmail.value = item.email;
                changePhoneNumber.value = "0" +item.phone;
                changeDateOfBirth.value = formattedDate;
                changeGender.value = item.gender;
                changeAvata.value = item.avata;
            })
            
        })
        .catch((error) => {
        // Xử lý lỗi
        console.error(error);
    });
}

function AdminChangeInforUser() {
    const changeInforUrl = "https://localhost:7013/api/EditAccount/Manager";
    const changeFirstName = document.getElementById("Change__firstName--admin").value; 
    const changeLastName = document.getElementById("Change_lastName--admin").value; 
    const changeEmail = document.getElementById("Change_Email--admin").value; 
    const changePhoneNumber = document.getElementById("Change_numberphone--admin").value; 
    const changeDateOfBirth = document.getElementById("Change__dateOfBirth--admin").value; 
    const changeGenderInput = document.getElementById("Change__gender--admin"); 
    const changeAvata = document.getElementById("Change_avata--admin").value; 
    const ShowAdminChangeUser = document.getElementById("Admin__change--user"); 
    const id = localStorage.getItem("IdUser");
    let changeGender = changeGenderInput.value.toUpperCase();
    if (changeGender === "NAM") {
        changeGender = 1;
    }
    else if (changeGender === "NỮ") {
        changeGender = 0;
    }
    else {
        changeGender = 3;
    }
    var parts = changeDateOfBirth.split('-'); // Tách ngày, tháng và năm thành mảng
  
        if (parts.length !== 3) {
            return "Ngày không hợp lệ";
        }
    
        var ngay = parts[0];
        var thang = parts[1];
        var nam = parts[2];
    
        var ngayMoi = nam + '-' + thang.padStart(2, '0') + '-' + ngay.padStart(2, '0');
      // Gửi request change infor user
    fetch(`${changeInforUrl}?id=${id}&token=${localStorage.getItem("login")}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json", // Đặt Content-Type tùy theo yêu cầu của API
    },
    body: JSON.stringify({
        firstName: changeFirstName,
        lastName: changeLastName,
        email: changeEmail,
        numberPhone: changePhoneNumber,
        gender: changeGender,
        dateOfBirth: ngayMoi,
        avata: changeAvata, 
        usedStated: 0,
        description: "",
    }),
    })
    .then((response) => {
    if (!response.ok) {
        throw new Error("Lỗi khi gọi API");
    }
    return response.json();
    })
    .then((data) => {
        localStorage.removeItem("IdUser");
        console.log(data);
        if(data.statusCode === 200) {
            alert("Sửa thành công");
            if(ShowAdminChangeUser.style.display === "block") ShowAdminChangeUser.style.display = "none";
            else ShowAdminChangeUser.style.display = "none";
        }
        else {
            alert("Sửa không thành công")
        }
    
    })
    .catch((error) => {
    // Xử lý lỗi
    console.error(error);
    });
}

function AdminDeleteUser(id) {
    const changeInforUrl = "https://localhost:7013/api/UserManager";
    fetch(`${changeInforUrl}?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json", // Đặt Content-Type tùy theo yêu cầu của API
        },
        })
        .then((response) => {
        if (!response.ok) {
            throw new Error("Lỗi khi gọi API");
        }
        return response.json();
        })
        .then((data) => {
            localStorage.removeItem("IdUser");
            console.log(data);
            if(data.statusCode === 200) {
                alert(data.result);
                GetManagerAccount();
            }
            else {
                alert("Sửa không thành công")
            }
        
        })
        .catch((error) => {
        // Xử lý lỗi
        console.error(error);
        });
}

function AdminLockAccount(id) {
    const changeInforUrl = "https://localhost:7013/api/UserManager";
    var isConfirmed = confirm("Bạn có chắc chắn muốn khóa tài khoản này này?");
    if(isConfirmed) {
        fetch(`${changeInforUrl}?id=${id}&usedStated=${1}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // Đặt Content-Type tùy theo yêu cầu của API
            },
            })
            .then((response) => {
            if (!response.ok) {
                throw new Error("Lỗi khi gọi API");
            }
            return response.json();
            })
            .then((data) => {
                localStorage.removeItem("IdUser");
                if(data.statusCode === 200) {
                    alert("Khóa tài khoản thành công");
                }
                else {
                    alert("Sửa không thành công")
                }
            
            })
            .catch((error) => {
            // Xử lý lỗi
            console.error(error);
        });
    }
    else {
        alert("Hành động đã bị hủy");
    }
}

function AdminUnLockAccount(id) {
    const changeInforUrl = "https://localhost:7013/api/UserManager";
    var isConfirmed = confirm("Bạn có chắc chắn muốn mở khóa tài khoản này?");
    if(isConfirmed) {
        fetch(`${changeInforUrl}?id=${id}&usedStated=${0}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // Đặt Content-Type tùy theo yêu cầu của API
            },
            })
            .then((response) => {
            if (!response.ok) {
                throw new Error("Lỗi khi gọi API");
            }
            return response.json();
            })
            .then((data) => {
                localStorage.removeItem("IdUser");
                console.log(data);
                if(data.statusCode === 200) {
                    alert("Mở khóa tài khoản thành công");
                }
                else {
                    alert("Sửa không thành công")
                }
            
            })
            .catch((error) => {
            // Xử lý lỗi
            console.error(error);
        });
    }
    else {
        alert("Hành động đã bị hủy");
    }
}

// class
let dataLoaded__searchClass = false;
let tableBody__searchClass = null; 
async function GetAllClass() {
    const userId = document.getElementById("accountManager__search--name").value;
    //
    const dataContainer = document.getElementById('table__Class--full');
    
    const ShowListAccount = document.getElementById('accountManager__list--user');
    //Hiển thị
    var information = document.getElementById("information");
    var ChangeInformation = document.getElementById("Change_information");
    var ChangePassword = document.getElementById("Change_password");
    var ManagerDisplay = document.getElementById("table_container");
    const ListAccountManager = document.getElementById('table__Class--full');    //
    const DataNull = document.getElementById('accountManager__list--user');
    // Xóa màu
    var icon = document.getElementById("information__list--items__icon");
    var colorText = document.getElementById("information__list");
    //Change Infomation
    var colorTextChangeInfro__Icon = document.getElementById("changeInfor__Icon");
    var colorTextChangeInfro = document.getElementById("information__list--items__text");
    // Change Password
    var colorTextChangePassword__Icon = document.getElementById("changePassword__icon");
    var colorTextChangePassword = document.getElementById("changePassword__list--items__text");
    //Manager Account 
    var colorTextManagerAccount__Icon = document.getElementById("ManagerAccount");
    var colorTextManagerAccount = document.getElementById("managerAcount__Text");
    if(ListAccountManager.style.display === "block") {
        // HIển thị
        ManagerDisplay.style.display = "block";
        // Tắt hiển thị
        ChangePassword.style.display = "none";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        ListAccountManager.style.display = "block";
        // Đổi màu
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        //set color manager account
        colorTextManagerAccount__Icon.style.color = "#33b5e5" ;
        colorTextManagerAccount.style.color = "#33b5e5";
    }
    else {
        // Display = none
        ManagerDisplay.style.display = "block";
        ChangePassword.style.display = "none";
        information.style.display = "none";
        ChangeInformation.style.display = "none";
        ListAccountManager.style.display = "none";
        // Đổi màu
        colorText.style.color = "#fff";
        icon.style.color = "#fff"; 
        colorTextChangeInfro__Icon.style.color = "#fff" ;
        colorTextChangeInfro.style.color = "#fff";
        colorTextChangePassword__Icon.style.color = "#fff" ;
        colorTextChangePassword.style.color = "#fff";
        //set color manager account
        colorTextManagerAccount__Icon.style.color = "#33b5e5" ;
        colorTextManagerAccount.style.color = "#33b5e5";
    }
    // Đổ dữ liệu
    if (!dataLoaded__searchClass) {
        try {
           const getAccountUrl = "https://localhost:7013/api/Class";
            const response = await fetch(`${getAccountUrl}?pageIndex=${1}&pageSize=${5}`);
            const data = await response.json();
            if (!Array.isArray(data.result) || data.result.length === 0) {
                DataNull.style.display = "block";
                ShowListAccount.innerHTML = '<h1 id="Data__null">Không có dữ liệu</h1>';
            } else {    
                if (!tableBody__search) {
                    DataNull.style.display = "none";
                    const table = document.createElement('table');
                    table.id = "search_table--managerClass"
                    table.innerHTML = `
                        <thead id="ClassManager__search--table">
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Tên lớp</th>
                                <th>Năm học</th>
                                <th>Khóa học</th>
                                <th>Trạng thái</th>
                                <th>Mô tả</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    `;
                    dataContainer.appendChild(table);
                    tableBody__searchClass = table.querySelector('tbody');
                }
                
                tableBody__searchClass.innerHTML = '';
                
                var stt = 1;
                data.result.forEach(item => {
                    console.log(data);
                    console.log(item.id);
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${stt}</td>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.year_Of_Admission}</td>
                        <td>${item.course}</td>
                        <td>${item.usedState === 0 ? 'Đang mở' : 'Tạm khóa' }</td>
                        <td>${item.description}</td>
                        <td>${item.createBy === '00000000-0000-0000-0000-000000000000' ? '': item.createBy}</td>
                        <td>${item.createDate}</td>
                        <td>${item.modifiedBy === '00000000-0000-0000-0000-000000000000' ? '': item.modifiedBy}</td>
                        <td>${item.modifiedDate}</td>
                        <td>
                            <div class="hover-container">
                                <i class="fa-solid fa-screwdriver-wrench admin__fix--icon" data-id="${item.id}" onclick = "ShowChangeInforUser('${item.id}')"></i>
                                <span class="tooltip">Sửa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-trash-can admin__delete--icon" data-id="${item.id}" onclick = "AdminDeleteUser('${item.id}')"></i>
                                <span class="tooltip">Xóa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-lock admin__lock--icon" data-id="${item.id}" onclick = "AdminLockAccount('${item.id}')"></i>
                                <span class="tooltip">Khóa</span>
                            </div>
                            <div class="hover-container">
                                <i class="fa-solid fa-unlock admin__unlock--icon" data-id="${item.id}" onclick = "AdminUnLockAccount('${item.id}')"></i>
                                <span class="tooltip">Mở Khóa</span>
                            </div>
                        </td>
                        <!-- Thêm các cột khác tương tự -->
                    `;
                    stt++;
                    tableBody__searchClass.appendChild(row);
                });
            }
            dataLoaded__searchClass = true;
        } catch (error) {
            console.error('Error fetching data:', error);
            alert(error);
        }
    }
}



// Khai báo biến
let dataLoaded__searchClassForSchedule = false;
let tableBody__searchClassForSchedule = null;
let pageIndexClassForSchedule = 1;

// Gọi API với số trang được truyền vào
async function fetchApiWithPageNumber(pageNumber) {
    try {
        
        const getAccountUrl = `https://localhost:7013/api/Class?pageIndex=${pageNumber}&pageSize=${5}`;
        const response = await fetch(getAccountUrl);
        const data = await response.json();
        displayDataAndPagination(data, pageNumber);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}

// Hiển thị dữ liệu và nút phân trang
function displayDataAndPagination(data, currentPage) {
    const dataContainer = document.getElementById('table__class--schedule');
    const ShowListAccount = document.getElementById('accountManager__list--user');
    const DataNull = document.getElementById('accountManager__list--user');
    const tableClass = document.getElementById('select__class--item');
    const Schedule = document.getElementById('Schedule');//Schedule
    if(tableClass.style.display === "none") {
        tableClass.style.display = "block";
        // Schedule.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    else {
        tableClass.style.display = "block";
        // Schedule.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    // Hiển thị dữ liệu trong bảng
    if (!tableBody__searchClassForSchedule) {
        const table = document.createElement('table');
        table.id = "search_table--managerClassForSchedule";
        table.classList.add("striped-table");
        table.innerHTML = `
            <thead id="ClassManager__search--table">
                <tr>
                    <th>STT</th>
                    <th>Tên lớp</th>
                    <th>Năm học</th>
                    <th>Khóa học</th>
                    <th>Trạng thái</th>
                    <th>Mô tả</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        dataContainer.appendChild(table);
        tableBody__searchClassForSchedule = table.querySelector('tbody');
    }
    else {
        tableBody__searchClassForSchedule.innerHTML = ''; 
    }

    tableBody__searchClassForSchedule.innerHTML = '';
    let totalRecords = 1;
    var stt = 1;
    data.result.forEach(item => {
        const row = document.createElement('tr');
        const date = new Date(item.year_Of_Admission);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const ngayThangNam =  `${day}/${month}/${year}`;
        row.innerHTML = `
            <td>${stt}</td>
            <td>${item.name}</td>
            <td>${ngayThangNam}</td>
            <td>${item.course === "string" ? " " : item.course}</td>
            <td>${item.usedState === 0 ? 'Đang mở' : 'Tạm khóa' }</td>
            <td>${item.description === "string" ? " " : item.description}</td>
            <td>
                <button style = "padding: 8px; background-color: #3399CC; cursor: pointer; color: #fff;cursor: pointer;" onclick="GetIdClass('${item.id}', this)">Chọn</button>
            </td>
        `;
        stt++;
        tableBody__searchClassForSchedule.appendChild(row);
    });

    // Tạo và gắn sự kiện cho các nút phân trang
    const paginationContainer = document.createElement("div");
    paginationContainer.style.margin = "20px 20px";
    paginationContainer.style.position = "absolute";
    paginationContainer.style.left = "60%";

    for (let i = 1; i <= Math.ceil(data.totalRecords / 5); i++) {
        const button = document.createElement("button");
        button.style.padding = "10px 10px";
        button.innerText = i;

        button.addEventListener("click", () => {
            pageIndexClassForSchedule = i;
            fetchApiWithPageNumber(pageIndexClassForSchedule);
        });

        paginationContainer.appendChild(button);
    }

    tableBody__searchClassForSchedule.appendChild(paginationContainer);
}

// Hàm gọi API ban đầu và hiển thị dữ liệu
async function GetAllClassForSchedule(pageIndex) {
    const tableClass = document.getElementById('select__class--item');
    const Schedule = document.getElementById('Schedule');
    const DataNull = document.getElementById('accountManager__list--user');

    // ... (các phần khác của code đã có)

    // Gọi API ban đầu với số trang pageIndex
    if (!dataLoaded__searchClassForSchedule) {
        await fetchApiWithPageNumber(pageIndex);
        dataLoaded__searchClassForSchedule = true;
    }
    else {
        await fetchApiWithPageNumber(pageIndex);
    }
}

// Gọi hàm chính để khởi tạo
// GetAllClassForSchedule(pageIndexClassForSchedule);

// Lưu lại các Id của Class để dùng trong thuật toán sắp xếp lịch
let selectedClass = [];
function GetIdClass(itemId, button) {
    if (!selectedClass.includes(itemId)) {
        selectedClass.push(itemId);
        button.innerText = "Bỏ chọn";
    } else {
        selectedClass = selectedClass.filter(id => id !== itemId);
        button.innerText = "Chọn";
    }
}

function AddListIdClassOk() {
    const Save = document.getElementById("select__class--item");
    if(selectedClass.length === 0) {
        alert("Chưa có lớp học nào được thêm");
    }
    else {
        alert("Thêm thành công");
    }
    Save.style.display = "none";
}

function CloseSelectClass() {
    const Save = document.getElementById("select__class--item");
    selectedClass = [];
    Save.style.display = "none";
}


// Thêm phòng để cho thuật toán sắp lịch

// Khai báo biến
let dataLoaded__searchClassRoomForSchedule = false;
let tableBody__searchClassRoomForSchedule = null;
let pageIndexClassRoomForSchedule = 1;

// Gọi API với số trang được truyền vào
async function fetchApiWithPageNumberClassRoom(pageNumber) {
    try {
        
        const getAccountUrl = `https://localhost:7013/api/ClassRoom?pageIndex=${pageNumber}&pageSize=${5}`;
        const response = await fetch(getAccountUrl);
        const data = await response.json();
        displayDataAndPaginationClassRoom(data, pageNumber);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}

// Hiển thị dữ liệu và nút phân trang
function displayDataAndPaginationClassRoom(data, currentPage) {
    const dataContainer = document.getElementById('table__classroom--schedule');
    const ShowListAccount = document.getElementById('accountManager__list--user');
    const DataNull = document.getElementById('accountManager__list--user');
    const tableClass = document.getElementById('select__classroom--item');
    const Schedule = document.getElementById('Schedule');//Schedule
    if(tableClass.style.display === "none") {
        tableClass.style.display = "block";
    }
    else {
        tableClass.style.display = "block";
    }
    // Hiển thị dữ liệu trong bảng
    if (!tableBody__searchClassRoomForSchedule) {
        const table = document.createElement('table');
        table.id = "search_table--managerClassRoomForSchedule";
        table.classList.add("striped-table");
        table.innerHTML = `
            <thead id="ClassRoomManager__search--table">
                <tr>
                    <th>STT</th>
                    <th>Tên phòng</th>
                    <th>Mô tả</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        dataContainer.appendChild(table);
        tableBody__searchClassRoomForSchedule = table.querySelector('tbody');
    }
    else {
        tableBody__searchClassRoomForSchedule.innerHTML = ''; 
    }

    tableBody__searchClassRoomForSchedule.innerHTML = '';
    let totalRecords = 1;
    var stt = 1;
    data.result.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stt}</td>
            <td>${item.name}</td>
            <td>${item.description === "string" ? " " : item.description}</td>
            <td>
                <button style = "padding: 8px; background-color: #3399CC; cursor: pointer; color: #fff;cursor: pointer;" onclick="GetIdClassRoom('${item.id}', this)">Chọn</button>
            </td>
        `;
        stt++;
        tableBody__searchClassRoomForSchedule.appendChild(row);
    });

    // Tạo và gắn sự kiện cho các nút phân trang
    const paginationContainer = document.createElement("div");
    paginationContainer.style.margin = "20px 20px";
    paginationContainer.style.position = "absolute";
    paginationContainer.style.left = "60%";

    for (let i = 1; i <= Math.ceil(data.totalRecords / 5); i++) {
        const button = document.createElement("button");
        button.style.padding = "10px 10px";
        button.innerText = i;

        button.addEventListener("click", () => {
            pageIndexClassRoomForSchedule = i;
            fetchApiWithPageNumberClassRoom(pageIndexClassRoomForSchedule);
        });

        paginationContainer.appendChild(button);
    }

    tableBody__searchClassRoomForSchedule.appendChild(paginationContainer);
}

// Hàm gọi API ban đầu và hiển thị dữ liệu
async function GetAllClassRoomForSchedule(pageIndex) {
    const tableClass = document.getElementById('select__classroom--item');
    const Schedule = document.getElementById('Schedule');
    const DataNull = document.getElementById('accountManager__list--user');

    // ... (các phần khác của code đã có)

    // Gọi API ban đầu với số trang pageIndex
    if (!dataLoaded__searchClassRoomForSchedule) {
        await fetchApiWithPageNumberClassRoom(pageIndex);
        dataLoaded__searchClassRoomForSchedule = true;
    }
    else {
        await fetchApiWithPageNumberClassRoom(pageIndex);
    }
}


// Lưu lại các Id của Class để dùng trong thuật toán sắp xếp lịch
let selectedClassRoom = [];
function GetIdClassRoom(itemId, button) {
    if (!selectedClassRoom.includes(itemId)) {
        selectedClassRoom.push(itemId);
        button.innerText = "Bỏ chọn";
    } else {
        selectedClassRoom = selectedClassRoom.filter(id => id !== itemId);
        button.innerText = "Chọn";
    }
}

function AddListIdClassRoomOk() {
    const Save = document.getElementById("select__classroom--item");
    if(selectedClassRoom.length === 0) {
        alert("Chưa có lớp học nào được thêm");
    }
    else {
        alert("Thêm thành công");
    }
    Save.style.display = "none";
}

function CloseSelectClassRoom() {
    const Save = document.getElementById("select__classroom--item");
    selectedClassRoom = [];
    Save.style.display = "none";
}



// Thêm List id Môn học để sử dụng cho sắp xếp lịch

// Khai báo biến
let dataLoaded__searchSubjectForSchedule = false;
let tableBody__searchSubjectForSchedule = null;
let pageIndexSubjectForSchedule = 1;

// Gọi API với số trang được truyền vào
async function fetchApiWithPageNumberSubject(pageNumber) {
    try {
        
        const getAccountUrl = `https://localhost:7013/api/Subject?pageIndex=${pageNumber}&pageSize=${5}`;
        const response = await fetch(getAccountUrl);
        const data = await response.json();
        displayDataAndPaginationSubject(data, pageNumber);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}

// Hiển thị dữ liệu và nút phân trang
function displayDataAndPaginationSubject(data, currentPage) {
    const dataContainer = document.getElementById('table__subject--schedule');
    const ShowListAccount = document.getElementById('accountManager__list--user');
    const DataNull = document.getElementById('accountManager__list--user');
    const tableClass = document.getElementById('select__subject--item');
    const Schedule = document.getElementById('Schedule');//Schedule
    if(tableClass.style.display === "none") {
        tableClass.style.display = "block";
    }
    else {
        tableClass.style.display = "block";
    }
    // Hiển thị dữ liệu trong bảng
    if (!tableBody__searchSubjectForSchedule) {
        const table = document.createElement('table');
        table.id = "search_table--managerSubjectForSchedule";
        table.classList.add("striped-table");
        table.innerHTML = `
            <thead id="SubjectManager__search--table">
                <tr>
                    <th>STT</th>
                    <th>Mã môn</th>
                    <th>Tên môn</th>
                    <th>Số tín chỉ</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        dataContainer.appendChild(table);
        tableBody__searchSubjectForSchedule = table.querySelector('tbody');
    }
    else {
        tableBody__searchSubjectForSchedule.innerHTML = ''; 
    }

    tableBody__searchSubjectForSchedule.innerHTML = '';
    let totalRecords = 1;
    var stt = 1;
    data.result.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stt}</td>
            <td>${item.course_code === "null" ? " " : item.course_code}</td>
            <td>${item.name}</td>
            <td>${item.credits}</td>
            <td>
                <button style = "padding: 8px; background-color: #3399CC; cursor: pointer; color: #fff;cursor: pointer;" onclick="GetIdSubject('${item.id}', this)">Chọn</button>
            </td>
        `;
        stt++;
        tableBody__searchSubjectForSchedule.appendChild(row);
    });

    // Tạo và gắn sự kiện cho các nút phân trang
    const paginationContainer = document.createElement("div");
    paginationContainer.style.margin = "20px 20px";
    paginationContainer.style.position = "absolute";
    paginationContainer.style.left = "60%";

    for (let i = 1; i <= Math.ceil(data.totalRecords / 5); i++) {
        const button = document.createElement("button");
        button.style.padding = "10px 10px";
        button.innerText = i;

        button.addEventListener("click", () => {
            pageIndexSubjectForSchedule = i;
            fetchApiWithPageNumberSubject(pageIndexSubjectForSchedule);
        });

        paginationContainer.appendChild(button);
    }

    tableBody__searchSubjectForSchedule.appendChild(paginationContainer);
}

// Hàm gọi API ban đầu và hiển thị dữ liệu
async function GetAllSubjectForSchedule(pageIndex) {
    const tableClass = document.getElementById('select__subject--item');
    const Schedule = document.getElementById('Schedule');
    const DataNull = document.getElementById('accountManager__list--user');

    // ... (các phần khác của code đã có)

    // Gọi API ban đầu với số trang pageIndex
    if (!dataLoaded__searchSubjectForSchedule) {
        await fetchApiWithPageNumberSubject(pageIndex);
        dataLoaded__searchSubjectForSchedule = true;
    }
    else {
        await fetchApiWithPageNumberSubject(pageIndex);
    }
}

// Gọi hàm chính để khởi tạo
// GetAllClassForSchedule(pageIndexClassForSchedule);

// Lưu lại các Id của Class để dùng trong thuật toán sắp xếp lịch
let selectedSubject = [];
function GetIdSubject(itemId, button) {
    if (!selectedSubject.includes(itemId)) {
        selectedSubject.push(itemId);
        button.innerText = "Bỏ chọn";
        console.log(itemId);
    } else {
        selectedSubject = selectedSubject.filter(id => id !== itemId);
        button.innerText = "Chọn";
    }
}

function AddListIdSubjectOk() {
    const Save = document.getElementById("select__subject--item");
    if(selectedSubject.length === 0) {
        alert("Chưa có lớp học nào được thêm");
    }
    else {
        alert("Thêm thành công");
    }
    Save.style.display = "none";
}

function CloseSelectSubject() {
    const Save = document.getElementById("select__subject--item");
    selectedSubject = [];
    Save.style.display = "none";
}

// Call api thuật toán sắp xếp lịch

function Lecture_Schedule() {
    const changeInforUrl = "https://localhost:7013/api/Lecture_ScheduleManager/Scheduling";
    const dateStart = document.getElementById("startDate").value; 
    const dateEnd = document.getElementById("endDate").value; 
    console.log(selectedClass);
    console.log(selectedClassRoom);
    console.log(selectedSubject);
    if(selectedClass.length === 0 ) {
        alert("Bạn chưa chọn lớp học!");
    }
    else if(selectedClassRoom.length === 0) {
        alert("Bạn chưa chọn phòng học");
    }
    else if(selectedSubject.length === 0 ) {
        alert("Bạn chưa chọn môn học");
    }
    else if(dateStart === "") {
        alert("Bạn chưa chọn ngày bắt đầu")
    }
    else if(dateEnd === "") {
        alert("Bạn chưa chọn ngày kết thúc")
    }
    else {
        fetch(changeInforUrl, { 
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dateStart: dateStart + 'T03:31:35.895Z',
                dateEnd: dateEnd + 'T03:31:35.895Z',
                idclasses: selectedClass,
                idclassRooms: selectedClassRoom,
                idsubjects: selectedSubject,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Lỗi khi gọi API");
            }
            return response.json();
        })
        .then((data) => {
            alert(data.result);
            if(data.statusCode === 200) {
                GetAllNotUserForSchedule(1);
            }
        selectedClass = [];
            selectedClassRoom = [];
            selectedSubject = [];
        })
        .catch((error) => {
            // Xử lý lỗi
            console.error(error);
        });
    }
    
}


// Call api list lịch chưa đăng ký

// Khai báo biến
let dataLoaded__searchNotUserForSchedule = false;
let tableBody__searchNotUserForSchedule = null;
let pageIndexNotUserForSchedule = 1;

// Gọi API với số trang được truyền vào
async function fetchApiWithPageNumberNotUser(pageNumber) {
    try {
        
        const getAccountUrl = `https://localhost:7013/api/Lecture_ScheduleManager/NotUserRegister?pageIndex=${pageNumber}&pageSize=${5}`;
        const response = await fetch(getAccountUrl);
        const data = await response.json();
        displayDataAndPaginationNotUser(data, pageNumber);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
    }
}

// Hiển thị dữ liệu và nút phân trang
function displayDataAndPaginationNotUser(data, currentPage) {
    const dataContainer = document.getElementById('schedule__body--allNotUser');
    const ShowListAccount = document.getElementById('accountManager__list--user');
    const DataNull = document.getElementById('accountManager__list--user');
    const tableClass = document.getElementById('select__subject--item');
    const Schedule = document.getElementById('Schedule');//Schedule
    // if(tableClass.style.display === "none") {
    //     tableClass.style.display = "block";
    // }
    // else {
    //     tableClass.style.display = "block";
    // }
    // Hiển thị dữ liệu trong bảng
    if (!tableBody__searchNotUserForSchedule) {
        const table = document.createElement('table');
        table.id = "search_table--managerNotUserForSchedule";
        table.classList.add("striped-table");
        table.innerHTML = `
            <thead id="NotUserManager__search--table">
                <tr>
                    <th>STT</th>
                    <th>Mã môn</th>
                    <th>Tên giảng viên</th>
                    <th>Lớp học</th>
                    <th>Phòng học</th>
                    <th>Môn học</th>
                    <th>Lịch học</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        dataContainer.appendChild(table);
        tableBody__searchNotUserForSchedule = table.querySelector('tbody');
    }
    else {
        tableBody__searchNotUserForSchedule.innerHTML = ''; 
    }

    tableBody__searchNotUserForSchedule.innerHTML = '';
    let totalRecords = 1;
    var stt = 1;
    data.result.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stt}</td>
            <td>${item.course_Code === "null" ? " " : item.course_Code}</td>
            <td>${item.fullName}</td>
            <td>${item.lopHoc}</td>
            <td>${item.phongHoc}</td>
            <td>${item.monHoc}</td>
            <td>${item.lichHocTongList}</td>
            <td>
                <button style = "padding: 8px; background-color: #3399CC; cursor: pointer; color: #fff;cursor: pointer;" onclick="GetIdSubject('${item.id}', this)">Chọn</button>
            </td>
        `;
        stt++;
        tableBody__searchNotUserForSchedule.appendChild(row);
    });

    // Tạo và gắn sự kiện cho các nút phân trang
    const paginationContainer = document.createElement("div");
    paginationContainer.style.margin = "20px 20px";
    paginationContainer.style.position = "absolute";
    paginationContainer.style.left = "36%";

    for (let i = 1; i <= Math.ceil(data.totalRecords / 5); i++) {
        const button = document.createElement("button");
        button.style.padding = "10px 10px";
        button.innerText = i;

        button.addEventListener("click", () => {
            pageIndexNotUserForSchedule = i;
            fetchApiWithPageNumberNotUser(pageIndexNotUserForSchedule);
        });

        paginationContainer.appendChild(button);
    }

    tableBody__searchNotUserForSchedule.appendChild(paginationContainer);
}

// Hàm gọi API ban đầu và hiển thị dữ liệu
async function GetAllNotUserForSchedule(pageIndex) {

    // ... (các phần khác của code đã có)

    // Gọi API ban đầu với số trang pageIndex
    if (!dataLoaded__searchNotUserForSchedule) {
        await fetchApiWithPageNumberNotUser(pageIndex);
        dataLoaded__searchNotUserForSchedule = true;
    }
    else {
        await fetchApiWithPageNumberNotUser(pageIndex);
    }
}

// Gọi hàm chính để khởi tạo
// GetAllClassForSchedule(pageIndexClassForSchedule);

// // Lưu lại các Id của Class để dùng trong thuật toán sắp xếp lịch
let selectedNotUser = [];
function GetIdNotUser(itemId, button) {
    if (!selectedNotUser.includes(itemId)) {
        selectedNotUser.push(itemId);
        button.innerText = "Bỏ chọn";
    } else {
        selectedNotUser = selectedNotUser.filter(id => id !== itemId);
        button.innerText = "Chọn";
    }
}
