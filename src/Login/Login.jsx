import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.init";
app;

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const GootleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GootleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("error", error);
        // An error happened.
      });
  };

  const handleGitHubLogin = () => {
    signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleGitHubSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("error", error);
        // An error happened.
      });
  };

  return (
    <div>
      <br />
      {/* user ? logout : sign in */}
      {user ? (
        <>
          <button onClick={handleSignOut}>SignOut</button>
          <button onClick={handleGitHubSignOut}>GitHub SignOut</button>
        </>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGitHubLogin}>GitHub login</button>
        </div>
      )}
      <h3>User: {user?.displayName}</h3>
      <p>Email: {user?.email}</p>
      <img src={user?.photoURL} alt="" />
    </div>
  );
};

export default Login;
