let form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    document.getElementById("error").innerHTML="";
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.value==="" || email.value==="" || subject.value==="" || message.value===""){
        displayError("Please enter all values.");
    }
    else if(!emailRegex.test(email.value)){
        displayError("Please enter a valid email");
    }
    else{
        let formData = {
            name : name.value,
            email : email.value,
            subject : subject.value,
            message : message.value
        }
        emailjs.init({
            publicKey: "tEngvdfceINEHVaH_",
        });
        emailjs.send("service_drozpdg","template_3z699ol",formData);
        displayError("Message sent");
    }

    function displayError(error){
        document.getElementById("error").innerHTML=error;
    }
})
