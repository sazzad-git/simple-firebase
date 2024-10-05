import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider(app);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <br />
      <button onClick={handleGoogleSignIn}>Google login</button>
    </div>
  );
};

export default Login;
