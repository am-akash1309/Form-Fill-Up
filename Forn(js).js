function myFunction() {
    var a = document.getElementById("name").value;
    console.log(a)
    var gender = document.getElementsByClassName("gender").checked;
    console.log(gender)
    var age = document.getElementById("age").value;
    console.log(age)
    var dob = document.getElementById("dob").value;
    console.log(dob)
    var degree = document.getElementById("degree").value;
    console.log(degree)
    var z = document.getElementById("agree");
    console.log(z)

    if (a==0) {
        document.getElementById("notify").innerHTML = "Please enter your Name"
    }
    else if (gender) {
        document.getElementById("notify").innerHTML = "Please enter your Gender"
    }
    else if (age==""){
        document.getElementById("notify").innerHTML = "Please enter your Age"
    }
    else if (dob==0){
        document.getElementById("notify").innerHTML = "Please enter your Date of Birth"
    }
    else if (degree==0){
        document.getElementById("notify").innerHTML = "Please enter your Degree"
    }
    else if (z.checked){
        document.getElementById("notify").innerHTML = "Your Form Has been submitted."
    }
    else{
        document.getElementById("notify").innerHTML = "Please make sure you agree to our terms and conditions"
    }
}
