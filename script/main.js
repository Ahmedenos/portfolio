"use strict"
// header scroll
let converter="light"
const myLinks=document.getElementsByClassName("my-links")
const sections=document.getElementsByClassName("section") 
const head=document.getElementsByClassName("header")[0]
const scroller= document.getElementById("scroll")
const goAbout=document.getElementById("go-to-about")
window.onscroll=function(){
    if(window.scrollY>=100){
        
        if(converter=="dark"){
            head.classList.add("header-dark")
        }
        else{
            head.classList.add("header-scroll")
        }
    }
    else{
        head.classList.remove("header-scroll")
        head.classList.remove("header-dark")
    }
    if(window.scrollY>=620){
        scroller.style.display="block"
    }
    else{
        scroller.style.display="none"
    }
// change scroll
    var current = "";
    for(let x=0 ;x<sections.length;x++){
        const sectionTop=sections[x].offsetTop;
        if(pageYOffset>= sectionTop-160){
            current=sections[x].getAttribute("id")
        
    }
  };
      for(let z=0 ;z<myLinks.length ;z++){
          myLinks[z].classList.remove("active")
          if(myLinks[z].classList.contains(current)){
              myLinks[z].classList.add("active")
          }
      }
}
// Arrow For above
scroller.onclick=function () {
    scroll({
        top:0,
        behavior:"smooth"
    })
}

// go To About
goAbout.onclick=function(){
    scroll({
        top:sections[1].offsetTop-150,
        behavior:"smooth"
    })
}

// Skills 
const toggleIcon=document.getElementsByClassName("toggle")
const progress= document.getElementsByClassName("progress-container")
const backend= document.getElementById("backend")
progress[0].classList.add("progress-event")
for(let i=0 ; i< toggleIcon.length ; i++){
    toggleIcon[i].onclick=function(){
        if(i==1){
            toggleIcon[1].classList.toggle("toggle-event")
            toggleIcon[0].classList.remove("toggle-event")
            toggleIcon[2].classList.remove("toggle-event")
            progress[1].classList.toggle("progress-event")
            progress[0].classList.remove("progress-event")
            progress[2].classList.remove("progress-event")  
        }
        else if(i==2){
            toggleIcon[2].classList.toggle("toggle-event")
            toggleIcon[0].classList.remove("toggle-event")
            toggleIcon[1].classList.remove("toggle-event")
            progress[2].classList.toggle("progress-event")
            progress[0].classList.remove("progress-event")
            progress[1].classList.remove("progress-event")
        }
        else if(i==0){
            toggleIcon[0].classList.toggle("toggle-event")
            toggleIcon[2].classList.remove("toggle-event")
            toggleIcon[1].classList.remove("toggle-event")
            progress[0].classList.toggle("progress-event")
            progress[2].classList.remove("progress-event")
            progress[1].classList.remove("progress-event")
        }  
    }
}
// education && work

const education=document.getElementById("education-h")
const educationBody=document.getElementById("education")

const work=document.getElementById("work-h")
const workBody=document.getElementById("work")

education.onclick=function(){
    education.style.color="hsl(250,69%,61%)"
    workBody.style.display="none"
    work.style.color="hsl(250,8% ,15%)"
    educationBody.style.display="block"
    if(converter=="dark"){
        work.style.color="#fff"
    }
}
work.onclick=function(){
    work.style.color="hsl(250,69%,61%)"
    educationBody.style.display="none"
    workBody.style.display="block"
    education.style.color="hsl(250,8% ,15%)"
    if(converter=="dark"){
        education.style.color="#fff"
    }
}

// Services 
const view= document.getElementsByClassName("view")
const hidden=document.getElementsByClassName("one-hidden")
const closeOut=document.getElementsByClassName("close-out")
const service=document.getElementsByClassName("service-div")
for(let n=0 ;n<view.length ;n++){
    view[n].onclick=function(){
        hidden[n].style.display="block"
        if(converter=="dark"){
            hidden[n].style.background="var(--container-dark)"
            service[0].style.background="var(--container-dark)"
            service[1].style.background="var(--container-dark)"
            service[2].style.background="var(--container-dark)"
        }
        else{
            service[0].style.background="hsl(250,60%,99%)"
            service[1].style.background="hsl(250,60%,99%)"
            service[2].style.background="hsl(250,60%,99%)"
        }
        if(screen.width>=890 && screen.width<=1244){
            hidden[n].style.width="47%"
        }
        else if(screen.width>=640 && screen.width<=890){
            hidden[n].style.width="60%"
        }
        else if(screen.width>=498 && screen.width<=644){
            hidden[n].style.width="95%";
            hidden[n].style.bottom="125px"
            hidden[n].style.marginLeft="20px"
        }
        else if(screen.width<=498){
            hidden[n].style.width="95%";
            hidden[n].style.top="200px"
            hidden[n].style.height="335px"
        }
        else {
            hidden[n].style.width="35%"
        }
        
    }
    closeOut[n].onclick=function(){
        hidden[n].style.display="none"
        if(converter=="dark"){
            service[0].style.background="var(--container-dark)"
            service[1].style.background="var(--container-dark)"
            service[2].style.background="var(--container-dark)"
        }
        else{
            service[0].style.background="#fff"
            service[1].style.background="#fff"
            service[2].style.background="#fff"
        }
      
    }
}
// portfolio
const right=document.getElementById("right")
const left=document.getElementById("left")
const slider=document.getElementsByClassName("slide1");
const dots=document.getElementsByClassName("dots-icon")
let counter= 1
function showSlide() {
    if(counter>slider.length){counter=1}
    if(counter<1){counter=slider.length}

    for(let s=0 ;s<slider.length ;s++){
        slider[s].style.display="none"
        dots[s].style.background="rgb(171, 170, 176)"
    }
    slider[slider.length-counter].style.display="block";
    slider[slider.length-counter].classList.add("opac"); 
    dots[slider.length-counter].style.background="hsl(250,69%,61%)"
  
}

