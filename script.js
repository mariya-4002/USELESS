document.getElementById('predictionForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const energyUsage = parseFloat(document.getElementById('energyUsage').value);
    const operationalHours = parseFloat(document.getElementById('operationalHours').value);

    // Simple prediction model (this can be replaced with an actual ML model)
    const failureRate = calculateFailureRate(temperature, energyUsage, operationalHours);

    // Display the result
    document.getElementById('result').innerText = `Predicted Failure Rate: ${failureRate.toFixed(2)}%`;
});

// Simple calculation for predictive purposes
function calculateFailureRate(temp, energy, hours) {
    // Basic formula for demonstration purposes
    let rate = (temp * 0.1) + (energy * 0.05) + (hours * 0.2);

    // Cap the rate to a maximum of 100%
    return Math.min(rate, 100);
}
