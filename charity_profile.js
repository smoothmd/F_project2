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
 // Initialize Google Maps with multiple charity locations
    initMap();
});

const locations = [
    { lat: 38.6270, lng: -90.1994, name: "Christian Friends of New Americans", info: "Supporting immigrant and refugee integration." },
    { lat: 38.6297, lng: -90.1989, name: "YMCA Literacy Programs", info: "Helping improve literacy among children and teens." },
    // Add more locations as needed
];

// Function to initialize Google Maps and add markers
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,  // Adjust the zoom level to encompass all markers
        center: { lat: 38.6270, lng: -90.1994 }  // Center of the map
    });

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.name}</h3><p>${location.info}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// Error handling for Google Maps script loading failure
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'SCRIPT' && e.target.src.includes('googleapis')) {
        console.error('Failed to load Google Maps script!');
        document.getElementById('map').innerHTML = 'Failed to load the map. Please try again later.';
    }
});
function displayAdditionalInfo() {
    // Here you can dynamically update the page with real-time data or display additional details
    alert('work in progress....');
}