showSlide()
function plusSlider() {
    counter++
    showSlide()
}
function minsSlider() {
    counter--
    showSlide()
}
right.addEventListener("click",function () {
    plusSlider()  
})
left.addEventListener("click",function () {
    minsSlider() 
})
// dots
 for(let d=0 ;d<dots.length;d++){
    dots[d].onclick=function dotsIcon() {
        for(let q=0; q<slider.length;q++){
            slider[q].style.display="none"
            dots[q].style.background="rgb(171, 170, 176)" 
        }
        slider[d].style.display="block"
        slider[d].classList.add("opac"); 
        dots[d].style.background="hsl(250,69%,61%)"
        dots[d].style.opacity="1"
    }
} 
// Dark mood
const moon=document.getElementById("moon")
const sun=document.getElementById("sun");
const body=document.body
const h1=document.querySelectorAll("h1")
const h2=document.querySelectorAll("h2")
const h3=document.querySelectorAll("h3")
const h4=document.querySelectorAll("h4")
const link=document.querySelectorAll("a")
const scrollHeader=document.getElementsByClassName("header-scroll")[0]
const sideIcon=document.getElementsByClassName("side-icon")
const footerLinks=document.getElementsByClassName("footer-colors")
const inputs=document.getElementsByClassName("inputs")
sun.style.display="none"
moon.onclick=function(){
    converter="dark"
    // moon.style.visibility="hidden"
    moon.style.display="none"
    sun.style.display="block"
    sun.parentElement.style.display="block"
    // sun.style.visibility="visible"
    body.style.background="var(--body-dark)"
    body.style.color="var(--text-dark)";

    for(let head2=0 ;head2<h2.length;head2++){
        h2[head2].style.color="var(--title-dark)"
    }
    for(let head1=0 ;head1<h1.length;head1++){
        h1[head1].style.color="var(--title-dark)"
    }
    for(let head3=0 ;head3<h3.length;head3++){
        h3[head3].style.color="var(--title-dark)"
    }
    for(let head4=0 ;head4<h4.length;head4++){
        h4[head4].style.color="var(--title-dark)"
    }
    for(let a=0 ;a<link.length;a++ ){
        link[a].style.color="var(--text-dark)"
    }
    for(let s=0 ;s<sideIcon.length;s++){
        sideIcon[s].style.color="var(--main-color)"
    }
    for(let i=0; i<inputs.length;i++){
        inputs[i].style.background="var(--input-dark)"
        inputs[i].style.color="#fff"
    }
    for(let services=0 ;services<service.length ;services++){
            service[services].style.background="var(--container-dark)"
            service[services].style.boxShadow=" 0px 0px 5px 1px #111 "
            service[services].onmouseover=function(){
                service[services].style.boxShadow=" 0px 0px 5px 1px #000 "
            }
            service[services].onmouseout=function(){
                service[services].style.boxShadow=" 0px 0px 5px 1px #111 "
            }
    }
    
}
sun.onclick=function(){
    converter="light"
    // moon.style.visibility="visible"
    // sun.style.visibility="hidden"
    moon.style.display="block"
    sun.style.display="none"
    body.style.background="hsl(250,60%,99%)"
    body.style.color="var(--text-color)";

    for(let head2=0 ;head2<h2.length;head2++){
        h2[head2].style.color="var(--title-color)"
    }
    for(let head1=0 ;head1<h1.length;head1++){
        h1[head1].style.color="var(--title-color)"
    }
    for(let head3=0 ;head3<h3.length;head3++){
        h3[head3].style.color="var(--title-color)"
    }
    for(let head4=0 ;head4<h4.length;head4++){
        h4[head4].style.color="var(--title-color)"
    }
    for(let a=0 ;a<link.length;a++ ){
        link[a].style.color="var(--text-color)"
    }
    for(let f=0 ;f<footerLinks.length ;f++){
        footerLinks[f].style.color="#f9f9f9"
    }
    for(let s=0 ;s<sideIcon.length;s++){
        sideIcon[s].style.color="var(--main-color)"
    }
    for(let i=0; i<inputs.length;i++){
        inputs[i].style.background="var(--input-color)"
        inputs[i].style.color="var(--text-color)"
    }
    for(let services=0 ;services<service.length ;services++){
        service[services].style.background="#fff"
        service[services].style.boxShadow=" 0px 0px 5px 1px #ccc "
        service[services].onmouseover=function(){
            service[services].style.boxShadow=" 0px 0px 5px 3px #ccc"
        }
        service[services].onmouseout=function(){
            service[services].style.boxShadow=" 0px 0px 5px 1px #ccc "
        }
}
}
// small screen nav bar
const mysmallLinks=document.getElementsByClassName("links-small-screen")[0]
const moreLinks= document.getElementsByClassName("more-in-small")[0]
const closeSmall= document.getElementsByClassName("close-small")[0]
moreLinks.onclick=function(){
    mysmallLinks.style.display="flex"
    if(converter=="dark"){
        mysmallLinks.style.background="var(--container-dark)"
    }
    else{
        mysmallLinks.style.background="#fff"
    }
}
closeSmall.onclick=function(){
    mysmallLinks.style.display="none"
}


