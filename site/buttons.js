// $('.simon-button.green').on('click', function() {
//   alert('You clicked the green button');
// });

// $('.simon-button.blue').on('click', function() {
//   alert('You clicked the blue button');
// });

// $('.simon-button.yellow').on('click', function() {
//   alert('You clicked the yellow button');
// });

// $('.simon-button.red').on('click', function() {
//   alert('You clicked the red button');
// });
let userPattern = [];
$('.simon-button.green').on('click', function() {
  userPattern.push('green');
  alert(userPattern);
});

$('.simon-button.blue').on('click', function() {
  userPattern.push('blue');
  alert(userPattern)});

$('.simon-button.yellow').on('click', function() {
  userPattern.push('yellow');
  alert(userPattern)});

$('.simon-button.red').on('click', function() {
  userPattern.push('red');
  alert(userPattern)});

  module.exports = userPattern;
