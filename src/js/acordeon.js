
const itemAcordeon = document.querySelectorAll(".acordeon");


itemAcordeon.forEach(itemAcordeon => {
    itemAcordeon.addEventListener('click', function(){
        const acordeonEstaAberto = document.querySelector(".mostrar");

        if(acordeonEstaAberto){
            itemAcordeon.classList.remove("mostrar");
        }else{
            itemAcordeon.classList.add("mostrar");
        }
    });
});



