import axios from "axios";

const register = (username, password, mail, chatId) => {
  axios
    .post("http://localhost:5000/users", {
      username,
      password,
      mail,
      chat_id: chatId,
    })
    .then((res) => console.warn(res.data))
    .catch((err) => {
      console.warn(err.response.data);
    });
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
      console.warn(data.message);
      localStorage.setItem("token", data.xsrfToken);
    })
    .catch((err) => {
      console.warn(err.response.data);
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
      console.warn(res.data);
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

const postTopic = (
  token,
  title,
  topic,
  summary,
  chatId,
  date,
  category,
  userId,
  tags
) => {
  axios
    .post(
      `http://localhost:5000/topics`,
      {
        title,
        topic,
        summary,
        chat_id: chatId,
        date,
        categories_id: category,
        users_id: userId,
        tags,
      },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then((res) => console.warn(res));
};

export {
  register,
  login,
  getTopics,
  getCategories,
  getTopicsByTags,
  logout,
  postTopic,
};
