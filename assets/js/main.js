import { handleMessageNotif } from "./chat";

// eslint-disable-next-line no-undef
const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message,
  });
  console.log(`you: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname,
  });
}

socket.on("messageNotif", handleMessageNotif);
