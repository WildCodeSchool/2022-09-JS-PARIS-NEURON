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

const login = (mail, password) => {
  axios
    .post(
      `http://localhost:5000/login`,
      {
        mail,
        password,
      },
      { withCredentials: true }
    )
    .then(({ data }) => {
      console.warn(data);
      localStorage.setItem("token", data.xsrfToken);
    });
};

const logout = (token) => {
  localStorage.removeItem("token");

  axios
    .post(
      "http://localhost:5000/logout",
      { token: `${token}` },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then((res) => {
      console.warn(res);
    });
};

const getCategories = (setState) => {
  axios.get("http://localhost:5000/categories").then((res) => {
    setState(res.data);
  });
};

const getTopics = (setState) => {
  axios.get("http://localhost:5000/topics").then((res) => {
    setState(res.data);
  });
};

const getTopicsByTags = (tag, setState) => {
  axios.get(`http://localhost:5000/topicsbytags?tag=${tag}`).then((res) => {
    setState(res.data);
  });
};

export { register, login, getTopics, getCategories, getTopicsByTags, logout };
