// store the rating
let rating = 0;
let currentlyClicked;

function updateRating(newRating) {
  rating = newRating;

  if (currentlyClicked !== undefined) {
    currentlyClicked.classList.remove("clicked");
  }

  controlDialog("close");
  currentlyClicked = document.getElementById(newRating.toString());
  currentlyClicked.classList.add("clicked");
}

function controlDialog(command) {
  const dialog = document.getElementById("myDialog");

  if (command === "close") {
    return dialog.close();
  }

  return dialog.show();
}

function submit() {
  if (rating === 0) {
    return controlDialog("show");
  }

  let mainElements = document.getElementsByTagName("main");
  const main = mainElements[0];

  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.alignItems = "center";
  main.style.justifyContent = "center";
  main.style.textAlign = "center";

  main.innerHTML = `<img style="margin-top: 12px;" src="./assets/images/illustration-thank-you.svg" alt="thankyou" />
  <div class="rating-summary">You selected ${rating} out of 5</div>
  <h1 style="margin-bottom: 0px">Thank you!</h1>
  <p>
    We appreciate you taking the time to give a rating. If you ever need
    more support, don’t hesitate to get in touch!
  </p>`;
}
