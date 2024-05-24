//-------------------mobile nave responsive---------

let mobileNavBtn = document.getElementById('mobile-nav-btn');
let mobileNav = document.querySelector('.mobile-nav');

mobileNavBtn.onclick = ()=>{
        mobileNav.classList.toggle('open');
}
var clutter = '';
document.querySelector('#page2H1').textContent.split("").forEach(function(dets){
        
        clutter += `<span>${dets}</span>`;
        document.querySelector('#page2H1').innerHTML=clutter;

})

gsap.to("#page2>h1>span",{
        scrollTrigger:{
                trigger:`#page2>h1>span`,
                start:`top bottom`,
                end:`bottom top`,
                scroller:`#main`,
                scrub:.5,
        },
        stagger:.03,
        color:`#fff`
})