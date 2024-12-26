import React, { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { authenticate } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticatiing, setIsAuthenticatiing] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signInHandler({ email, password }) {
    setIsAuthenticatiing(true);
    try {
      const token = await authenticate(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials and try again later."
      );
      setIsAuthenticatiing(false);
    }
  }

  if (isAuthenticatiing) {
    return <LoadingOverlay message={"Logging in user..."} />;
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
