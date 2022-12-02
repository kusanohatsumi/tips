{
    const doc=document;
    const header=doc.getElementById("header");
    console.dir(header);
    console.log(header.clientHeight);


    window.addEventListener("scroll",()=>{
        const scroll=window.scrollY;
        // console.log(scroll);
        if (scroll>=header.clientHeight) {
            console.log(true);
            header.style.height=60+"px";
            header.style.backgroundColor="pink";
        }else{
            header.style.height=100+"px";
            header.style.backgroundColor="plum";
        }

    });
}