 
            // Get the input field
            const inputField = document.getElementById('fname');

            // Add an event listener for the 'blur' event
            inputField.addEventListener('blur', ()=> {
                // Convert the content of the input field to uppercase
                inputField.value = inputField.value.toUpperCase();
            });
        