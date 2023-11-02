
const overviewButtons = document.querySelectorAll(".overview__button");
const components = document.querySelectorAll(".component");

overviewButtons.forEach((button) => {
	button.addEventListener("click", displayComponent);
  });

  
function displayComponent (event){

	const button = event.currentTarget;

	components.forEach((component) => {
		component.classList.remove("component--visible");
        const componentName = component.dataset.componentName;
		const componentToDisplay = button.dataset.componentShow;


		if(componentToDisplay === componentName){
		   component.classList.add("component--visible");
		}

	}
)};

