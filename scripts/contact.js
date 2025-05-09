// contact Form
const Name = document.querySelector('.name-input');
const Email = document.querySelector('.email-input');
const Subject = document.querySelector('.subject-input');
const Message = document.querySelector('.message-input');
const inputErr = document.getElementById('js-input-error');
// Api key for Email Js

emailjs.init('R6DIsCxYSvRAjG-QE');

const sendMailBtn = document.getElementById('send-msg');

sendMailBtn.addEventListener('click', () => {
  if(Name.value === '' && Email.value === '' && Subject.value === '' && Message.value === ''){
    inputErr.innerText = 'Please fill in all fields before sending the message';
     
    // display the error message for 13s 
    setTimeout(() => {
      inputErr.innerText = '';
    }, 1300);

  }else{
    emailjs.send("service_masarati","template_vn95bqq", {
      from_name: Name.value,
      email_id: Email.value,
      subject_: Subject.value,
      message: Message.value
    }).then(() => {
      alert('Message successfully sent');
      Name.value = '';
      Email.value = '';
      Subject.value = '';
      Message.value = '';
    })
  }
})

