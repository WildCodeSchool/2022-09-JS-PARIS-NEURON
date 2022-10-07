import axios from "axios";

const register = (username, password, mail, chatId, setState) => {
  axios
    .post("http://localhost:5000/users", {
      username,
      password,
      mail,
      chat_id: chatId,
    })
    .then((res) => setState(res.data))
    .catch((err) => {
      setState(err.response.data);
    });
};

const login = (mail, password, setState) => {
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
      localStorage.setItem("token", data.xsrfToken);
      localStorage.setItem("userName", data.user.username);
      localStorage.setItem("userId", data.user.id);
      setState(data.message);
    })
    .catch((err) => {
      setState(err.response.data);
    });
};

const logout = (token, setState) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.removeItem("userId");

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
      setState(res.data);
    })
    .catch((err) => {
      setState(err.response.data);
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

const getTopicsByTitle = (string, setState) => {
  axios
    .get(`http://localhost:5000/topicsbytitle?string=${string}`)
    .then((res) => {
      setState(res.data);
    });
};

const getTopicById = (id, setState) => {
  axios.get(`http://localhost:5000/topicbyid?id=${id}`).then((res) => {
    setState(res.data[0]);
  });
};

const getEmail = (setState) => {
  axios.get("http://localhost:5000/email").then((res) => {
    setState(res.data);
  });
  const postTopic = (
    token,
    title,
    topic,
    summary,
    chatId,
    date,
    category,
    userId,
    tags,
    setTopicId,
    setMessage
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
      .then((res) => {
        setTopicId(res.data);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
};
export {
  register,
  login,
  getTopics,
  getCategories,
  getTopicsByTags,
  getEmail,
  logout,
  getTopicById,
  getTopicsByTitle,
  logout,
  postTopic,
};
