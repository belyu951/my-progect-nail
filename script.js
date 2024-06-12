// Slider functionality
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');




let currentIndex = 0;

function showSlide(index) {
    if (index >= slide.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slide.length - 1;
    } else {
        currentIndex = index;
    }
    
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

// setInterval(()=>showSlide(currentIndex + 1),2500)

prev.addEventListener('click', () => {
  showSlide(currentIndex - 1)
    
});


next.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);

const slidess = document.querySelector('.slidess');
const slidee = document.querySelectorAll('.slidee');
const pedicurePrev2 = document.querySelector('.nailssNazad');
const nailssNext2 = document.querySelector('.pedicureVpered');


let currentIndex2 = 0;

function showSlide2(index2) {
  if (index2 >= slidee.length) {
      currentIndex2 = 0;
  } else if (index2 < 0) {
      currentIndex2 = slidee.length - 1;
  } else {
      currentIndex2 = index2;
  }
  slidess.style.transform = `translateX(${-currentIndex2 * 100}%)`;
}


pedicurePrev2.addEventListener('click', () => {
  currentIndex2 === 1 ? showSlide2(currentIndex2 - 1) : currentIndex2 = 0
  // currentIndex2 === 0 ? showSlide2(currentIndex2 - 1) : currentIndex2 = 1
  // showSlide2(currentIndex2 - 1);
  // console.log(currentIndex2);
});

nailssNext2.addEventListener('click', () => {
  currentIndex2 === 0 ? showSlide2(currentIndex2 + 1) : currentIndex2 = 1
  // showSlide2(currentIndex2 + 1);
  // console.log(currentIndex2);
});



showSlide2(currentIndex2);

// Comment functionality
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsContainer = document.querySelector('.comments-container');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>Anonymous:</strong> ${commentInput.value}</p>`;
    commentsContainer.appendChild(newComment);
    commentInput.value = '';
});

// Registration functionality
const registrationForm = document.getElementById('registration');
const registrationButton = document.querySelector('.registration-form')

const userData = {
  userName: null,
  userTel: null,
}



  registrationButton.addEventListener('click', (b)=>{
    b.preventDefault()

    let userName = document.querySelector('.userName')
    let userTel = document.querySelector('.userTel')

    let youTel = document.querySelector('.youTelefon')
    let youReg = document.querySelector('.youReg')
    let register = document.querySelector('.register')
    userData.userName = document.getElementById('username').value
    userData.userTel = document.getElementById('tel').value
    youTel.innerText = `${userData.userName = document.getElementById('username').value}: ${userData.userTel = document.getElementById('tel').value}`
      youReg.classList.add('none')
      register.classList.add('none')
    
})
console.log(userData);





// console.log(youTel.innerText = `${userData.userName = document.getElementById('username').value} : 
// ${userData.userTel = document.getElementById('tel').value}`);








// registrationForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value
//     // const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value
//     alert(`User Registered!\nUsername: ${username}\nassword: ${password}`);
//     registrationForm.reset();
// });