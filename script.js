const toggleClose = document.getElementById("nav-close");
const toggleMenu = document.getElementById("nav-menu");
const navs = document.getElementById("navs");

// Show menu and hide the menu icon when clicked
toggleMenu.addEventListener("click", () => {
    navs.classList.add("show");
    toggleMenu.style.display = "none";
    toggleClose.style.display = "block";
});

// Hide menu and show the menu icon when clicked
toggleClose.addEventListener("click", () => {
    navs.classList.remove("show");
    toggleClose.style.display = "none";
    toggleMenu.style.display = "block";
});


//scrroll effect

const sections=document.querySelectorAll("section")
const navlinks=document.querySelectorAll(".nav-list a")

window.addEventListener("scroll",()=>
{
    let current=""

    sections.forEach(section =>{
        const sectionTop=section.offsetTop
        const sectionHeight=section.clientHeight
        if(pageYOffset>sectionTop -sectionHeight/3)
        {
            current=section.getAttribute("id")
        }
    })

    navlinks.forEach(link=>
    {
        link.classList.remove("active")
        if(link.getAttribute("herf") === `#${current}`)
        {
            link.classList.add("active")
        }
    }
    )
})

// about effect
document.addEventListener("DOMContentLoaded",()=>
{
    const fadeEle=document.querySelectorAll(".fade-up")
    const options={threshold:0.2}

    const observer=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.animationPlayState="running"
            }
        })
    },options)

    fadeEle.forEach(el=>{
        el.style.animationPlayState="paused"
        observer.observe(el)
    })
})

// skilss effect

document.addEventListener("DOMContentLoaded",()=>
{
    const skills=document.querySelectorAll(".skill1")
    const CIRC=326;

    const obs=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting)return;
            const el=entry.target
            const percent=Number(el.dataset.percent) || 0
            const circle=el.querySelector(".progress")
            const value=el.querySelector(".value")
            const targetOffset=CIRC-(CIRC*percent/100)

            circle.style.strokeDashoffset=targetOffset

            let start=0;
            const step=Math.max(1,Math.round(percent/24))

            const timer=setInterval(()=>{
                start+=step
                if(start>=percent){
                    start=percent
                    clearInterval(timer)
                }
                value.textContent=start+"%"
            },30)
            obs.unobserve(el)
        })
    },{threshold:0.35})

    skills.forEach(s=>obs.observe(s))
})

//spans
const spans=document.querySelectorAll(".progressbar span")
spans.forEach((span)=>{
    span.style.width=span.dataset.width
    span.innerHTML=span.dataset.width
})

// popop

const hirebtn=document.getElementById('hirebtn');
const hiremodel=document.getElementById('hiremodel');
const hireclose=document.getElementById('closeModal');

hirebtn.addEventListener("click",()=>{
     hiremodel.style.display = "flex";
})
hireclose.addEventListener("click", () => {
  hiremodel.style.display = "none";
});

// Close when clicked outside modal box
window.addEventListener("click", (event) => {
  if (event.target === hiremodel) {
    hiremodel.style.display = "none";
  }
});