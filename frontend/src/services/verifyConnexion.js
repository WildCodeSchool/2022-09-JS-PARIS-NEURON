export const verifyConnexion = () => {
  const today = new Date();
  const endOfSession = parseInt(localStorage.getItem("endOfSession"), 10);
  console.warn(today.getTime());

  if (endOfSession < today.getTime()) {
    localStorage.clear();
    window.location.reload(false);
  }
};
