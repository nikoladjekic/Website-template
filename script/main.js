function validateForm() {

    //checking the name
    var name = document.getElementById("name");
    if (name.value == "") {
        alert("Please enter your name");
        name.focus();
        return false;
    } else {
        var regExpName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (!regExpName.test(name.value)) {
            alert("Please enter name in correct format");
            name.focus();
            return false;
        }
    }

    //check if the city was selected
    if (document.getElementById("city").value == "-1") {
        alert("You must provide your city");
        return false;
    }

    //check if zip is correct
    var zip = document.getElementById("zip");
    if (zip.value == "") {
        alert("Please enter your zip code");
        zip.focus();
        return false;
    } else {
        var regExpZip = /^[1-9][0-9]{4}$/;
        if (!regExpZip.test(zip.value)) {
            alert("Zip code must be in range 10000-99999");
            zip.focus();
            return false;
        }
    }

    //check address
    var address = document.getElementById("address");
    if (address.value == "") {
        alert("Please enter your address");
        address.focus();
        return false;
    } else {
        var regExpAddress = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*\s[0-9]{1,3}([a-z])?$/;
        if (!regExpAddress.test(address.value)) {
            alert("Address is not in correct format");
            address.focus();
            return false;
        }
    }

    //check phone
    var phone = document.getElementById("phone");
    if (phone.value == "") {
        alert("Please enter your phone");
        phone.focus();
        return false;
    } else {
        //063-555-555 or 063-555-5550
        var regExpPhone = /^06[0-9]-[0-9]{3}-[0-9]{3,4}$/;
        if (!regExpPhone.test(phone.value)) {
            alert("Phone is not in correct format");
            phone.focus();

            return false;
        }
    }

    //check email
    var email = document.getElementById("email");
    if (email.value == "") {
        alert("Please enter your email");
        email.focus();
        return false;
    } else {
        //validate email
        var regExpEmail =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regExpEmail.test(email.value)) {
            alert("Email is not in correct format");
            email.focus();
            return false;
        }
    }


    //check date
    var date = document.getElementById("date");
    if (date.value == "") {
        alert("Please enter date");
        date.focus();
        return false;
    } else {
        var regExpDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (!regExpDate.test(date.value)) {
            alert("Date is not in correct format");
            date.focus();
            return false;
        }
    }

} //end of validate form function



//on focus and on blur functions
function focusFunc(id) {
    document.getElementById(id).style.background = "#cccccc";
}

function blurFunc(id) {
    document.getElementById(id).style.background = "#e3ffff";
}
