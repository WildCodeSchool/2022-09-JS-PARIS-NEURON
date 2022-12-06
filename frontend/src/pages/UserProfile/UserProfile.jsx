import React, { useEffect, useState } from "react";
import { Navbar, ProfilDisplay } from "@components/";
import { useParams } from "react-router";

import "./UserProfile.scss";

export const UserProfile = () => {
  const { id } = useParams();

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (id === localStorage.getItem("userId")) setAuth(true);
  }, []);

  return (
    <section className="userprofile">
      {auth ? (
        <>
          <ProfilDisplay />
          <Navbar />
        </>
      ) : (
        <span>vous n'êtes pas autorisé</span>
      )}
    </section>
  );
};
