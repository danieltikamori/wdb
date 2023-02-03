let input = prompt("what would you like to do?");
const todos = ["Start", "Just do it"];
while (input !== "quit" && input !== "q") {
  // We want to this loop to run, so use && not ||(or).
  if (input === "list") {
    console.log("*********************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*********************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete" || input === "del") {
    // Whether the input is delete or del...
    const index = parseInt(prompt("Ok, enter an index to delete:")); // Converts the input into an integer
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1); // Splice the value
      //deleted is an array (todos is an array)
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("It is an unknown index");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("Ok, quit the App!");
