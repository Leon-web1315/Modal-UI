let modal = document.getElementById("modal");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

//開く
openBtn.addEventListener("click",function(){
    modal.classList.remove("hidden");
});

//閉じる
closeBtn.addEventListener("click",function(){
    modal.classList.add("hidden");
});

//外クリックで閉じる
modal.addEventListener("click",function(e){
    if (e.target === modal){
        modal.classList.add("hidden");
    }
});
