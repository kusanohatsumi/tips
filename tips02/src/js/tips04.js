const doc=document;
const btn=doc.querySelector(".search__btn");
const value=doc.querySelector(".search__value");
const box=doc.querySelector(".box");
console.log(value);

    value.addEventListener("click",()=>{
        value.classList.add("animation");
    });

    value.addEventListener("mouseup",()=>{
        value.classList.remove("animation");
        console.log("o");
    });
