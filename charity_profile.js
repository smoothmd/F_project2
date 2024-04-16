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

    additionalInfoElement.addEventListener('mouseover', function() {
        // Display additional charity details when hovered over
        displayAdditionalInfo();
    });
});

function displayAdditionalInfo() {
    // Here you can dynamically update the page with real-time data or display additional details
    alert('Displaying additional charity details...');
}


function displayAdditionalInfo() {
    // Here you can dynamically update the page with real-time data or display additional details
    alert('Displaying additional charity details...');
}
