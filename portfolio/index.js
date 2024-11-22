
   const menuButton = document.querySelector(".nav-menu-button")

   menuButton.addEventListener("click", ()=>{
       document.body.classList.toggle("open-mobile-menu")
   })

   const closebutton = document.querySelector(".close-btn");

   closebutton.addEventListener("click" , ()=>{
      return  menuButton.click()
   })

   // adding shadow on navigation bar while scrolling

   window.onscroll = function() {navShadow()};

const navShadow = ()=>{
    const navHeader = document.getElementById("header")
   
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)"
    navHeader.style.height = "70px"
    navHeader.style.lineHeight = "70px"
  }
  else{
    navHeader.style.boxShadow = "none"
    navHeader.style.height = "90px"
    navHeader.style.lineHeight = "90px"
  }
}


const typingAnimation =new Typed(".typedText",{
   strings: ["Developer"
   ],
   loop:true,
   smartBackspace: false,
   typeSpeed: 90,
   backSpeed: 80,
   backDelay: 600
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2000,
  reset: true     
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 200})
