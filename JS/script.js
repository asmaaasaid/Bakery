let navSection = document.getElementById('nav');
let arrowTop =document.getElementById('arrow')
let page = document.getElementById('body')
window.addEventListener('scroll' , ()=>{
    let scrollEl = document.documentElement.scrollTop;
    //console.log(scrollEl)
    if(scrollEl>100){
        navSection.style.backgroundColor='#8E7754';
        navSection.style.padding='20px';
        navSection.style.transition='all 0.7s ease-in'
        
    }
    else
    {
        navSection.style.backgroundColor='transparent';
    }
})
 
arrowTop.addEventListener('click' , ()=>{
       window.scrollTo(0,30)
       })
    
