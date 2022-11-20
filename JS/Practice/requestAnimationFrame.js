// https://css-tricks.com/using-requestanimationframe 

// Why better?
// The browser can optimize it, so animations will be smoother
// Animations in inactive tabs will stop, allowing the CPU to chill
// More battery-friendly

function repeatOften() {
    // Do whatever
    requestAnimationFrame(repeatOften);
  }
  requestAnimationFrame(repeatOften);