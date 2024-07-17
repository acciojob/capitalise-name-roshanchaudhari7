//your JS code here. If required.
const inputText = document.getElementById('fname');

inputText.addEventListener('blur', function() {
  this.value = this.value.toUpperCase();
});