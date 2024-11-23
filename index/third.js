let board_2 = document.getElementById("board-2");
board_2.style.height = "100vh";
board_2.style.width = "375px";
let result = document.getElementById("result");
const myForm = document.getElementById("myForm");
const yes = document.querySelector('input[name="none"]:checked');
let array = [];
let geneScore = 0;
let link = document.createElement("a");
link.href = "../fourth/fourth.html";
link.innerHTML = "Qua bài tiếp theo";
// Define the array of disease descriptions
const arrayResult = [
  "- Bệnh tiểu đường (Type 2 Diabetes): Bệnh này có yếu tố di truyền, khiến cơ thể không sử dụng insulin hiệu quả, dẫn đến mức đường huyết cao.",
  "- Tăng huyết áp (Hypertension): Di truyền có thể làm tăng nguy cơ cao huyết áp, dẫn đến các vấn đề về tim mạch và đột quỵ.",
  "- Bệnh tim mạch (Cardiovascular Diseases): Các vấn đề tim mạch, bao gồm bệnh động mạch vành, có thể di truyền từ cha mẹ.",
  "- Béo phì (Obesity): Béo phì có thể do di truyền hoặc môi trường, ảnh hưởng đến các vấn đề về sức khỏe như bệnh tim, tiểu đường.",
  "- Hội chứng chuyển hóa (Metabolic Syndrome): Di truyền có thể góp phần vào hội chứng này, làm tăng nguy cơ mắc bệnh tim mạch, tiểu đường.",
  "- Bệnh gout (Gout): Bệnh này có yếu tố di truyền, làm tăng nguy cơ viêm khớp do tích tụ axit uric trong cơ thể.",
  "- Bệnh Parkinson (Parkinson's Disease): Di truyền có thể là yếu tố nguy cơ gây ra bệnh Parkinson, ảnh hưởng đến khả năng vận động.",
  "- Loãng xương (Osteoporosis): Bệnh loãng xương có thể di truyền, làm giảm mật độ xương và tăng nguy cơ gãy xương.",
  "- Rối loạn lipid máu (Dyslipidemia): Di truyền có thể góp phần vào rối loạn lipid, làm tăng nguy cơ bệnh tim mạch.",
  "- Bệnh Alzheimer (Alzheimer's Disease): Di truyền là yếu tố quan trọng trong sự phát triển của bệnh Alzheimer, gây suy giảm trí nhớ và khả năng nhận thức.",
  "- Khác: Có thể nó không nằm trong các bệnh phổ biến sau đây, nhưng vẫn có nguy cơ lây truyền.",
];
function checkBox() {
  myForm.style.display = "inline"; // Show the form
  result.textContent = "";

  for (var i = 0; i < 11; i++) {
    let checkbox = document.getElementById(i.toString());

    array.push(checkbox);
    // Add the relevant text based on the checkbox id
    if (array[i].checked) {
      let newText = document.createElement("p");
      newText.textContent = arrayResult[i];
      result.append(newText);
      board_2.appendChild(link);
    }
    localStorage.setItem("gene", result.textContent);
  }
}
// Attach event listener to radio buttons to show the form
document.querySelectorAll('input[name="none"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "yes") {
      myForm.style.display = "inline"; // Show the form
    } else {
      myForm.style.display = "none"; // Hide the form if "No" is selected
      result.textContent = ""; // Clear the result if "No" is selected
      board_2.appendChild(link);
      localStorage.setItem("gene", 0);
    }
  });
});
