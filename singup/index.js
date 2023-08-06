var submit = document.getElementById("submit");
var data_user = {};
var all_users = [];
submit.addEventListener('click', function () {
    var Name = document.getElementById("name").value;
    var userName = document.getElementById("user").value
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;

    // var nameValue = Name.value
    // var userValue = userName.value
    // var emailValue = Email.value
    // var passwordValue = Password.value
    // var rePasswordValue = rePassword.value

    // Name.value = nameValue;
    // userName.value = userValue;
    // Email.value = emailValue;
    // Password.value = passwordValue;
    // rePassword.value = rePasswordValue;

    var patternName = /^[A-Za-z]{3,}(\s[A-Za-z]{3,})+$/i;
    var test = patternName.test(Name);
    if (test !== true) {
        document.getElementById("name").style.border = "1px solid red";
    }
    else {
        document.getElementById("name").style.border = "1px solid green";
        data_user.id = parseInt(Math.random() * 1000);
        data_user.fullName = Name;
    }

    var patternUser = /[A-Za-z._@#$%&*0-9]*/i
    var test = patternUser.test(userName);
    if (test !== true) {
        document.getElementById("user").style.border = "1px solid red";
    }
    else {
        document.getElementById("user").style.border = "1px solid green";
        data_user.userName = userName;
    }

    var patternEmail = /^[A-Za-z0-9_.]{3,}@[A-Za-z]+(\.com)$/;
    var test = patternEmail.test(Email);
    if (test !== true) {
        document.getElementById("email").style.border = "1px solid red";
    }
    else {
        document.getElementById("email").style.border = "1px solid green";
        data_user.email = Email;
    }
    var patternPass = /[A-Za-z0-9._@#$%&*]{8,}$/;
    var test = patternPass.test(Password);
    if (test !== true) {
        document.getElementById("password").style.border = "1px solid red";
    }
    else {
        document.getElementById("password").style.border = "1px solid green";
        data_user.password = Password;
        //alert(Password);
    }

    if (rePassword === "") {
        document.getElementById("rePassword").style.border = "1px solid red";
    } else if (rePassword !== Password) {
        document.getElementById("rePassword").style.border = "1px solid red";
    } else {
        document.getElementById("rePassword").style.border = "1px solid green";
    }

    var objectLength = Object.keys(data_user).length;
    console.log(objectLength);
    if (objectLength === 5) {
        all_users.push(data_user);
        console.log(all_users);
        console.log(data_user);
        var dataJSON = JSON.stringify(all_users);
        localStorage.setItem('user_data', dataJSON);
    }
});