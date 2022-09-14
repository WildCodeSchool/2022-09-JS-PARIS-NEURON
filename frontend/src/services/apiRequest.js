import axios from "axios";

const register = (inputs) => {
  axios
    .post("http://localhost:5000/users", {
      username: inputs.username,
      password: inputs.password,
      mail: inputs.mail,
      chat_id: inputs.chatId,
    })
    .then((res) => console.warn(res));
};

export { register };
