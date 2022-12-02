const doc=document;
const item=doc.querySelectorAll(".item");

// console.dir(window);

window.addEventListener("scroll",()=>{

    // 画面トップの位置
    const scroll=window.scrollY;
    // console.log(scroll);
    item.forEach((e,i) => {
        // 画面トップからの要素の位置
        let itemOffsetTop=item[i].offsetTop;
        // console.log(itemOffsetTop);
        // 画面の高さ
        let windowHeight=window.innerHeight;
        // console.log(windowHeight);
        

        // スクロール（画面トップの位置）が 251　を超えたら 

                                // 発火させたい位置
                                // windowHeight+200
        if (scroll>itemOffsetTop - windowHeight + 200) {
                         // 840  -   789  =  51 + 200 = 251

            item[i].style.opacity=1;
        }
    
    });
    
});
