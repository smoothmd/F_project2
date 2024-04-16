// Step 1: Create a new JavaScript file named “charity_profile.js”.

// Step 2: Link this JavaScript file to your charity_profile.html page using the <script> tag.

// Step 3: Edit your "Volunteer Now" button on the Charity Profile Page. 
// Utilize JavaScript to add an event listener to the "Volunteer Now" button.

// Step 4: When clicked, this button should prompt a form for users to input their contact information.
document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.getElementById('volunteer-button');

    volunteerButton.addEventListener('click', function() {
        // Display a form for users to input their contact information
        displayVolunteerForm();
    });
});

function displayVolunteerForm() {
    // Here you can dynamically create the form using JavaScript
    // or show/hide a pre-existing form in your HTML
    alert('Displaying volunteer form...');
}

// Step 5: Using the DOM, create another element of your choice to enhance the interactivity and dynamism of your Charity Profile Page.
// For instance, you could display additional charity details when a user hovers over certain elements, or update the page with real-time data.
document.addEventListener('DOMContentLoaded', function() {
    const additionalInfoElement = document.getElementById('additional-info');

    additionalInfoElement.addEventListener('mouseover', function() {
        // Display additional charity details when hovered over
        displayAdditionalInfo();
    });
});

function displayAdditionalInfo() {
    // Here you can dynamically update the page with real-time data or display additional details
    alert('Displaying additional charity details...');
}
