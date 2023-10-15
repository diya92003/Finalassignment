function calculateVolume() {
    const radiusInput = document.getElementById("radius");
    const resultElement = document.getElementById("result");

    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius)) {
        resultElement.textContent = "Please enter a valid radius.";
    } else {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        resultElement.textContent = `The volume of the sphere is: ${volume.toFixed(2)}`;
    }
}
