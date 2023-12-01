
document.addEventListener('DOMContentLoaded', function () {
    
    let faqElements = document.querySelectorAll('.faq');
  
    faqElements.forEach(function (faq) {
      let answer = faq.querySelector('.answer');
      let image = faq.querySelector('img');
  
      function toggleActive() {
        answer.classList.toggle('active');
  
        if (image.src.includes("assets/images/icon-plus.svg")) {
          image.src = "assets/images/icon-minus.svg";
        } else {
          image.src = "assets/images/icon-plus.svg";
        }
      }
  
      faq.addEventListener('click', toggleActive);
  
      faq.addEventListener('keydown', function (event) {
        if (event.keyCode === 13 || event.key === 'Enter') {
          toggleActive();
        }
      });
  
      faq.setAttribute('tabindex', '0');
  
      faq.addEventListener('focus', function () {
        faq.classList.add('focused');
      });
  
      faq.addEventListener('blur', function () {
        faq.classList.remove('focused');
      });
    });
  });