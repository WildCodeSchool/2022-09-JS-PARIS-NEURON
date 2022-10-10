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

const getTopicById = (id, setTopics, setTaglist) => {
  axios.get(`http://localhost:5000/topicbyid?id=${id}`).then((res) => {
    console.warn(res);
    setTopics(res.data[0][0]);
    setTaglist(res.data[1]);
  });
};

const getComments = (id, setState) => {
  axios.get(`http://localhost:5000/comments?id=${id}`).then((res) => {
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
  axios.post("http://localhost:5000/topicsfavorites")
  .then((res) => {
  localStorage.setItem("token", data.xsrfToken);
    localStorage.setItem("userName", data.user.username);
    localStorage.setItem("userId", data.user.id);
    console.warn(res);
    setState(res.data);
});
};

const removeFromTopicsFavorites = (setState) => {
  axios.delete("http://localhost:5000/topicsfavorites")
  .then((res) => {
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

const postComment = (
  token,
  commentContent,
  date,
  topicId,
  userID,
  setState
) => {
  axios
    .post(
      "http://localhost:5000/comments",
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
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

// --------------------USERS PART--------------------------------------------
// const postFollowed = (id) => {
//   axios
//     .post(
//       `http://localhost:5000/followed`,
//       { id },
//       {
//         withCredentials: true,
//         headers: {
//           "x-xsrf-token": `${token}`,
//         },
//       }
//     )
//     .then((res) => {
//       console.warn(res.data);
//     })
//     .catch((err) => {
//       console.warn(err.response.data.message);
//     });
// };

// const deleteFollowed = (id) => {
//   axios
//     .delete(
//       `http://localhost:5000/followed`,
//       { id },
//       {
//         withCredentials: true,
//         headers: {
//           "x-xsrf-token": `${token}`,
//         },
//       }
//     )
//     .then((res) => {
//       console.warn(res.data);
//     })
//     .catch((err) => {
//       console.warn(err.response.data.message);
//     });
// };

const getFollowed = (token, id, setState) => {
  axios
    .get(`http://localhost:5000/followed?id=${id}`, {
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
    .get(`http://localhost:5000/followedByIds`, {
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
  getTopics,
  getCategories,
  getTopicById,
  getTopicsByTitle,
  getComments,
  postTopic,
  postComment,
  // postFollowed,
  // deleteFollowed,
  getFollowed,
  getUsersByIds,
  getTopicsFavorites,
  addToTopicsFavorites,
  removeFromTopicsFavorites
};
