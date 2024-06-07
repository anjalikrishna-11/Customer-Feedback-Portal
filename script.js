// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and feedback display elements by their IDs
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');

    // Add an event listener for the form's submit event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values and trim any extra whitespace from input
        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value.trim();
        const comments = document.getElementById('comments').value.trim();

        // Validate form fields
        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

       // Create feedback elements
        const feedbackEntry = document.createElement('div'); // Create a div element to hold the feedback entry

        // Create paragraph elements for each feedback detail (name, rating, comments)
        const feedbackName = document.createElement('p'); // Create a paragraph element for the name
        feedbackName.innerHTML = `<strong>Name:</strong> ${name}`; // Set the inner HTML to display the name
        feedbackEntry.appendChild(feedbackName); // Append the name paragraph to the feedback entry div

        const feedbackRating = document.createElement('p'); // Create a paragraph element for the rating
        feedbackRating.innerHTML = `<strong>Rating:</strong> ${rating}`; // Set the inner HTML to display the rating
        feedbackEntry.appendChild(feedbackRating); // Append the rating paragraph to the feedback entry div

        const feedbackComments = document.createElement('p'); // Create a paragraph element for the comments
        feedbackComments.innerHTML = `<strong>Comments:</strong> ${comments}`; // Set the inner HTML to display the comments
        feedbackEntry.appendChild(feedbackComments); // Append the comments paragraph to the feedback entry div

        // Append the feedback entry to the feedback display area
        feedbackDisplay.appendChild(feedbackEntry);

        // Clear the form fields for the next submission
        form.reset();
        // The JavaScript code above dynamically creates and appends elements to display the customer's feedback upon successful form submission.
    });
});
