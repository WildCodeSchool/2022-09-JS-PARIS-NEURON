import axios from "axios";

const register = (username, password, mail, chatId) => {
  axios
    .post("http://localhost:5000/users", {
      username,
      password,
      mail,
      chat_id: chatId,
    })
    .then((res) => console.warn(res));
};

export { register };
