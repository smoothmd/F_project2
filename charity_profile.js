
// Add event listener to the "Volunteer Now" button
document.getElementById("volunteerBtn").addEventListener("click", function() {
    // Prompt a form for users to input their contact information
    // You can create the form dynamically using JavaScript or toggle its visibility
}); 
// Create another element to enhance interactivity
const additionalInfo = document.createElement("p");
additionalInfo.textContent = "Hover over this text to see additional charity details.";
additionalInfo.addEventListener("mouseover", function() {
    // Display additional charity details when the user hovers over this element
    // You can update the page with real-time data here
});
document.body.appendChild(additionalInfo);
