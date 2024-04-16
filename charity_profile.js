
// Add event listener to the "Volunteer Now" button
document.getElementById("volunteerBtn").addEventListener("click", function() {
    // Prompt a form for users to input their contact information
    // You can create the form dynamically using JavaScript or toggle its visibility
}); 
// Create another element to enhance interactivity
const additionalInfo = document.createElement("p");
additionalInfo.textContent = "Hover over this text to see additional charity details.";
additionalInfo.addEventListener("mouseover", function() {
    <form>
       <label for="fname">Name:</label><br>
       <input type="text" id="fname" name="fname"><br>
       <h3></h3>
       <label for="lname">Email:</label><br>
       <input type="text" id="lname" name="lname"> 
       <h3></h3>
       <label for="fname">Subject:</label><br>
       <input type="text" id="fname" name="fname"><br>
       <h3></h3>
       <label for="fname">Message:</label><br>
       <input type="text" id="fname" name="fname"><br>
       <input type="submit" value="Submit">
    </form>
});
document.body.appendChild(additionalInfo);
