const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

function validate()
{
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  
  if(username=="admin" && password=="admin1"){
    swal({
      title: "Login Successful!.",
      text: "Welcome to the Admin Pane!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false
      //button: "Try again",
    }).then(function() {
      window.location = "dashboard.html";
  });
        //return false;
}
  else if(username=="")
  {
    swal({
      title: "Enter a username",
      text: "Please enter the right credentials!",
      icon: "error",
      timer: 2000,
      showConfirmButton: false
      //button: "Try again",
    })
  }
  else if(password=="")
  {
    swal({
      title: "Enter a password",
      text: "Please enter the right credentials!",
      icon: "error",
      timer: 2000,
      showConfirmButton: false
      //button: "Try again",
    })
  }

  else
  {
        swal({
          title: "Login Failed.",
          text: "Please check your username and password.",
          icon: "error",
          timer: 2000,
          showConfirmButton: false
          //button: "Try again",
        }).then(function() {
          window.location = "index.html";
      });
  }

}
