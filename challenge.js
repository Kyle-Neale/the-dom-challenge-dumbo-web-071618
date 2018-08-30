document.addEventListener("DOMContentLoaded", () => {
  let counter = document.querySelector("#counter");
  let isDisabled = false;

// Timer Functionality
  (() => {
    const timer = () => {
      if (!isDisabled) {
        return ++counter.innerText;
      }
    }
    setInterval(timer, 1000);
  })();

// Increment/Decrement Timer Functionality
  (() => {
    const minusButton = document.getElementById('-');
    minusButton.addEventListener("click", () => {
      if (!isDisabled) {
        return --counter.innerText;
      }
    })
  })();

  (() => {
    const plusButton = document.getElementById('+');
    plusButton.addEventListener("click", () => {
      if (!isDisabled) {
        return ++counter.innerText;
      }
    })
  })();

// Heart Button Functionality
  const likeButton = document.getElementById('<3');
  let counterObj = {};
  let ul = document.querySelector('ul.likes');

  function display(obj) {
    ul.innerHTML = "";
    for (const element in obj) {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(`${element} has been liked ${counterObj[element]} times`));
      ul.appendChild(li);
    }
    return
  }

  likeButton.addEventListener("click", () => {
    if (!isDisabled) {
      if (counterObj[counter.innerText] ) {
        counterObj[counter.innerText]++;
      } else {
        counterObj[counter.innerText] = 1;
      }
        return display(counterObj);
    }
  })



// Pause Button Functionality
  const pauseButton = document.querySelector('#pause');

  pauseButton.addEventListener("click", () => {
    if (pauseButton.innerText === "pause") {
      pauseButton.innerText = "resume";
      isDisabled = true;
    } else {
      pauseButton.innerText = "pause";
      isDisabled = false;
    }
  })

//Comment & Submit Button Functionality
  let commentForm = document.querySelector("#comment-form");
  let commentSection = document.querySelector("#list");

  commentForm.addEventListener("submit", () => {
    event.preventDefault();
    let comment = document.querySelector("#comment");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${comment.value}`))
    // same as writing: li.innerText = `${comment.value}`;
    commentSection.appendChild(li);
    return
  })
})
