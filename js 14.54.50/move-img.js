{
    const doc=document;
    const pickup=doc.querySelector(".pickup");
    const mark=doc.querySelector(".mark");
    const close=doc.querySelector(".close");


    mark.addEventListener("click",function(){
        pickup.removeAttribute("id");
        pickup.setAttribute("id","imgAdd");
    });
    
    close.addEventListener("click",function(){
        pickup.removeAttribute("id");
        pickup.setAttribute("id","imgRemove")
    })

}