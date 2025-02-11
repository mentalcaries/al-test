import  { useState, useEffect } from "react";

import "./Main.css";

import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import WebPlayback from "../WebPlayback/WebPlayback";
import Header from "../Header/Header";
import About from "../About/About";

// eslint-disable-next-line react/prop-types
function Main({ handleLoginModal, handleSignUpModal, loggedIn, currentUser }) {
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3001/auth/token", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       const text = await response.text();

  //       // Attempt to parse JSON
  //       let json;
  //       try {
  //         json = JSON.parse(text);
  //       } catch (error) {
  //         console.error("Response is not valid JSON:", text);
  //         throw new Error("Invalid JSON response");
  //       }

  //       setToken(json.access_token);
  //     } catch (error) {
  //       console.error("Failed to fetch token:", error);
  //     }
  //   };

  //   getToken();
  // }, []);

  return (
    <div>
      <Header
        handleLoginModal={handleLoginModal}
        isLoggedIn={loggedIn}
        handleSignUpModal={handleSignUpModal}
        currentUser={currentUser}
      />
      <div className="main__content-container">
        <p className="main__greeting">March to the beat of your own drum...</p>
        <p className="main__greeting-summary">
          This is your place to listen to music, add, like & share what has you
          up & moving today.
        </p>

        <>{token === "" ? <SpotifyLogin /> : <WebPlayback token={token} />}</>
        <About />
      </div>
    </div>
  );
}

export default Main;
