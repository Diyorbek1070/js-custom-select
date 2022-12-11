const listEl=document.querySelector(".list");
const mainEl=document.querySelector(".main-flag");

mainEl.addEventListener('click', ()=>{
    if(listEl.style.display=="block"){
        listEl.style.display="none"
    }
    else{
        listEl.style.display="block"
    }
})

const flagEl1=document.querySelector(".list__flag1");
const flagEl2=document.querySelector(".list__flag2");
const flagEl3=document.querySelector(".list__flag3");

flagEl1.addEventListener("click",()=>{
    document.querySelector(".block").style.display="block";
    document.querySelector(".heading-block").style.display="block";
    document.querySelector(".main-flag__flag").style.display="none";
    document.querySelector(".main-flag__heading").style.display="none";
    document.querySelector(".block1").style.display="none";
    document.querySelector(".heading-block1").style="none";
})

flagEl2.addEventListener("click",()=>{
    document.querySelector(".main-flag__flag").style.display="block";
    document.querySelector(".main-flag__heading").style.display="block";
    document.querySelector(".block").style.display="none";
    document.querySelector(".heading-block").style.display="none";
    document.querySelector(".block1").style.display="none";
    document.querySelector(".heading-block1").style="none";
})

flagEl3.addEventListener("click",()=>{
    document.querySelector(".block1").style.display="block";
    document.querySelector(".heading-block1").style.display="block";
    document.querySelector(".main-flag__flag").style.display="none";
    document.querySelector(".main-flag__heading").style.display="none";
    document.querySelector(".block").style.display="none";
    document.querySelector(".heading-block").style.display="none";
})




