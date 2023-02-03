// Lexical Scope

// An inner function nested inside of some parent function has access to the scope or to the variables to find in the scope of that outer function.
// May search the variable in the parent of the parent function and so on.
// A nested inner function has access to the same things as the parent function or grandparent or however many levels up.
// The contrary doesn't apply, the parent doesn't have access to the things of the inner function.

function bankRobbery() {
  const heroes = [
    "Sakamoto Ryoma",
    "William Carpenter",
    "Aleksandr Akimov",
    "Audie Murphy",
    "Noguchi Hideyo",
    "Minamoto no Yoshitsune",
    "Chikamori Sakon",
    "Ninomiya Sontoku"
  ];
  function cryForHelp() {
    let color = "purple"; // inner function(because it is inner) have access to this variable, but bankRobbery doesn't.
    function inner() {
      for (let hero of heroes) {
        // heroes does not exist in this function, but does exists in the PARENT function
        console.log("PLEASE HELP US, ${hero.toUpperCase()}");
      }
    }
    inner();
  }
  cryForHelp();
}
