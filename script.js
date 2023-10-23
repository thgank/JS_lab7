document.addEventListener("DOMContentLoaded", function() {
    // Populate select options using DOM
    const tripSelect = document.getElementById('tripSelect');
    const typeSelect = document.getElementById('typeSelect');
    const tshirtSizeSelect = document.getElementById('tshirtSizeSelect');
  
    const tripOptions = [
      { value: 'stageRace', text: 'Stage Race' },
      { value: 'evChallenge', text: 'Mt. Everest Challenge Marathon (4 day trip)' },
      { value: 'bikeRally', text: 'Mt. Everest Bike Rally' },
    ];
  
    tripOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      tripSelect.appendChild(optionElement);
    });
  
    const typeOptions = [
      { value: 'runner', text: 'Runner' },
      { value: 'walker', text: 'Walker' },
      { value: 'cyclist', text: 'Cyclist' },
    ];
  
    typeOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      typeSelect.appendChild(optionElement);
    });
  
    const tshirtSizeOptions = ['Small', 'Medium', 'Large', 'X-Large'];
  
    tshirtSizeOptions.forEach((size) => {
      const optionElement = document.createElement('option');
      optionElement.value = size.toLowerCase();
      optionElement.textContent = size;
      tshirtSizeSelect.appendChild(optionElement);
    });
  
    // Function to handle form submission
    const submitForm = () => {
      const formData = new FormData(document.getElementById('raceRegistrationForm'));
  
      // You can access form data using formData and perform further processing here
      // For demonstration, we'll log the form data to the console
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    };
  
    // Change the button style when clicked
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', () => {
      registerButton.style.backgroundColor = 'green';
      registerButton.style.color = 'white';
    });
  });
  