import Cookies from "universal-cookie";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

const cookies = new Cookies();
export const Auth = ({ setIsAuth }) => {
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.accessToken);
      console.log(result);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <p>Sign in by google</p>
      <button onClick={SignInWithGoogle}>Sign In with Google</button>
    </div>
  );
};
