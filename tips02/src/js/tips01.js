{
    const doc=document;
    const box=doc.querySelector(".box");
    const item=doc.querySelectorAll("li");

    // console.log(item);

    let time=.7;
    let value=time;

    window.addEventListener("load",()=>{
        item.forEach((e,i) => {
            console.log(item[i]);
            item[i].style.animationDelay=value + "s";
            value=value+time;
        });
    })
}