
(function () {
    document.getElementById("convert").addEventListener("submit", function (event) {
        event.preventDefault();
        let distance = parseFloat(document.getElementById("distance").value); // Get the distance in miles and converting the string to a number using parseFloat()
        let answer = document.getElementById("answer");
        if (distance) {
            let conversion = (distance * 1.609344).toFixed(3); // Convert the distance to kilometers
            answer.innerHTML = "<h2>" + distance + " miles converts to " + conversion + " kilometers.</h2>"; // Display the answer
        }
        else {
            answer.innerHTML = `<h2 class="error">Please Enter a Valid Number</h2>`; // Display an error message
        }
    })
}());
