{
    const doc=document;
    const spla=doc.querySelector("#splash");
    const txt=doc.querySelector('.typing-text');


    window.onload=function(event){
        setTimeout(function(){
            txt.style.display="none";
        },6500);

        setTimeout(function(){
            spla.style.display="none";
        },7500);
    }

}
