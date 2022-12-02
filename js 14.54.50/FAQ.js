
    {
    const doc=document;
    const faq=doc.querySelectorAll(".index__faq");
    const faqA=doc.querySelectorAll(".index__faq--answer");

    for (let i = 0; i < faq.length; i++) {
        let faqCount = 0;
        let faqHeight = faq[i].clientHeight; // i番目のQ+Aの高さ
        let answerHeight = faqA[i].clientHeight; // i番目のAの高さ

        faq[i].style.height = faqHeight - answerHeight+"px"; //回答の表示を消す
        faq[i].addEventListener("click",()=>{ //i番目のQ+Aをクリックした時
            faqCount++;//偶数か奇数のカウント
            if(faqCount%2!==0){//奇数の時
                faq[i].style.height = faqHeight +"px";//Q+Aまとめての高さに戻す
            }else{//偶数の時
                faq[i].style.height = faqHeight - answerHeight+`px`;// （Q+A）- Aの高さに再度戻す
            }
        });    
    }




}


