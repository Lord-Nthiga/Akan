
    var days =["Sunday, Monday, Tuesday, Wednesday,Thursday, Friday, Saturday"];
    var boysName = ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"];
    var girlsName = ["Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama"];
    var submit = document.querySelector("#buttonsubmit");
    submit .addEventListener("click", function() {
        var gender = 
        document .querySelector('input[name="gender"]:checked');
        if  (genser === null) {
            prompt("Kindly Select your Gender");
        }
        else {console.log(gender.value)};
    })
     