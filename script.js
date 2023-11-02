
const overviewButtons = document.querySelectorAll(".overview__button");
const components = document.querySelectorAll(".component");

overviewButtons.forEach((button) => {
	button.addEventListener("click", displayComponent);
	button.addEventListener("click", overviewButtonsActive)
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

function overviewButtonsActive(event) {
	const clickedButton = event.currentTarget;
	
	overviewButtons.forEach((button) => {
	  button.classList.remove("overview__button--active");
	});
  
	clickedButton.classList.add("overview__button--active");
  }


// function displayComponent (event){
// 	const clickedButton = event.currentTarget;

// 	components.forEach((component) => {
// 		component.classList.remove("component--visible");
// 	});

// 	clickedButton.classList.add("component--visible");

// };