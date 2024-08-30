/*
 // --------- Version 1 --------- \\
 Initial version of the script.

 // --------- Version 2 --------- \\
 Changes made:

 Added:
 - Control over whether the shadow offset applies to the x-axis, y-axis, or both.
 - Ability to customize the hover and active offset factors for finer control.

 Removed:
 - NONE

*/

/* 
  NOTE: The shadow length MUST BE the same across all three states.
  NOTE: If you add `transform: translate(x, y)` to the element with the shadow class (e.g., `.btn {transform: translate(-50%, 0);}`), it will affect the shadow positioning. 
  To fix this, include the transform values in the `hover` and `active` states as follows:

  .flat-shadow:hover {
    box-shadow: ...;
    transform: translate(-50%, 0) translate(-1.6px, -1.6px);
  }
  .flat-shadow:active {
    box-shadow: ...;
    transform: translate(-50%, 0) translate(0, 0);
  }

  TIP: Adjust the offset values for each state to achieve different effects. You may need to calculate the values multiple times to get the desired results.
*/

`use strict`;

let shadowLength = 10;
let outlineWidth = 4;
let hoverOffsetFactor = 1.5;
let activeOffsetFactor = 0.6;
let shadowOffset_X = 0.7;
let shadowOffset_Y = 0.7;
let hoverOffset_X = shadowOffset_X ? shadowOffset_X * hoverOffsetFactor : 0;
let hoverOffset_Y = shadowOffset_Y ? shadowOffset_Y * hoverOffsetFactor : 0;
let activeOffset_X = shadowOffset_X ? shadowOffset_X * activeOffsetFactor : 0;
let activeOffset_Y = shadowOffset_Y ? shadowOffset_Y * activeOffsetFactor : 0;
let unit = 'px';
let shadowColor = '#023047';
let outlineColor = '#fefae0';

let hoverEasing = `
  transition-timing-function: cubic-bezier(0.51, 1.95, 0.5, 0.6);
`;
let activeEasing = `
  transition: 0.168s cubic-bezier(0.2, 0, 0.4, 1);
`;

let generateShadow = (offsetX, offsetY) => {
  let shadowValueArr = [];
  let outlineValueArr = [];

  for (let i = 1; i <= shadowLength; i++) {
    let offsetValue_X = (offsetX * i).toFixed(1) + unit;
    let offsetValue_Y = (offsetY * i).toFixed(1) + unit;

    shadowValueArr.push(`${offsetValue_X} ${offsetValue_Y} 0 ${shadowColor}`);
    outlineValueArr.push(
      `${offsetValue_X} ${offsetValue_Y} 0 ${outlineWidth}${unit} ${outlineColor}`
    );
  }
  return `${shadowValueArr.join(',')}, ${outlineValueArr.join(',')} `;
};

let shadowOutput = generateShadow(shadowOffset_X, shadowOffset_Y);
let shadowHoverOutput = generateShadow(hoverOffset_X, hoverOffset_Y);
let shadowActiveOutput = generateShadow(activeOffset_X, activeOffset_Y);

console.log(
  `.flat-shadow{box-shadow: ${shadowOutput};transition: box-shadow, transform;transition-duration: 0.2681s;${hoverEasing}}`
);

console.log(
  `.flat-shadow:hover{box-shadow: ${shadowHoverOutput};transform: translate(-1.6px, -1.6px);}`
);

console.log(
  `.flat-shadow:active{box-shadow: ${shadowActiveOutput};transform: translate(0, 0);${activeEasing}}`
);
