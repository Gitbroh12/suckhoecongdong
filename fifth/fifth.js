document.getElementById("send").addEventListener("click", function () {
  const messages = [];
  let negative_A = 0; // Changed A to negative_A
  let negative_B = 0; // Changed B to negative_B

  // Lấy giá trị câu trả lời của từng câu hỏi
  const sleepHours = document.querySelector(
    'input[name="sleep_hours"]:checked'
  );
  const sleepQuality = document.querySelector(
    'input[name="sleep_quality"]:checked'
  );
  const bedtime = document.querySelector('input[name="bedtime"]:checked');
  const wakeupFeeling = document.querySelector(
    'input[name="wakeup_feeling"]:checked'
  );
  const breakfast = document.querySelector('input[name="breakfast"]:checked');
  const meals = document.querySelector('input[name="meals"]:checked');
  const food = document.querySelector('input[name="food"]:checked');
  const water = document.querySelector('input[name="water"]:checked');

  // Kiểm tra nếu tất cả các câu hỏi đã được trả lời
  if (
    !sleepHours ||
    !sleepQuality ||
    !bedtime ||
    !wakeupFeeling ||
    !breakfast ||
    !meals ||
    !food ||
    !water
  ) {
    alert("Vui lòng trả lời hết tất cả các câu hỏi!");
    return;
  }

  // Xử lý logic và đưa ra nhận xét từng câu
  // 1. Giấc ngủ (negative_A)
  // Câu 1
  if (sleepHours.value === "under4") {
    messages.push(
      "1. Bạn ngủ quá ít! Hãy cố gắng ngủ ít nhất 6-8 giờ mỗi đêm."
    );
    negative_A -= 2;
  } else if (sleepHours.value === "4-6") {
    messages.push("1. Bạn cần cải thiện giấc ngủ, ngủ 6-8 giờ sẽ tốt hơn.");
    negative_A -= 1;
  } else if (sleepHours.value === "6-8") {
    messages.push("1. Rất tốt! Hãy duy trì ngủ từ 6-8 giờ mỗi đêm.");
    negative_A += 0.5;
  } else {
    negative_A += 1;
    messages.push(
      "1. Bạn ngủ đủ hơn 8 giờ, tuyệt vời! Giấc ngủ đủ giúp cải thiện sức khỏe."
    );
  }

  // Câu 2
  if (sleepQuality.value === "good") {
    negative_A += 1;
    messages.push("2. Giấc ngủ của bạn rất tốt, hãy tiếp tục duy trì!");
  } else if (sleepQuality.value === "normal") {
    negative_A += 0.5;
    messages.push(
      "2. Bạn cần cải thiện chất lượng giấc ngủ bằng cách thư giãn trước khi ngủ."
    );
    negative_A -= 0.5;
  } else {
    negative_A -= 1;
    messages.push(
      "2. Giấc ngủ kém, hãy tránh stress và sử dụng thiết bị điện tử trước khi ngủ."
    );
  }

  // Câu 3
  if (bedtime.value === "before10") {
    negative_A += 1;
    messages.push("3. Thói quen ngủ sớm trước 22:00 là rất tốt, hãy duy trì!");
  } else if (bedtime.value === "10-11") {
    messages.push("3. Bạn đi ngủ khá muộn, hãy thử ngủ sớm hơn.");
    negative_A -= 0.5;
  } else {
    messages.push(
      "3. Đi ngủ sau 23:00 không tốt, cố gắng điều chỉnh để ngủ sớm hơn."
    );
    negative_A -= 2;
  }

  // Câu 4
  if (wakeupFeeling.value === "always") {
    negative_A += 2;
    messages.push(
      "4. Thật tuyệt vời, bạn luôn cảm thấy tỉnh táo khi thức dậy!"
    );
  } else if (wakeupFeeling.value === "sometimes") {
    negative_A -= 1;
    messages.push(
      "4. Cảm giác không ổn định khi thức dậy, hãy cải thiện giờ giấc ngủ."
    );
  } else {
    messages.push(
      "4. Hiếm khi tỉnh táo khi thức dậy, hãy ngủ đủ giấc và ăn uống lành mạnh."
    );
    negative_A -= 2;
  }

  // 2. Chế độ ăn uống (negative_B)
  // Câu 1
  if (breakfast.value === "always") {
    negative_B += 1;
    messages.push(
      "5. Ăn sáng đều đặn giúp tăng cường sức khỏe, hãy tiếp tục nhé!"
    );
  } else if (breakfast.value === "sometimes") {
    messages.push("5. Bạn nên cố gắng ăn sáng đều đặn hơn.");
    negative_B -= 0.5;
  } else {
    messages.push(
      "5. Không ăn sáng là thói quen xấu, hãy bắt đầu ngày mới với bữa sáng."
    );
    negative_B -= 2;
  }

  // Câu 2
  if (meals.value === "1-2") {
    messages.push(
      "6. Ăn quá ít bữa có thể gây hại, hãy cố gắng ăn 3 bữa/ngày."
    );
    negative_B -= 1;
  } else if (meals.value === "3") {
    negative_B += 1;
    messages.push("6. Thói quen ăn 3 bữa/ngày rất tốt, hãy duy trì!");
  } else {
    messages.push(
      "6. Ăn hơn 3 bữa/ngày, hãy cân đối dinh dưỡng để không dư thừa calo."
    );
    negative_B -= 1;
  }

  // Câu 3
  if (food.value === "vegetables") {
    negative_B += 0.5;
    messages.push(
      "7. Thói quen ăn nhiều rau củ quả rất tốt, hãy tiếp tục duy trì."
    );
  } else if (food.value === "protein") {
    negative_B += 0.5;
    messages.push(
      "7. Thực phẩm giàu protein rất tốt, hãy bổ sung thêm rau củ quả."
    );
  } else if (food.value === "junk_food") {
    negative_B -= 2; // Tăng điểm nguy hiểm
    messages.push(
      "7. Thực phẩm nhiều đường/mỡ không tốt, hãy hạn chế tiêu thụ."
    );
  } else if (food.value === "healthy") {
    messages.push(
      "7. Thực phẩm và các món ăn nhiều rau,củ và protein đặc biệt rất tốt, hãy tiếp tục duy trì."
    );
    negative_B += 1;
  } else {
    messages.push(
      "7. Đồ uống có đường/caffeine nên được kiểm soát để bảo vệ sức khỏe."
    );
    negative_B -= 1;
  }
  let needWater = false;
  // Câu 4
  if (water.value === "under1") {
    needWater = true;
    messages.push(
      "8. Uống quá ít nước, hãy cố gắng uống ít nhất 1,5-2 lít nước mỗi ngày."
    );
    negative_B -= 1;
  } else if (water.value === "1-2") {
    negative_B += 0.5;
    messages.push(
      "8. Lượng nước bạn uống hàng ngày là hợp lý, hãy tiếp tục duy trì."
    );
  } else {
    negative_B += 1;
    messages.push("8. Bạn uống đủ hơn 2 lít nước mỗi ngày, tuyệt vời!");
  }
  console.log("A" + negative_A);
  console.log("B" + negative_B);
  // Initialize negative_B from localStorage or set it to an empty string if null
  // Append the message only if `needWater` is true
  if (needWater) {
    localStorage.setItem("needWater", true);
  }

  // Save the updated negative_B back to localStorage
  localStorage.setItem("negative_B", negative_B);
  localStorage.setItem("negative_A", negative_A);
  // Hiển thị kết quả
  document.getElementById("result").innerHTML = messages.join("<br>");
  // Create the link
  let link = document.createElement("a");
  link.href = "../final/final.html";
  link.innerHTML = "Tải trang tính kết quả";

  // Create the <hr> element
  let space = document.createElement("hr");

  // Append the <hr> and link to the result element
  document.getElementById("result").appendChild(space);
  document.getElementById("result").appendChild(link);
});
