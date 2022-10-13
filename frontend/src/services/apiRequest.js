import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const register = (username, password, mail, chatId, setState) => {
  axios
    .post(`${BASE_URL}/users`, {
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
      `${BASE_URL}/login`,
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
      `${BASE_URL}/logout`,
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

const getTagsTop = (setState) => {
  axios
    .get(`${BASE_URL}/tagstop`)
    .then((res) => {
      console.warn(res.data);
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getCategories = (setState) => {
  axios
    .get(`${BASE_URL}/categories`)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => console.warn(err));
};

const getTopics = (setState) => {
  axios
    .get(`${BASE_URL}/topics`)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => console.warn(err));
};

const getTopicsByTitle = (string, setState) => {
  axios.get(`${BASE_URL}/topicsbytitle?string=${string}`).then((res) => {
    setState(res.data);
  });
};

const getTopicById = (id, setTopics, setTaglist) => {
  axios.get(`${BASE_URL}/topicbyid?id=${id}`).then((res) => {
    setTopics(res.data[0][0]);
    setTaglist(res.data[1]);
  });
};

const getComments = (id, setState) => {
  axios.get(`${BASE_URL}/comments?id=${id}`).then((res) => {
    setState(res.data);
  });
};

const getTopicsFavorites = (setState) => {
  axios.get("http://localhost:5000/topicsfavorites").then((res) => {
    localStorage.setItem("token", data.xsrfToken);
    localStorage.setItem("userName", data.user.username);
    localStorage.setItem("userId", data.user.id);
    console.warn(res);
    setState(res.data);
  });
};

const addToTopicsFavorites = (setState) => {
  axios.post("http://localhost:5000/topicsfavorites").then((res) => {
    localStorage.setItem("token", data.xsrfToken);
    localStorage.setItem("userName", data.user.username);
    localStorage.setItem("userId", data.user.id);
    console.warn(res);
    setState(res.data);
  });
};

const removeFromTopicsFavorites = (setState) => {
  axios.delete("http://localhost:5000/topicsfavorites").then((res) => {
    localStorage.setItem("token", data.xsrfToken);
    localStorage.setItem("userName", data.user.username);
    localStorage.setItem("userId", data.user.id);
    console.warn(res);
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
  tags,
  setTopicId,
  setMessage
) => {
  axios
    .post(
      `${BASE_URL}/topics`,
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

const postComment = (
  token,
  commentContent,
  date,
  topicId,
  userID,
  setComments
) => {
  axios
    .post(
      `${BASE_URL}/comments`,
      {
        commentContent,
        date,
        topicId,
        userID,
      },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then(() => {
      getComments(topicId, setComments);
    })
    .catch((err) => {
      console.warn(err);
    });
};

// --------------------USERS PART--------------------------------------------
const postFollowed = (token, id) => {
  axios
    .post(
      `http://localhost:5000/followed`,
      { id },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then((res) => {
      setState(res.data);
      console.warn(res.data);
    })
    .catch((err) => {
      console.warn(err.response.data.message);
    });
};

const removeFromFollowed = (token, id, friend_id, setState) => {
  axios
    .delete(`http://localhost:5000/followed?id=${id}&friend_id=${friend_id}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      console.warn(res.data);
      setState(res.data);
      getFollowed(token, id, setState);
    })
    .catch((err) => {
      console.warn(err.response.data);
    });
};

const getNeuronById = (token, id, setNeuronInfos) => {
  axios
    .get(`${BASE_URL}/neuron?id=${id}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then(({ data }) => {
      setNeuronInfos(data);
    })
    .catch((err) => console.warn(err));
};

const sendPrivateMessage = (
  token,
  neuronId,
  userId,
  neuronname,
  username,
  message
) => {
  axios
    .post(
      `${BASE_URL}/privatemessage`,
      {
        neuronId,
        userId,
        neuronname,
        username,
        message,
      },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then((res) => {
      console.warn(res);
    })
    .catch((err) => console.warn(err));
};

const getPrivateMessages = (token, userId, setState) => {
  axios
    .get(`${BASE_URL}/privatemessages?id=${userId}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      console.warn(res);
      setState(res.data);
    })
    .catch((err) => console.warn(err));
};

const getFollowed = (token, id, setState) => {
  axios
    .get(`${BASE_URL}/followed?id=${id}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      setState(res.data.map((elem) => elem.friend_id));
    })
    .catch((err) => {
      console.warn(err.response.data.message);
    });
};

const getUsersByIds = (token, idList, setState) => {
  axios
    .get(`${BASE_URL}/followedByIds`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
      params: {
        idList,
      },
    })
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

export {
  register,
  login,
  logout,
  getTagsTop,
  getTopics,
  getCategories,
  getTopicById,
  getTopicsByTitle,
  getComments,
  postTopic,
  postComment,
  getNeuronById,
  sendPrivateMessage,
  getPrivateMessages,
  postFollowed,
  removeFromFollowed,
  getFollowed,
  getUsersByIds,
  getTopicsFavorites,
  addToTopicsFavorites,
  removeFromTopicsFavorites,
};
