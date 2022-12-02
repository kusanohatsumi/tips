{
    const doc=document;
    const click=doc.querySelector(".click");
    const mordal=doc.querySelector(".mordal");
    const close=doc.querySelector(".close");
    // console.dir(click);

    click.addEventListener("click",()=>{
        mordal.style.opacity=1;
        mordal.style.zIndex=1;

        click.style.opacity=0;
    });
    close.addEventListener("click",()=>{
        mordal.style.opacity=0;
        mordal.style.zIndex=-1;

        click.style.opacity=1;
        click.style.transitionDuration=1+"s";
    });
}