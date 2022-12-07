import axios from "axios";
import { verifyConnexion } from "./verifyConnexion";

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
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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
      localStorage.setItem("endOfSession", tomorrow.getTime());
      setState(data.message);
    })
    .catch((err) => {
      setState(err.response.data);
    });
};

const logout = (token, setState) => {
  localStorage.clear();

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

const getNeuronsByTags = (token, id, tags, setState) => {
  verifyConnexion();

  const array = tags.map((tag) => tag.tag);
  const string = array.join(",", " ");

  axios
    .get(`${BASE_URL}/neuronbytag?id=${id}&string=${string}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getTagsFavoritesForNeurons = (token, usersId, setState) => {
  verifyConnexion();

  axios
    .get(`${BASE_URL}/tagsFavorites?usersId=${usersId}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      getNeuronsByTags(token, usersId, res.data, setState);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getTagsTop = (setState) => {
  axios
    .get(`${BASE_URL}/tagstop`)
    .then((res) => {
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
  axios
    .get(`${BASE_URL}/topicsbytitle?string=${string}`)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getTopicById = (id, setTopics, setTaglist) => {
  axios
    .get(`${BASE_URL}/topicbyid?id=${id}`)
    .then((res) => {
      setTopics(res.data[0][0]);
      setTaglist(res.data[1]);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getTopicsByTags = (token, tags, setState) => {
  verifyConnexion();

  const array = tags.map((tag) => tag.tag);
  const string = array.join(",", " ");

  axios
    .get(`${BASE_URL}/topicbytag?string=${string}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getTagsFavoritesForTopics = (token, usersId, setState) => {
  verifyConnexion();

  axios
    .get(`${BASE_URL}/tagsFavorites?usersId=${usersId}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      getTopicsByTags(token, res.data, setState);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const getComments = (id, setComments, setCommentContent) => {
  axios
    .get(`${BASE_URL}/comments?id=${id}`)
    .then((res) => {
      setComments(res.data);
      setCommentContent("");
    })
    .catch((err) => {
      console.warn(err);
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
  verifyConnexion();

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
  setComments,
  setCommentContent
) => {
  verifyConnexion();

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
      getComments(topicId, setComments, setCommentContent);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const updateComment = (
  token,
  id,
  commentContent,
  topicId,
  setComments,
  setCommentContent,
  setIsShowing
) => {
  verifyConnexion();

  axios
    .put(
      `${BASE_URL}/comments`,
      { id, commentContent },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then(() => {
      getComments(topicId, setComments, setCommentContent);
      setIsShowing(0);
    })
    .catch((err) => {
      console.warn(err);
    });
};

// --------------------USERS PART--------------------------------------------
const getFollowed = (token, id, setState) => {
  verifyConnexion();

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

const addToFollowed = (token, userId, id) => {
  verifyConnexion();

  axios
    .post(
      `${BASE_URL}/followed`,
      { userId, id },
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
    .catch((err) => {
      console.warn(err.response.data.message);
    });
};

const removeFromFollowed = (token, id, friendId, setState) => {
  verifyConnexion();

  axios
    .delete(`${BASE_URL}/followed?id=${id}&friend_id=${friendId}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      console.warn(res.data);
      getFollowed(token, id, setState);
    })
    .catch((err) => {
      console.warn(err.response.data);
    });
};

const getNeuronById = (token, id, setNeuronInfos) => {
  verifyConnexion();

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
  date,
  message,
  setState
) => {
  verifyConnexion();

  axios
    .post(
      `${BASE_URL}/privatemessage`,
      {
        neuronId,
        userId,
        neuronname,
        username,
        date,
        message,
      },
      {
        withCredentials: true,
        headers: {
          "x-xsrf-token": `${token}`,
        },
      }
    )
    .then(() => {
      setState("");
    })
    .catch((err) => console.warn(err));
};

const getPrivateMessages = (token, userId, setState) => {
  verifyConnexion();

  axios
    .get(`${BASE_URL}/privatemessages?id=${userId}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => console.warn(err));
};

const deletePrivateMessage = (token, id, userId, setState) => {
  verifyConnexion();

  axios
    .delete(`${BASE_URL}/privatemessages?id=${id}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then(() => {
      getPrivateMessages(token, userId, setState);
    })
    .catch((err) => console.warn(err));
};

const getUsersByIds = (token, idList, setState) => {
  verifyConnexion();

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

const getTagsFavorites = (token, usersId, setState) => {
  verifyConnexion();

  axios
    .get(`${BASE_URL}/tagsFavorites?usersId=${usersId}`, {
      withCredentials: true,
      headers: {
        "x-xsrf-token": `${token}`,
      },
    })
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.warn(err);
    });
};

const addTagsFavorites = (token, tag, userId, setState) => {
  verifyConnexion();

  axios
    .post(
      `${BASE_URL}/tagsFavorites`,
      {
        tag,
        userId,
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
      getTagsFavorites(token, userId, setState);
    })
    .catch((err) => {
      console.warn(err);
    });
};

// // const removeFromTagsFavorites = (setState) => {
//   verifyConnexion();

//   axios
//     .delete(
//       `${BASE_URL}/tagsFavorites`,
//       {
//         id,
//       },
//       {
//         withCredentials: true,
//         headers: {
//           "x-xsrf-token": `${token}`,
//         },
//       }
//     )
//     .then((res) => {
//       setState(res.data);
//     })
//     .catch((err) => {
//       console.warn(err);
//     });
// };

export {
  register,
  login,
  logout,
  getTagsTop,
  getNeuronsByTags,
  getTagsFavoritesForNeurons,
  getTopics,
  getCategories,
  getTopicById,
  getTopicsByTags,
  getTagsFavoritesForTopics,
  getTopicsByTitle,
  getComments,
  postTopic,
  postComment,
  updateComment,
  getNeuronById,
  sendPrivateMessage,
  getPrivateMessages,
  deletePrivateMessage,
  addToFollowed,
  removeFromFollowed,
  getFollowed,
  getUsersByIds,
  getTagsFavorites,
  addTagsFavorites,
  // removeFromTagsFavorites,
};
