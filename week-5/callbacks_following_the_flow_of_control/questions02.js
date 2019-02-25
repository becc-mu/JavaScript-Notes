

console.log(1) // program starts

// click callback is set up to run when clicks happen
$(document).click(function(clickEvent) {
  console.log(3) // sometime later, a click has happened

  console.log("The click event:", clickEvent);

  console.log(4) // callback finishes running
});

console.log(2) // after callback set up, program stops work (for now)
