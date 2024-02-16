
const itemAcordeon = document.querySelectorAll(".acordeon");


itemAcordeon.forEach(itemAcordeon => {
    itemAcordeon.addEventListener('click', function(){
        const acordeonEstaAberto = document.querySelector(".mostrar");

        if(acordeonEstaAberto){
            acordeonEstaAberto.classList.remove("mostrar");
        }
        
        itemAcordeon.classList.add("mostrar");

    });
});



