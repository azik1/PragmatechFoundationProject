let pos=0;

function slideShow(class1,class2,class3,px,btn,figur){
    let itemCount=figur;
    let containerWidth=document.querySelector('.'+class1).clientWidth;
    let items=document.querySelectorAll('.'+class2)

    for(let i=0;i<items.length;i++){
        items[i].style.width=containerWidth/itemCount +'px'
    }

    let sliderContainer=document.querySelector('.'+class3)
    sliderContainer.style.width=containerWidth/itemCount*items.length +'px';

    if(btn == 'prev'){
        if(pos>0){
            pos=-px
            sliderContainer.style.left=pos+'px';
        }else{
            sliderContainer.style.left=pos+'px';
            pos+=containerWidth/itemCount
        }
    }else{
        if(pos>-px){
            pos-=containerWidth/itemCount
            sliderContainer.style.left=pos+'px';
        }else{
            pos=0
            sliderContainer.style.left=pos+'px';
        }
    }
}

const circle = document.querySelector('.progress-coding-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const dataPercent=circle.getAttribute('data-percent')


circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}
setProgress(90)



const buttons = document.querySelectorAll('.filters-menu li');
const section = document.querySelectorAll('.thumb');
buttons.forEach(item =>{
  item.addEventListener('click', ()=>{
    buttons.forEach(item =>{
      item.className = ""; 
    });
    item.classList = "active";
    //show images
    let values = item.textContent;
    section.forEach(show =>{
      show.style.display = "none";
      if(show.getAttribute("data-id") === values || values === "All"){
        show.style.display = "block";
      }
    });
  });
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     event.preventDefault()
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length ) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "block";  

// }

// var slideIndex1 = 1;
// showSlides1(slideIndex1);

// function plusSlides1(n) {
//     event.preventDefault()
//   showSlides1(slideIndex1 += n);
// }

// function currentSlide1(n) {
//   showSlides1(slideIndex1 = n);
// }

// function showSlides1(n) {
//   var i;
//   var slides1 = document.getElementsByClassName("mySlides1");
//   if (n > slides1.length ) {slideIndex1 = 1}    
//   if (n < 1) {slideIndex1 = slides1.length}
//   for (i = 0; i < slides1.length; i++) {
//       slides1[i].style.display = "none";  
//   }
//   slides1[slideIndex1-1].style.display = "block";  

// }

// var slideIndex2 = 1;
// showSlides2(slideIndex2);

// function plusSlides2(n) {
//     event.preventDefault()
//   showSlides2(slideIndex2 += n);
// }

// function currentSlide2(n) {
//   showSlides2(slideIndex2 = n);
// }

// function showSlides2(n) {
//   var i;
//   var slides2 = document.getElementsByClassName("mySlides2");
//   if (n > slides2.length ) {slideIndex2 = 1}    
//   if (n < 1) {slideIndex2 = slides2.length}
//   for (i = 0; i < slides2.length; i++) {
//       slides2[i].style.display = "none";  
//   }
//   slides2[slideIndex2-1].style.display = "block";  

// }

// var slideIndex3 = 1;
// showSlides3(slideIndex3);

// function plusSlides3(n) {
//     event.preventDefault()
//   showSlides3(slideIndex3 += n);
// }

// function currentSlide3(n) {
//   showSlides3(slideIndex3 = n);
// }

// function showSlides3(n) {
//   var i;
//   var slides3 = document.getElementsByClassName("mySlides3");
//   if (n > slides3.length ) {slideIndex3 = 1}    
//   if (n < 1) {slideIndex3 = slides3.length}
//   for (i = 0; i < slides3.length; i++) {
//       slides3[i].style.display = "none";  
//   }
//   slides3[slideIndex3-1].style.display = "block";  

// }

let modalsref=document.querySelectorAll("#open_modal");
modalsref.forEach(function(ref){
    ref.onclick = function(){
        event.preventDefault()
        let modal = ref.getAttribute("data-modal");
        document.getElementById(modal).setAttribute("style","opacity: 1; display: block;");
    }
});

 //Baglanma icon teyin edilsin
 let closeref = document.querySelectorAll("#modal_close");
 closeref.forEach(function(ref){
     ref.onclick = function(){
         // Works_modal classli parent tap ve style teyin et 
         let modal  = (ref.closest(".works_modal").setAttribute("style","opacity: 0; visibility: hidden;"));
     }
 });


