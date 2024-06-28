document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the email value from the form
    var email = document.getElementById("email").value;

    // Validate email format (optional)
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Send email to your mailing service using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "subscribe.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    document.getElementById("subscriptionMessage").innerText = "Subscription successful! Email sent.";
                } else {
                    document.getElementById("subscriptionMessage").innerText = "Subscription failed. Please try again later.";
                }
            } else {
                document.getElementById("subscriptionMessage").innerText = "Subscription failed. Please try again later.";
            }
        }
    };

    // Send email data as JSON
    xhr.send(JSON.stringify({ email: email }));
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
