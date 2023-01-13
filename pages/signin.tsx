import Head from "next/head";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

import React from "react";
import { useDispatch } from "react-redux";
import withRouter, { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
// import { loginUser } from "../../../_actions/user_action";

export default function SignIn() {
  // const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // let navigate = useNavigate();

  const onEmailHandler = (event: any) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    // console.log('clicked')

    let body = {
      email: email,
      password: password,
    };

    // dispatch(loginUser(body)).then((response) => {
    //   console.log(response.payload);
    //   if (response.payload.loginSuccess === true) {
    //     // props.history.push('/')
    //     // react에서 페이지 이동시킬 때 이렇게 사용
    //     navigate("/");
    //   } else {
    //     alert("Error");
    //   }
    // });
    // 원래라면 그냥 바로 아래에 넣어야하지만, redux를 사용할 거니까 action에서 처리하게 한다
    // Axios.post('/api/users/login', body)
    //   .then((response) => {})
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
      <Seo title="SignIn" />
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
          type="password"
          value={password}
          onChange={onPasswordHandler}
          label="Password"
        />
        <br />
        <Button variant="contained">Login</Button>
      </form>
    </div>
  );
}

// export default function SignIn() {
//   return (
//     <div>
//       <Seo title="SignIn" />
//       <h1>Sign In</h1>
//     </div>
//   );
// }
