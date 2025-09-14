import axios from "axios";
import { urlAccounts } from "../endpoints";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);

  async function login(credentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/login`,
        credentials
      );
      console.log(response.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  return (
    <>
      <h3>Kirjaudu sisään</h3>
      <DisplayErrors errors={errors} />
      <AuthForm
        model={{ email: "", password: "" }}
        onSubmit={async (values) => await login(values)}
      />
    </>
  );
}
