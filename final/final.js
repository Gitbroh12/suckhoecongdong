let BMI = localStorage.getItem("BMI");
console.log(BMI);
let BMI_score = document.getElementById("BMI_score");
let category = "";

// Chuyển BMI về kiểu số (nếu cần)
BMI = parseFloat(parseFloat(BMI).toFixed(2));
// Xử lý các điều kiện BMI
if (BMI < 18.5) {
  category = "Thiếu cân";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" +
    "BMI: " +
    BMI +
    " ( Thiếu cân, bạn cần bổ sung thêm: ) ";
} else if (BMI >= 18.5 && BMI < 24.9) {
  category = "Cân nặng bình thường";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" +
    "BMI: " +
    BMI +
    " ( Cân nặng bình thường, hãy tiếp tục duy trì bạn nhé!)";
} else if (BMI >= 25 && BMI < 29.9) {
  category = "Thừa cân";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" +
    "BMI: " +
    BMI +
    " ( Thừa cân, hãy tập luyện thường xuyên và duy trì chế độ ăn lành mạnh nhé!)";
} else if (BMI >= 30 && BMI < 34.9) {
  category = "Béo phì độ 1";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" +
    "BMI: " +
    BMI +
    " ( Béo phì độ 1, cần điều chỉnh chế độ ăn và tăng cường vận động để cải thiện sức khỏe.)";
} else if (BMI >= 35 && BMI < 39.9) {
  category = "Béo phì độ 2";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" +
    "BMI: " +
    BMI +
    " ( Béo phì độ 2, hãy tham khảo ý kiến bác sĩ để được tư vấn chế độ ăn uống và vận động hợp lý.)";
} else if (BMI >= 40) {
  category = "Béo phì độ 3";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" +
    "BMI: " +
    BMI +
    " ( Béo phì độ 3, đây là mức rất nghiêm trọng, cần can thiệp y tế ngay lập tức.)";
} else {
  category = "Không xác định";
  BMI_score.innerText =
    "Sức khỏe tổng quát:" + "Chỉ số BMI không hợp lệ, vui lòng nhập lại.";
}
let value = localStorage.getItem("gene");
console.log(value);
let family_disease = document.getElementById("family_disease");
if (value == "0" || value == "") {
  family_disease.innerText =
    "Tiền sử bệnh gia đình: Gia đình bạn không có tiền sử bệnh di truyền nào! ";
} else {
  family_disease.innerText = "Tiền sử bệnh gia đình: " + value;
}
let activities = localStorage.getItem("activities");
console.log(activities);

let exercise_frequency = document.getElementById("exercise_frequency");

if (activities == 0) {
  exercise_frequency.innerText =
    "Lịch sinh hoạt: Bạn có lịch sinh hoạt chưa cân đối, hãy cố gắng luyện tập thể dục thể thao thường xuyên bạn nhé.";
} else if (parseFloat(activities) < 0) {
  exercise_frequency.innerText =
    "Lịch sinh hoạt: Bạn có lịch sinh hoạt chưa cân đối gây ảnh hưởng xấu đến sức khỏe, hãy cố gắng luyện tập thể dục thể thao thường xuyên bạn nhé.";
} else if (parseFloat(activities) < -1) {
  exercise_frequency.innerText =
    "Lịch sinh hoạt: Bạn có lịch sinh hoạt rất xấu đến sức khỏe, cần cải thiện ngay.";
} else {
  exercise_frequency.innerText =
    "Lịch sinh hoạt: Lịch sinh hoạt ổn định, hãy cố gắng duy trì.";
}

let negative_A = localStorage.getItem("negative_A");
console.log(negative_A);
let sleep = document.getElementById("sleep");
if (parseFloat(negative_A) == 0) {
  sleep.innerText =
    "Tình trạng giấc ngủ: Bạn cố thể thiếu ngủ, hãy cố gắng ngủ ngon hơn 8 tiếng một ngày.";
} else if (parseFloat(negative_A) < 0) {
  sleep.innerText =
    "Tình trạng giấc ngủ: Bạn đã thiếu ngủ rất nhiều, hãy cố gắng ngủ ngon hơn 8 tiếng một ngày.";
} else {
  sleep.innerText =
    "Tình trạng giấc ngủ: bạn có giấc ngủ thường xuyên và ổn định, hãy cố gắng duy trì";
}
let needWater = localStorage.getItem("needWater");
let negative_B = localStorage.getItem("negative_B");
console.log(negative_B);

let food = document.getElementById("food");
if (needWater === "true") {
  if (parseFloat(negative_B) <= 1) {
    food.innerText =
      "Tình trạng bữa ăn: Chất lượng ăn của bạn nên được cải thiện và cần uống đủ 1.5-2 lít nước mỗi ngày.";
  } else if (parseFloat(negative_B) <= -1) {
    food.innerText =
      "Tình trạng bữa ăn: Chất lượng ăn của bạn chưa tốt, cần cải thiện cả chất lượng ăn lẫn lượng cung cấp nước cho cơ thể.";
  } else {
    food.innerText =
      "Tình trạng bữa ăn: Chất lượng bữa ăn tốt. Tuy nhiên cần bổ sung 1.5-2 lít nước mỗi ngày.";
  }
} else {
  if (parseFloat(negative_B) <= 1) {
    food.innerText =
      "Tình trạng bữa ăn: Chất lượng ăn của bạn nên được cải thiện.";
  } else if (parseFloat(negative_B) <= -1) {
    food.innerText =
      "Tình trạng bữa ăn: Chất lượng ăn của bạn chưa tốt, cần cải thiện.";
  } else {
    food.innerText =
      "Tình trạng bữa ăn: Chất lượng bữa ăn tốt, hãy cố gắng duy trì.";
  }
}
