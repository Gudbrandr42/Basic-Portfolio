function sendEmail() {
  emailjs.init("user_7Vs5eg6WEMfm20HJ2KwYQ");
}

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      //creates a five digit number for contact
      this.contact_number.value = (Math.random() * 100000) | 0;

      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
