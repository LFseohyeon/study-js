/* day06/jQuery/task01 */ /* js를 jQuery로 바꾸기 */

// globalThis.temp;
let $temp;

function confirm() {
    // const input = document.querySelector("input").value;
    const $input = $("#input").val();
    // const trs = document.querySelectorAll("tbody tr");
    const $trs = $("tbody tr")
    let check = false;

    // if(globalThis.temp) {
    //     globalThis.temp.style.background = "#fff";
    //     globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    // }
    if($temp){
        $temp.css("background", "#fff");
        $temp.children().first().text(tempText);
    }

    // trs.forEach(tr => {
    //     let td = tr.firstElementChild;
    //     if(td.innerHTML == input) {
    //         check = true;
    //         globalThis.temp = tr;
    //         tr.style.background = "#ef5350";
    //         td.innerHTML = "★" + td.innerHTML;
    //     }
    // });
    $trs.each(function(i, tr){
        let $td = $(tr).children().first();
        if($td.text() == $input){
            check = true;
            $temp = $(tr);
            tempText = $td.text();
            $(tr).css("background","#ef5350");
            $td.text("★" + $td.text());
        }
    })

    if(!check) {
        alert("다시 시도해주세요.");
    }
}