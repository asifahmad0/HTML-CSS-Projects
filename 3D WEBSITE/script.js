//-------------------mobile nave responsive---------

let mobileNavBtn = document.getElementById('mobile-nav-btn');
let mobileNav = document.querySelector('.mobile-nav');

mobileNavBtn.onclick = ()=>{
        mobileNav.classList.toggle('open');
}

//======================================PAGE 2===========
var clutter = '';
document.querySelector('#page2>h1').textContent.split(",").forEach(function(dets){
        
        clutter += `<span>${dets}</span>`;
        document.querySelector('#page2>h1').innerHTML=clutter;

})

gsap.to("#page2>h1>span",{
        scrollTrigger:{
                trigger:`#page2>h1>span`,
                start:`top bottom`,
                end:`bottom top`,
                scroller:`#main`,
                scrub:.5,
        },
        stagger:.2,
        color:`#fff`
})


//======================================PAGE 3===========
function canvas(){
        const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
      img/frames00007.png
      img/frames00010.png
      img/frames00013.png
      img/frames00016.png
      img/frames00019.png
      img/frames00022.png
      img/frames00025.png
      img/frames00028.png
      img/frames00031.png
      img/frames00034.png
      img/frames00037.png
      img/frames00040.png
      img/frames00043.png
      img/frames00046.png
      img/frames00049.png
      img/frames00052.png
      img/frames00055.png
      img/frames00058.png
      img/frames00061.png
      img/frames00064.png
      img/frames00067.png
      img/frames00070.png
      img/frames00073.png
      img/frames00076.png
      img/frames00079.png
      img/frames00082.png
      img/frames00085.png
      img/frames00088.png
      img/frames00091.png
      img/frames00094.png
      img/frames00097.png
      img/frames00100.png
      img/frames00103.png
      img/frames00106.png
      img/frames00109.png
      img/frames00112.png
      img/frames00115.png
      img/frames00118.png
      img/frames00121.png
      img/frames00124.png
      img/frames00127.png
      img/frames00130.png
      img/frames00133.png
      img/frames00136.png
      img/frames00139.png
      img/frames00142.png
      img/frames00145.png
      img/frames00148.png
      img/frames00151.png
      img/frames00154.png
      img/frames00157.png
      img/frames00160.png
      img/frames00163.png
      img/frames00166.png
      img/frames00169.png
      img/frames00172.png
      img/frames00175.png
      img/frames00178.png
      img/frames00181.png
      img/frames00184.png
      img/frames00187.png
      img/frames00190.png
      img/frames00193.png
      img/frames00196.png
      img/frames00199.png
      img/frames00202.png
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 67;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: .5,
        trigger: `#page3`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
    
      trigger: "#page3",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `250% top`,
    });
    }
    canvas()

//======================================PAGE 4======================
    var page4txt='';
document.querySelector('#page4>h1').textContent.split(",").forEach((text4)=>{
        page4txt += `<span> ${text4}</span>`
        document.querySelector('#page4>h1').innerHTML=page4txt;
})

gsap.to('#page4>h1>span',{
        scrollTrigger:{
                trigger:`#page4>h1>span`,
                start:`top bottom`,
                end:`bottom top`,
                scroller:`#main`,
                scrub:.5,
        },
        stagger:.2,
        color:`#fff`
})

//======================================PAGE 5===========
function canvas1(){
        const canvas = document.querySelector("#page5>canvas");
      const context = canvas.getContext("2d");
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      
      window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
      });
      
      function files(index) {
      var data = `
      img/bridges00004.png
      img/bridges00007.png
      img/bridges00010.png
      img/bridges00013.png
      img/bridges00016.png
      img/bridges00019.png
      img/bridges00022.png
      img/bridges00025.png
      img/bridges00028.png
      img/bridges00031.png
      img/bridges00034.png
      img/bridges00037.png
      img/bridges00040.png
      img/bridges00043.png
      img/bridges00046.png
      img/bridges00049.png
      img/bridges00052.png
      img/bridges00055.png
      img/bridges00058.png
      img/bridges00061.png
      img/bridges00064.png
      img/bridges00067.png
      img/bridges00070.png
      img/bridges00073.png
      img/bridges00076.png
      img/bridges00079.png
      img/bridges00082.png
      img/bridges00085.png
      img/bridges00088.png
      img/bridges00091.png
      img/bridges00094.png
      img/bridges00097.png
      img/bridges00100.png
      img/bridges00103.png
      img/bridges00106.png
      img/bridges00109.png
      img/bridges00112.png
      img/bridges00115.png
      img/bridges00118.png
      img/bridges00121.png
      img/bridges00124.png
      img/bridges00127.png
      img/bridges00130.png
      img/bridges00133.png
      img/bridges00136.png
      img/bridges00139.png
      img/bridges00142.png
      img/bridges00145.png
      img/bridges00148.png
      img/bridges00151.png
      img/bridges00154.png
      img/bridges00157.png
      img/bridges00160.png
      img/bridges00163.png
      `;
      return data.split("\n")[index];
      }
      
      const frameCount = 67;
      
      const images = [];
      const imageSeq = {
      frame: 1,
      };
      
      for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
      }
      
      gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: .5,
        trigger: `#page5`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
      },
      onUpdate: render,
      });
      
      images[1].onload = render;
      
      function render() {
      scaleImage(images[imageSeq.frame], context);
      }
      
      function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
      }
      ScrollTrigger.create({
      
      trigger: "#page5",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `250% top`,
      });
      }
      canvas1()
      

