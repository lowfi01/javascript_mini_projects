let hold;
const result = document.querySelectorAll('.circle');
/* eslint-disable no-loop-func */
for (let i = 0; i < result.length; i++) {
  result[i].addEventListener('click', function clickedCircle() {
    // check to see if we have hidden an element
    if (hold !== undefined) {
      hold.classList.remove('toggleClass');
    }
    // hide element on click
    this.classList.add('toggleClass');
    // store selected element to hold
    hold = this;
  });
}
/* eslint-enable no-loop-func */

