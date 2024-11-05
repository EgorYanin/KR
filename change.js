const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[3].innerText==='Yanin'){

        document.getElementsByTagName('div')[3].innerText='Янин';
        document.getElementsByTagName('div')[4].innerText='Егор';
        document.getElementsByTagName('div')[5].innerText='Викторович';
    }
    else{

        if (document.getElementsByTagName('div')[3].innerText==='Янин'){

            document.getElementsByTagName('div')[3].innerText='Yanin';
            document.getElementsByTagName('div')[4].innerText='Egor';
            document.getElementsByTagName('div')[5].innerText='Viktorovich';


        }
    }
}

change.addEventListener("click", change_all)