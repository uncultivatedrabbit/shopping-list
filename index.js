// function that accounts for submitting by clicking the 'Add item" button or by pressing 'Enter'
function handleSubmit() {
  $("#js-shopping-list-form").submit(e => {
    // stop the form from refreshing the page
    e.preventDefault();
    // get the user input from the form
    let input = $("#shopping-list-entry").val();
    // verifies the user has actually put something in the shopping list box
    if (input.length < 1) {
      alert("Input field can't be empty!");
      return -1;
    }
    // if there is something in the input box, adds new item to DOM shopping list
    $(".shopping-list").append(`
        <li>
          <span class="shopping-item">${input}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
  `);
    // clears the shopping list input value so the user can put in a new item
    $("#shopping-list-entry").val("");
  });
}

// function that uses event deligation to put an event listener on the shopping list
function toggleClass() {
  $(".shopping-list").on("click", ".shopping-item-toggle", function(e) {
    // uses this instead of e.currentTarget then traverses the DOM tree to toggle class on specific shopping item
    $(this)
      .closest(".shopping-item-controls")
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
}

// function that removes an item from the shopping list
function removeItem() {
  $(".shopping-list").on("click", ".shopping-item-delete", function(e) {
    $(this)
      .closest("li")
      .remove();
  });
}

//function that handles DOM load
function handleRender() {
  handleSubmit();
  removeItem();
  toggleClass();
}

$(handleRender);
