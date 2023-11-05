const mySwitch = document.querySelector(".switch--board");
const slider = document.querySelector(".switch--slider");



function updateSwitchState(mySwitch){

    const currentState = mySwitch.dataset.state;

    if( currentState === "off"){

        mySwitch.dataset.state = "on";
        slider.style.transform = "translateX(2.2rem)";
    }else{
        mySwitch.dataset.state = "off";
        slider.style.transform = "translateX(0rem)";
    }
};

const switchClicked = (toggle) => {
    toggle.classList.toggle("switch--board__clicked");
}

function handleSwitchClick(event){
    const activate = event.currentTarget;
    updateSwitchState(activate);
    switchClicked(activate)

}


mySwitch.addEventListener("click", handleSwitchClick, )
