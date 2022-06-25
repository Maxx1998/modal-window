"use strict";
let modal=document.querySelector(".modal");
let overlay=document.querySelector(".overlay");
let BtnOpenModal=document.querySelectorAll(".show-modal");
let BtnCloseModal=document.querySelector(".close-modal");

for(let i=0;i<BtnOpenModal.length;i++)
{
    BtnOpenModal[i].addEventListener("click",function()
    {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
}

const closeModal=function()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");

}

BtnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);

document.addEventListener("keydown",function(e)
{
    if(e.keyCode===27)
    {
        closeModal();
    }
});