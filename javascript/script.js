//when page load then this perform

window.addEventListener("load", () => {
  // to get all the elements by id
  const form = document.querySelector("#new-task-form");
  //   console.log(form);
  const input = document.querySelector("#new-task-input");
  //   console.log(input);
  const list_el = document.querySelector("#tasks");
  //   console.log(list_el);

  // for get value from input
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("hello", e.preventDefault());

    const task = input.value;
    // console.log(task);

    //check if value is not given then send alert otherwise add task
    if (!task) {
      alert("Please Fill out the task");
      return;
    }

    //Create div for Element in html side
    const task_el = document.createElement("div");

    //The classList property returns the CSS classnames of an element.
    task_el.classList.add("task");

    // create div for content
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    //append the content div in element div
    task_el.appendChild(task_content_el);

    // create element for inputbox
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_content_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);

    // Create div for buttons
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");
    console.log(task_actions_el);

    // Create Edit btn
    const task_edit_el = document.createElement("button");
    console.log(task_edit_el);

    task_edit_el.classList.add("edit");

    //To display edit  text
    task_edit_el.innerHTML = "Edit";

    //create delete btn
    const task_delete_el = document.createElement("button");
    console.log(task_delete_el);

    task_delete_el.classList.add("delete");

    //To display delete text
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_el.appendChild(task_actions_el);
    // append the elment div in taksks
    list_el.appendChild(task_el);

    // After add task then input value clear
    input.value = "";

    //To edit text
    task_edit_el.addEventListener("click", (e) => {
      console.log(task_edit_el.innerText.toLowerCase());
      console.log(e);
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    // To delete button
    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });
  });
});