//======================================PAGE 6==========================
      var page6txt='';
      document.querySelector('#page6>h1').textContent.split(",").forEach((text6)=>{
              page6txt += `<span> ${text6}</span>`
              document.querySelector('#page6>h1').innerHTML=page4txt;
      })
      
      gsap.to('#page6>h1>span',{
              scrollTrigger:{
                      trigger:`#page6>h1>span`,
                      start:`top bottom`,
                      end:`bottom top`,
                      scroller:`#main`,
                      scrub:.5,
              },
              stagger:.2,
              color:`#fff`
      })


//======================================PAGE 7==========================

      function canvas2(){
        const canvas = document.querySelector("#page7>canvas");
      const context = canvas.getContext("2d");
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      
      window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
      });
      
      function files(index) {
      var data = `
      
      img/img2/1.webp
      img/img2/2.webp
      img/img2/3.webp
      img/img2/4.webp
      img/img2/5.webp
      img/img2/6.webp
      img/img2/7.webp
      img/img2/8.webp
      img/img2/9.webp
      img/img2/10.webp
      img/img2/11.webp
      img/img2/12.webp
      img/img2/13.webp
      img/img2/14.webp
      img/img2/15.webp
      img/img2/16.webp
      img/img2/17.webp
      img/img2/18.webp
      img/img2/19.webp
      img/img2/20.webp
      img/img2/21.webp
      img/img2/22.webp
      img/img2/23.webp
      img/img2/24.webp
      img/img2/25.webp
      img/img2/26.webp
      img/img2/27.webp
      img/img2/28.webp
      img/img2/29.webp
      img/img2/30.webp
      img/img2/31.webp
      img/img2/32.webp
      img/img2/33.webp
      img/img2/34.webp
      img/img2/35.webp
      img/img2/36.webp
      img/img2/37.webp
      img/img2/38.webp
      img/img2/39.webp
      img/img2/40.webp
      img/img2/41.webp
      img/img2/42.webp
      img/img2/43.webp
      img/img2/44.webp
      img/img2/45.webp
      img/img2/46.webp
      img/img2/47.webp
      img/img2/48.webp
      img/img2/49.webp
      img/img2/50.webp
      img/img2/51.webp
      img/img2/52.webp
      img/img2/53.webp
      img/img2/54.webp
      img/img2/55.webp
      img/img2/56.webp
      img/img2/57.webp
      img/img2/58.webp
      img/img2/59.webp
      img/img2/60.webp
      img/img2/61.webp
      img/img2/62.webp
      img/img2/63.webp
      img/img2/64.webp
      img/img2/65.webp
      img/img2/66.webp
      img/img2/67.webp
      img/img2/68.webp
      img/img2/70.webp
      img/img2/71.webp
      img/img2/72.webp
      img/img2/73.webp
      img/img2/74.webp
      img/img2/75.webp
      img/img2/76.webp
      img/img2/77.webp
      img/img2/78.webp
      img/img2/79.webp
      img/img2/80.webp
      img/img2/81.webp
      img/img2/82.webp
      img/img2/83.webp
      img/img2/84.webp
      img/img2/85.webp
      img/img2/86.webp
      img/img2/87.webp
      img/img2/88.webp
      img/img2/89.webp
      img/img2/90.webp
      img/img2/91.webp
      img/img2/92.webp
      img/img2/93.webp
      img/img2/94.webp
      img/img2/95.webp
      img/img2/96.webp
      img/img2/97.webp
      img/img2/98.webp
      img/img2/99.webp
      img/img2/100.webp
      img/img2/101.webp
      img/img2/102.webp
      img/img2/103.webp
      img/img2/104.webp
      img/img2/105.webp
      img/img2/106.webp
      img/img2/107.webp
      img/img2/108.webp
      img/img2/109.webp
      img/img2/110.webp
      img/img2/111.webp
      img/img2/112.webp
      img/img2/113.webp
      img/img2/114.webp
      img/img2/115.webp
      img/img2/116.webp
      img/img2/117.webp
      img/img2/118.webp
      img/img2/119.webp
      img/img2/120.webp
      img/img2/121.webp
      img/img2/122.webp
      img/img2/123.webp
      img/img2/124.webp
      img/img2/125.webp
      img/img2/126.webp
      img/img2/127.webp
      img/img2/128.webp
      img/img2/129.webp
      img/img2/130.webp
      img/img2/131.webp
      img/img2/132.webp
      img/img2/133.webp
      https://thisismagma.com/assets/home/lore/seq/134.webp?2
      https://thisismagma.com/assets/home/lore/seq/135.webp?2
      https://thisismagma.com/assets/home/lore/seq/136.webp?2
      
      `;
      return data.split("\n")[index];
      }
      
      const frameCount = 136;
      
      const images = [];
      const imageSeq = {
      frame: 1,
      };
      
      for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
      }
      
      gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: .5,
        trigger: `#page7`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
      },
      onUpdate: render,
      });
      
      images[1].onload = render;
      
      function render() {
      scaleImage(images[imageSeq.frame], context);
      }
      
      function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
      }
      ScrollTrigger.create({
      
      trigger: "#page7",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `250% top`,
      });
      }
      canvas2()




      gsap.to(".page7-cir",{
        scrollTrigger:{
          trigger:`.page7-cir`,
          start:`top center`,
          end:`bottom top`,
          scroller:`#main`,
          scrub:.5
        },
        scale:1.5
      })
      
      
      
      gsap.to(".page7-cir-inner",{
        scrollTrigger:{
          trigger:`.page7-cir-inner`,
          start:`top center`,
          end:`bottom top`,
          scroller:`#main`,
          scrub:.5
        },
        backgroundColor : `#0a3bce91`,
      })