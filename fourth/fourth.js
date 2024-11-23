let once = false;
document.getElementById("send").addEventListener("click", () => {
  // Lấy tất cả các nhóm câu hỏi
  let negative = 0;
  const questionGroups = [
    "exercise_frequency",
    "daily_activity",
    "activity_type",
    "work_activity",
    "daily_habits",
    "sports",
    "comfort_level",
  ];

  let allSelected = true; // Đánh dấu xem tất cả các câu hỏi đã được trả lời chưa
  let messages = []; // Lưu trữ các thông điệp phản hồi

  questionGroups.forEach((groupName, index) => {
    const selected = document.querySelector(
      `input[name="${groupName}"]:checked`
    );

    if (!selected) {
      allSelected = false;
    } else {
      // Gợi ý hoặc động viên dựa trên câu trả lời
      const value = selected.value;
      let message = "";

      switch (groupName) {
        case "exercise_frequency":
          if (value === "never") {
            negative -= 1;
            message = "Bạn nên bắt đầu tập thể dục ít nhất 1-2 lần mỗi tuần.";
          } else if (value === "1-2") {
            negative -= 0.5;
            message =
              "Hãy cố gắng duy trì và tăng số lần tập luyện lên nếu có thể!";
          } else if (value === "3-4") {
            negative += 1;
            message = "Tuyệt vời! Hãy tiếp tục phát huy!";
          } else if (value === "5+") {
            negative += 1.5;
            message =
              "Bạn đang làm rất tốt! Duy trì thói quen lành mạnh này nhé!";
          }
          break;

        case "daily_activity":
          if (value === "under15") {
            negative -= 1; // More sedentary behavior
            message = "Hãy cố gắng dành ít nhất 15 phút mỗi ngày để vận động.";
          } else if (value === "15-30") {
            message = "Rất tốt! Cố gắng vận động thêm nếu có thời gian.";
          } else if (value === "30-60") {
            negative += 1; // More active
            message = "Bạn đang có một thói quen vận động tuyệt vời!";
          } else if (value === "60+") {
            negative += 1.5; // Very active
            message = "Thật tuyệt! Bạn đang rất tích cực vận động!";
          }
          break;

        case "activity_type":
          if (value === "nothing") {
            negative -= 2; // No physical activity
            message = "Bạn nên bắt đầu đi lại và vận động.";
          } else if (value === "walking") {
            negative -= 0.5;
            message =
              "Đi bộ là tốt, nhưng bạn có thể thử thêm các hoạt động đa dạng hơn.";
          } else if (value === "cycling") {
            negative += 1;
            message = "Đạp xe rất tốt cho tim mạch. Hãy duy trì nhé!";
          } else if (value === "stairs") {
            negative += 0.5;
            message = "Leo cầu thang là cách tuyệt vời để rèn luyện thể lực.";
          } else if (value === "running") {
            negative += 1;
            message = "Chạy bộ rất tốt! Hãy chú ý không để cơ thể quá sức.";
          } else if (value === "intensive") {
            negative += 2;
            message =
              "Bạn đang luyện tập cường độ cao, hãy đảm bảo nghỉ ngơi đủ.";
          }
          break;

        case "work_activity":
          if (value === "sitting") {
            negative -= 1; // Sitting for long periods
            message = "Hãy cố gắng đứng lên và đi lại sau mỗi giờ làm việc.";
          } else if (value === "standing") {
            negative += 1;
            message =
              "Công việc của bạn rất tốt cho sức khỏe! Tiếp tục duy trì nhé.";
          } else if (value === "physical") {
            negative += 2;
            message =
              "Bạn đang vận động nhiều trong công việc, hãy chú ý giữ sức khỏe.";
          }
          break;

        case "daily_habits":
          if (value === "often") {
            negative += 1; // Positive habits
            message = "Thói quen tốt! Hãy duy trì để giữ sức khỏe.";
          } else if (value === "sometimes") {
            negative -= 0.5; // Can improve
            message =
              "Bạn có thể cải thiện bằng cách vận động thường xuyên hơn.";
          } else if (value === "rarely") {
            negative -= 1; // Needs improvement
            message = "Hãy cố gắng tạo thói quen vận động hàng ngày.";
          } else if (value === "never") {
            negative -= 2; // Needs significant improvement
            message = "Hãy bắt đầu vận động nhẹ nhàng để cải thiện sức khỏe.";
          }
          break;

        case "sports":
          if (value === "very_often") {
            negative += 1.5;
            message = "Thói quen thể thao của bạn rất tuyệt!";
          } else if (value === "irregular") {
            negative -= 0.5;
            message = "Cố gắng chơi thể thao đều đặn hơn nhé!";
          } else if (value === "rarely") {
            negative -= 1;
            message = "Hãy thử tham gia một môn thể thao yêu thích!";
          } else if (value === "never") {
            negative -= 2;
            message =
              "Bắt đầu từ những bài tập nhẹ nhàng để cải thiện sức khỏe.";
          }
          break;

        case "comfort_level":
          if (value === "very_comfortable") {
            negative += 1;
            message = "Bạn có một nền tảng sức khỏe tốt, hãy tiếp tục nhé!";
          } else if (value === "normal") {
            negative -= 0.5;
            message =
              "Cố gắng duy trì thói quen vận động để cải thiện sức khỏe.";
          } else if (value === "tired") {
            negative -= 1;
            message =
              "Bạn cần luyện tập thêm để cảm thấy thoải mái hơn khi vận động.";
          } else if (value === "very_tired") {
            negative -= 2;
            message = "Hãy bắt đầu từ những bài tập nhẹ để cải thiện sức bền.";
          }
          break;
      }

      messages.push(`${index + 1}. ${message}`);
    }
    console.log(negative);
    localStorage.setItem("activities", negative);
  });

  if (!allSelected) {
    alert("Bạn cần trả lời tất cả các câu hỏi trước khi gửi!");
  } else {
    // Hiển thị phản hồi trong phần tử với id="result"
    document.getElementById("result").innerHTML = messages.join("<br>");

    // Show the negative score result

    let address = document.createElement("a");
    address.href = "../fifth/fifth.html";
    address.innerHTML = "Click vào đây để qua bài tiếp theo";
    if (once == false) {
      once == true;
      document.body.appendChild(address);
    }
    once = true;
  }
});
