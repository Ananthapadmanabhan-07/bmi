function buttonclick(){
     window.location="./bmi.html"
}
function calculateBMI() {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        let imageElement = document.getElementById("bmiImage");
        
        if (weight > 0 && height > 0) {
            let a=(height/100)
            let bmi = weight / (a*a);
            let category = "";
            let imageUrl = "" ;
            if (bmi < 18.5) {
                category = "Underweight";
                imageUrl = "image.png"; // Add actual image path
            } else if (bmi < 24.9) {
                category = "Normal weight";
                imageUrl = "normal.jpg"; // Add actual image path
            } else if (bmi < 29.9) {
                category = "Overweight";
                imageUrl = "overweight.jpg"; // Add actual image path
            } else {
                category = "Obese";
                imageUrl = "obses.jpg"; // Add actual image path
            }
            document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
            imageElement.src = imageUrl;
            imageElement.style.display = "block";
        } else {
            document.getElementById("result").innerText = "Please enter valid values!";
            imageElement.style.display = "none";
        }
    }
    function more(){
        window.location="./bmi.html"
    }
 