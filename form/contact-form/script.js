let fname = document.getElementById("name");
let subject =  document.getElementById("subject");
let email = document.getElementById("email");
let message = document.getElementById("message");

let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", submitMessage);

function submitMessage(event){
    event.preventDefault();
    var obj = {
        senderName: fname.value,
        subject: subject.value,
        email: email.value,
        message: message.value
    };

    var newObj = JSON.stringify(obj);
    console.log(newObj);
    console.log("hjaha");
    sendEmail()
}



function sendEmail(){
    Email.send({
        Host: "smptp.gmail.com",
        Username: "maarufskyland1231@gmail.com",
        Password: "MaarufB1231",
        To: "maarufburad1231@gmail.com",
        From: "maarufskyland1231@gmail.com",
        Subject: subject.value,
        Body: message.value,
    }).then(
        message => alert("mail send successfully!")
    )
}