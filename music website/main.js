


//--------------------------------------prograse bar------------------------
let prograseBar = document.querySelector(".prograse_line");
window.addEventListener('scroll', function(){
    let pageScrolled = document.documentElement.scrollTop;
    let height = this.document.documentElement.scrollHeight-
      document.documentElement.clientHeight;
    prograseBar.style.width = `${(pageScrolled / height)* 100}%`;
})
