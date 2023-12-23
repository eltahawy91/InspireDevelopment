function SendMail() {
    var params = {
      from_name: document.getElementById("FullName").value,
      email_id: document.getElementById("EmailAddress").value,
      subject: document.getElementById("Subject").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("Message").value,
    };
    emailjs
      .send("service_bg7g0eu", "template_dr8omuu", params)
      .then(function (res) {
        alert("Message sent Successfully!" );
      });
  }
  
