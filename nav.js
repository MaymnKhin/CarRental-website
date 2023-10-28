const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        
        nav.classList.toggle('nav-active');

        
        navLinks.forEach((link, index) => {
            
            if(link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 * 2}s`;
            }
        });
    });

    
}

window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

navSlide();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () =>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option =>{
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });

});

//Pop-Up Modal

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
} 

//CHECK INSPECTION

function checkCarCondition() {
    
    const button = document.getElementById('checkButton');
    button.innerHTML = 'Checking...'; 
    button.disabled = true;
    
    setTimeout(function () {
        button.innerHTML = 'Good Condition';
        button.classList.add('green');
        button.disabled = true; 

    }, 2000); 
}

//RETURN BILL APPEARANCE
function formAppear(){
    const returnCar = document.getElementById('ReturnCar');
    if (returnCar.classList.contains('hidden')) {
        returnCar.classList.remove('hidden');
        returnCar.classList.add('visible');

        setTimeout(() => {
            returnCar.classList.remove('hidden');
        }, 1000);
    }
}

function showPaymentSuccessModal() {
  const overlayPayment = document.getElementById('overlayPayment');
  overlayPayment.style.display = 'block';
}

function hidePaymentSuccessModal() {
  const overlayPayment = document.getElementById('overlayPayment');
  overlayPayment.style.display = 'none';
}





