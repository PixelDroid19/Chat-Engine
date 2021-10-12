import React, { useRef, useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../useContext/AuthContext";
import { signOut, getAuth } from "@firebase/auth";


//Llaves del CHAT ENGINE
const Key = "e4e421fd-023e-4730-b583-9d3837ab9406", projectid ="7b4fefb4-69cf-4292-b00a-8e0b1f10cb32";

export default function Chats() {

  //Estados
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth(); 
  const history = useHistory();
  const auth = getAuth();

  //Funcion para cerrar sección
  const handleLogout = async () => {
    await signOut(auth).then(() => {
      console.log('Sign-out successful.')
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
    history.push("/");
  };

  //Obtener la image del usuario
  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        history.push("/");
        return;
      }

      // Get-or-Create Funcion para obtener usuarios de Chat Engine o crearlo si no existe en el backend del Chat
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": projectid,
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })

        .then(() => setLoading(false))

        .catch((e) => {
          let formdata = new FormData();
          formdata.append("email", user.email);
          formdata.append("username", user.email);
          formdata.append("secret", user.uid);

          getFile(user.photoURL).then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key": Key,
                },
              })
              .then(() => setLoading(false))
              .catch((e) => console.log("e", e.response));
          });
        });
    }
  }, [user, history]);

  if (!user || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">PMT CHAT</div>

        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={projectid}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
