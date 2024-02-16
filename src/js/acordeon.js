
const itemAcordeon = document.querySelectorAll(".acordeon");


itemAcordeon.forEach(itemAcordeon => {
    itemAcordeon.addEventListener('click', function(){

        
        fecharOutrosAcordeons();
        
        itemAcordeon.classList.add("mostrar");
        

    });
});



function fecharOutrosAcordeons(){
    const algumAcordeonEstaAberto = document.querySelector(".mostrar");

        if(algumAcordeonEstaAberto){
            algumAcordeonEstaAberto.classList.remove("mostrar");
        }
}