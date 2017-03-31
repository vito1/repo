
var elements = document.getElementsByClassName('SignUpButton')[0];
var form = document.getElementsByClassName('Form')[0];
elements.addEventListener("click", function() {
	console.log("click");
	form.animate([
  // keyframes
  { margin-left: '40px' }, 
  { margin-left: '20px' }
], 2000);
});
