



/* Menu show PROFILE */

var profileBox = document.querySelector('#profileBox');
let profileBtn = document.querySelector('#profileBtn');
var stat='close';

profileBtn.addEventListener('click', function(){
    if(stat === 'close'){
        profileBox.style.display='flex';
        stat='open';
        console.log(status);
    }
    else{
        profileBox.style.display='none';
        stat='close';
        console.log(status);
    }
})

    

/* cart Menu hidden */

let cartBox = document.querySelector('#cartBox');
        let cartBtn = document.querySelector('#cartBtn');
        let menuCloseBtn = document.querySelector('#menuCloseBtn');
        
        var menuStats='close';
        cartBtn.addEventListener('click', function(){
            
            if(menuStats === 'close'){
                cartBox.style.right='0';
                menuStats='open';
                console.log(menuStats);
            }else{
                cartBox.style.right='-200px';
                menuStats= 'close';
                console.log(menuStats);
            }
           
        })
        menuCloseBtn.addEventListener('click', function(){
            cartBox.style.right='-200px';
        })

/* Mobile Menu hidden */

        let MobNavBtn = document.querySelector('#MobNavBtn');
        let MobNav = document.querySelector('.MobNav');
        MobStats='close';
        MobNavBtn.addEventListener('click',function(){
            if (MobStats === 'close'){
                MobNav.style.left='0';
                MobStats='open';

            }else{
                MobNav.style.left='-300px';
                MobStats='close';
            }
        })







  