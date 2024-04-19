document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.getElementById('volunteer-button');

    // Step 4: Add event listener to the "Volunteer Now" button
    volunteerButton.addEventListener('click', function() {
        // Step 5: Prompt for user contact information
        const name = prompt("Please enter your name:");
        const email = prompt("Please enter your email:");
        const phone = prompt("Please enter your phone number:");

        // Validate the input (you can add more sophisticated validation)
        if (name && email && phone) {
            // Do something with the contact information (e.g., send it to a server)
            console.log("Contact information submitted:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Phone:", phone);
        } else {
            // Handle the case where the user cancels or provides incomplete information
            console.log("Contact information not provided.");
        }
    });

    // Step 6: Using the DOM, create another element of your choice to enhance the interactivity and dynamism of your Charity Profile Page.
    // For instance, you could display additional charity details when a user hovers over certain elements, or update the page with real-time data.
    const additionalInfoElement = document.getElementById('additional-info');

    additionalInfoElement.addEventListener('click', function() {
        additionalInfoElement.innerHTML
        displayAdditionalInfo('work in progress....');
    });
});

function displayAdditionalInfo() {
    // Here you can dynamically update the page with real-time data or display additional details
    alert('work in progress....');
}

// Define a function to make the HTTP GET request
function fetchDataFromGoogleMapsAPI() {
    // Construct the URL for the API request
    const apiKey = 'AIzaSyCzvMCLb5M-r6rR2AZkrUO6Tt-5Qj_NNDg'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.100444,79.083278&radius=RADIUS&type=TYPE&key=${apiKey}`;

    // Make the HTTP GET request using fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Once the data is fetched, display it on the website
            displayLocationData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Define a function to display the location data on the website
function displayLocationData(data) {
    // Process the data and integrate it into the website's layout
    // This could involve creating HTML elements dynamically or updating existing elements
    // For example:
    const locationList = document.getElementById('location-list');
    data.results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name;
        locationList.appendChild(listItem);
    });
}

// Call the function to fetch data from the Google Maps API
fetchDataFromGoogleMapsAPI();


function displayAdditionalInfo() {
    // Here you can dynamically update the page with real-time data or display additional details
    alert('work in progress....');
}
