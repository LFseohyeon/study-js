var tempTd;
var tempText;

function confirm() {
    var input = document.getElementById("input").value;
    
    var datas = document.getElementsByClassName("data"); 
    var check = false;
    
    if(tempTd != undefined ) {
        tempTd.parentElement.style.background = "#fff";
        tempTd.innerHTML = tempText;
    }
    for(let i = 0; i < datas.length; i++ ){
        var td = datas[i].children[0]; 	
        
        if (input == td.innerHTML){
            
            tempTd = td;
            tempText = td.innerHTML;
            
            td.parentElement.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
            check = true;
            break;
        }
    }
    if(!check) {
        alert('없는 내용입니다. 다시 시도해주세요.');
    }
}
// ---------------------강사님 코드----------------------------------
// globalThis.temp;

// function confirm() {
//     const input = document.querySelector("input").value;
//     const trs = document.querySelectorAll("tbody tr");
//     let check = false;

//     if(globalThis.temp) {
//         globalThis.temp.style.background = "#fff";
//         globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
//     }

//     trs.forEach(tr => {
//         let td = tr.firstElementChild;
//         if(td.innerHTML == input) {
//             check = true;
//             globalThis.temp = tr;
//             tr.style.background = "#ef5350";
//             td.innerHTML = "★" + td.innerHTML;
//         }
//     });

//     if(!check) {
//         alert("다시 시도해주세요.");
//     }
// }