/* Start Navbar Active background */

let ul = document.querySelector('.navbar .collapse .ul-nav');
let li = document.querySelectorAll('.navbar .collapse .ul-nav li a');


li.forEach(el =>{
    
 el.addEventListener('click',function(){
     
     ul.querySelector('.active').classList.remove('active');
     el.classList.add('active');
     
 });
    
});
/* End Navbar Active background */

/* Start Count Number */
let countNumber = document.querySelector('.countNumber');
window.onscroll = function(){
  
    if(window.pageYOffset==0){
        document.querySelector('.special-link').classList.add('active');
    }
    let backToTop =document.querySelector('.contact-us .back');
    
    backToTop.onclick = function(){
        
        window.scrollTo({
           top:0 
        });
    }
    //Skilss offset Top
    let countOffsetTop = countNumber.offsetTop;
    
    // skills outer Height
    let countOuterHeight = countNumber.offsetHeight;
    
    //window Height
    let windowHeight= this.innerHeight;
     
    // window currently scrolled
    let windowscrolltop = this.pageYOffset;
    
        
    if(windowscrolltop >(countOffsetTop+countOuterHeight-windowHeight-300)){
        
        let counters = document.querySelectorAll('.countNumber .counter');
        const speed = 200;
        counters.forEach(counter =>{
            
           const updateCount = ()=>{
               
               const target = +counter.getAttribute('data-target');
               const count = +counter.innerText; 
               const inc = target/speed;
               
               if(count<target){
                   
                   counter.innerText = count + 1;
                   setTimeout(updateCount,200);
                   
               }else{
                   count.innerText = target;
               }
           } 
           updateCount();
            
        });
        
    } // المعادلة 
};// End Window Scroll 

/* Start Swipper Js */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      400: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      540: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
  });

/* Start Swipper Js */
let loading = document.querySelector('.loading-overlay .sk-cube-grid');
let nav     = document.querySelector('.navbar');
window.onload = function(){
 

    
    var fadeEff = setInterval(function(){
        
          loading.style.opacity=0;

            var fadeEffect = setInterval(function () {

                 loading.parentNode.style.opacity=0;
                loading.parentNode.remove();
                
            document.querySelector('body').style.overflowY='auto';

            },500);
        
     },2000);


}















