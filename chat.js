let chat_space = document.getElementById("chat-main");
let input_message = document.getElementById("input-message");
let send_btn = document.getElementById("btn-send");

// 메시지 보내기
send_btn.addEventListener("click", function (e) {
  e.preventDefault();

  let userText = input_message.value;

  let temp = ` <div class="user-profile-component chats-user">
  <div class="user-profile-component__column">
    <div class="profile-img-wrap">
      <img src="./img/rabbit.png" alt="유저 프로필 사진" />
    </div>
  </div>
  <div class="user-profile-component__column">
    <div class="user-profile-text">
      <h4 class="user-name">Brave Rabbit</h4>
    </div>
    <div class="message-bubble">
      <div class="user-message-info">
        <div class="message-info__read-mark"></div>
        <div class="message-info__send-time">오후 10&#58;04</div>
      </div>
      <div class="status-message chats-message message">
        <p>
        ${userText}
        </p>
      </div>
    </div>
  </div>
</div>`;
  chat_space.insertAdjacentHTML("beforeend", temp);
  gotoBottom();
  input_message.value = "";
});

// 항상 스크롤 맨 아래에 가도록 고정
function gotoBottom() {
  chat_space.scrollTop = chat_space.scrollHeight - chat_space.clientHeight;
}

// 엔터를 눌렀을때도 메시지가 전송이 되도록
