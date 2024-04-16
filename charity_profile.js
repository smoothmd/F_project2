
// Add event listener to the "Volunteer Now" button
document.getElementById("volunteerBtn").addEventListener("click", function() {
    // Prompt for user contact information
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
// Create another element to enhance interactivity
const additionalInfo = document.createElement("p");
additionalInfo.textContent = "Hover over this text to see additional charity details.";
document.getElementById("volunteerBtn").addEventListener("click", function() {

}); 
document.body.appendChild(additionalInfo);
