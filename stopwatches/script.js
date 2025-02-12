const reset = document.getElementsByClassName("reset")[0];
const start = document.getElementsByClassName("start")[0];
const pause = document.getElementsByClassName("pause")[0];

let mins_doc = document.querySelectorAll(".my_mins ")[0];
let secs_doc = document.querySelectorAll(".my_secs ")[0];
let centisecs_doc = document.querySelectorAll(".my_centisecs")[0];
console.log(centisecs_doc.innerText);
let mins = 0;
let secs = 0;
let centisecs = 0;

start.addEventListener("click",()=>{
    myInterval = setInterval(()=>{
        console.log(secs);
        centisecs++;

        if(centisecs == 99){
            centisecs = 0;
            secs++;
        }

        if(secs == 59){
            mins++;
            secs = 0;
        }

        if(mins == 99){
            clearInterval(myInterval);
            myInterval = null;
        }
        //aby se ukazovalo 01 misto 1
        centisecs_doc.innerText = centisecs.toString().padStart(2, '0');
        secs_doc.innerText = secs.toString().padStart(2, '0');
        mins_doc.innerText = mins.toString().padStart(2, '0');


    },10)
        
        
    }

)

pause.addEventListener("click",()=> {
    clearInterval(myInterval);
    myInterval = null;
})


reset.addEventListener("click",()=>{
    clearInterval(myInterval);
    myInterval = null;
    mins = 0;
    secs = 0;
    centisecs = 0;
    centisecs_doc.innerText = centisecs.toString().padStart(2, '0');
    secs_doc.innerText = secs.toString().padStart(2, '0');
    mins_doc.innerText = mins.toString().padStart(2, '0');
})


