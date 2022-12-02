{
    const doc=document;
    const stalker=doc.getElementById("stalker");
    // console.log(stalker);

    document.addEventListener("mousemove",(e)=>{
        stalker.style.transform="translate("+ e.clientX+"px," +  e.clientY+"px)";
    });




}