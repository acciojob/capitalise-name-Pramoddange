//your JS code here. If required.
let input=document.querySelector('fname');
input.addEventListener("blur",()=>{
	 input.value = input.value.toUpperCase();
})