// 
// 
// 

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.contact-loading');
  const success = document.querySelector('.contact-success');
  loading.classList += " contact-visible";
  emailjs
    .sendForm(
      'service_2huaien',
      'template_37x87en',
      event.target,
      '2hvV9SMMYfDlNPLDE'
    ).then(() => {
      loading.classList.remove("contact-visible");
      success.classList += " contact-visible";
    }).catch(() => {
      loading.classList.remove("contact-visible");
      alert("The email service is temporarily unavailable. Please contact me directly on patelarnavm@gmail.com");
    })
}