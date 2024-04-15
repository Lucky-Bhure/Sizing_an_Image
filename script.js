let alertEl = document.getElementById("alert");
let imgidEl = document.getElementById("imgid");
let sizevalueEl = document.getElementById("wvalue");


function minus(){
    let sizevalue = parseInt(sizevalueEl.textContent);
    if(sizevalue > 100){
        let newsizevalue = sizevalue - 10;
        sizevalueEl.textContent = newsizevalue;
        imgidEl.style.height = newsizevalue+"px";
        imgidEl.style.width = newsizevalue+"px"
        alertEl.textContent = "";
    } else{
        alertEl.textContent = "Too small. Increase the size of the Image.";
    }
}

function plus(){
    let sizevalue = parseInt(sizevalueEl.textContent);
    if(sizevalue < 320){
        let newsizevalue = sizevalue + 10;
        sizevalueEl.textContent = newsizevalue;
        imgidEl.style.height = newsizevalue+"px";
        imgidEl.style.width = newsizevalue+"px";
        alertEl.textContent = "";
    } else {
        alertEl.textContent = "Too big. Decrease the size of the Image.";
    }
}