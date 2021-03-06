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

//Coding Skills Circle Progress Bar
const circle = document.querySelector('.progress-coding-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}
setProgress(90)

const circle2 = document.querySelector('.progress-coding-circle2');
const radius2 = circle2.r.baseVal.value;
const circumference2 = 2 * Math.PI * radius2;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;

function setProgress2(percent2) {
    const offset2 = circumference2 - percent2 / 100 * circumference2;
    circle2.style.strokeDashoffset = offset2;
}
setProgress2(75)

const circle3 = document.querySelector('.progress-coding-circle3');
const radius3 = circle3.r.baseVal.value;
const circumference3 = 2 * Math.PI * radius3;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;

function setProgress3(percent3) {
    const offset3 = circumference3 - percent3 / 100 * circumference3;
    circle3.style.strokeDashoffset = offset3;
}
setProgress3(85)

const circle4 = document.querySelector('.progress-coding-circle4');
const radius4 = circle4.r.baseVal.value;
const circumference4 = 2 * Math.PI * radius4;

circle4.style.strokeDasharray = `${circumference4} ${circumference4}`;
circle4.style.strokeDashoffset = circumference4;

function setProgress4(percent4) {
    const offset4 = circumference4 - percent4 / 100 * circumference4;
    circle4.style.strokeDashoffset = offset4;
}
setProgress4(80)

const circle5 = document.querySelector('.progress-coding-circle5');
const radius5 = circle5.r.baseVal.value;
const circumference5 = 2 * Math.PI * radius5;

circle5.style.strokeDasharray = `${circumference5} ${circumference5}`;
circle5.style.strokeDashoffset = circumference5;

function setProgress5(percent5) {
    const offset5 = circumference5 - percent5 / 100 * circumference5;
    circle5.style.strokeDashoffset = offset5;
}
setProgress5(95)

const circle6 = document.querySelector('.progress-coding-circle6');
const radius6 = circle6.r.baseVal.value;
const circumference6 = 2 * Math.PI * radius6;

circle6.style.strokeDasharray = `${circumference6} ${circumference6}`;
circle6.style.strokeDashoffset = circumference6;

function setProgress6(percent6) {
    const offset6 = circumference6 - percent6 / 100 * circumference6;
    circle6.style.strokeDashoffset = offset6;
}
setProgress6(90)

// Porfolio Section Gallery Filter
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

//Scroll section
let scrollItems = document.querySelectorAll('.smoothScroll');
for(let i=0; i <scrollItems.length; i++) {
  scrollItems[i].addEventListener("click", function(event) {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").substr(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  })
}

// Contact form section

let form=document.forms.userForm;

form.onsubmit = function() {
  event.preventDefault()
  if (form.name.value == "" || form.email.value == "" || form.message.value == ""){
    form.name.style.borderBottomColor = "red"
    form.email.style.borderBottomColor = "red"
    form.message.style.borderBottomColor = "red"
    document.querySelector('.group-btn').nextElementSibling.className='form-output form-output-open'   
  }else {
    form.name.style.borderBottomColor = "#585d65"
    form.email.style.borderBottomColor = "#585d65"
    form.message.style.borderBottomColor = "#585d65"
    document.querySelector('.group-btn').nextElementSibling.className='form-output close'
    document.querySelector('.form-output').nextElementSibling.className='contact-output open'
  }
}

// Portfolio Popup Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    event.preventDefault()
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length ) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}

var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
    event.preventDefault()
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length ) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  slides1[slideIndex1-1].style.display = "block";  

}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    event.preventDefault()
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length ) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  slides2[slideIndex2-1].style.display = "block";  

}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
    event.preventDefault()
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  if (n > slides3.length ) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  slides3[slideIndex3-1].style.display = "block";  

}

//Portfolio Modal
let modalsref=document.querySelectorAll("#open_modal");
modalsref.forEach(function(ref){
    ref.onclick = function(){
        event.preventDefault()
        let modal = ref.getAttribute("data-modal");
        document.getElementById(modal).setAttribute("style","opacity: 1; display: block;");
        let hdmodal = document.querySelector("iframe").setAttribute("src","https://www.youtube.com/embed/S4L8T2kFFck")
    }
});

 //Baglanma icon teyin edilsin
 let closeref = document.querySelectorAll("#modal_close");
 closeref.forEach(function(ref){
     ref.onclick = function(){
         // Works_modal classli parent tap ve style teyin et 
         let modal  = (ref.closest(".works_modal").setAttribute("style","opacity: 0; visibility: hidden;"));
         let hdmodal = document.querySelector("iframe").setAttribute("src","")
     }
 });


