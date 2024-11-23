let board = document.getElementById("board");
let button_1 = document.getElementById("button-1");
let once = false;
button_1.addEventListener("click", function begin() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // Check if the values are valid numbers
  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    // Correct BMI calculation: BMI = weight (kg) / (height (m))^2
    let bmi = weight / Math.pow(height / 100, 2); // height / 100 to convert cm to m
    console.log("BMI: " + bmi);
    let category;
    if (bmi < 18.5) {
      category = "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Cân nặng bình thường";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Thừa cân";
    } else {
      category = "Béo phì";
    }
    document.getElementById("result-bmi").innerText =
      category + "  BMI: " + bmi;
    localStorage.setItem("BMI", bmi);
    const link = document.createElement("a");
    link.href = "./third.html";
    link.innerHTML = "Qua bài tiếp theo";

    if (once == false) {
      board.appendChild(link);
      once = true;
    }
  } else {
    console.log("Please enter valid numbers for weight and height.");
  }
});
