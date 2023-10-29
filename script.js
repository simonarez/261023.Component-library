const overviewButtons = document.querySelectorAll(".overview__button");
const components = document.querySelectorAll(".component");

overviewButtons.forEach((overviewButton) => {
  const toggleComponentClass = (event) => {
    const button = event.currentTarget;
    const componentShow = button.dataset.componentShow;

    components.forEach((component) => {
      component.classList.remove("component--visible");

      const componentName = component.dataset.componentName;

      if (componentShow === componentName) {
        component.classList.add("component--visible");
      } else {
        component.classList.remove("component--visible");
      }
    });

    components.forEach((button) => {
      button.classList.remove("overview__button--active");

      const componentName = button.dataset.componentName;
      if (componentShow === componentName) {
        button.classList.add("overview__button--active");
      } else {
        button.classList.remove("overview__button--active");
      }
    });
  };

  overviewButton.addEventListener("click", toggleComponentClass);
});
