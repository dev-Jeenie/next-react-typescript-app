import { Button, TextField } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

export default function SignUp() {
  // const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // let navigate = useNavigate();

  const onEmailHandler = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event: any) => {
    setName(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event: any) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    console.log("clicked");

    let body = {
      name: name,
      email: email,
      password: password,
    };
    if (password !== confirmPassword) {
      return alert("비밀번호는 동일해야합니다");
    }

    // dispatch(registerUser(body)).then((response) => {
    //   if (response.payload.success) {
    //     navigate("/login");
    //   } else {
    //     alert("fail to sign up");
    //   }
    // });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Seo title="SignUp" />
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <TextField
          type="email"
          value={email}
          onChange={onEmailHandler}
          label="Email"
        />
        <br />
        <TextField
          type="text"
          value={name}
          onChange={onNameHandler}
          label="Name"
        />
        <br />
        <TextField
          type="password"
          value={password}
          onChange={onPasswordHandler}
          label="Password"
        />
        <br />
        <TextField
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
          label="Confirm Password"
        />
        <br />
        <Button variant="contained">회원가입</Button>
      </form>
    </div>
  );
}

// export default function SignUp() {
//   return (
//     <div>
//       <Seo title="SignUp" />
//       <h1>Sign Up</h1>
//     </div>
//   );
// }
