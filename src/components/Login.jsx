import React, { useState } from "react";
import httpClient from "../services/httpClient";
import { useNavigate } from "react-router-dom";
import  { userLogin } from '../services/auth'


const Login = ({setconnected}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  function reset() {
    setemail("");
    setpassword("");
  }

  return (
    <div>
      <h3 className="h3"> Welcome To Technovation</h3>

      <form
        className="log "
        onSubmit={async (event) => {
          event.preventDefault();
          if (!email || !password) return;

          const{token , user } = await  userLogin({email , password}) 
          localStorage.setItem('token' , token)
          localStorage.setItem('user' , JSON.stringify(user))
          setconnected(true)
          navigate('/')

        }}
      >
        <div>
          <label> Email </label> <br />
          <input
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
            type="email"
            placeholder="Enter your email ..."
          />
        </div>

        <div>
          <label> Password </label> <br />
          <input
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            type="password"
            placeholder="Enter your password ..."
          />
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="reset"
            onClick={() => reset()}
            className="btn btn-danger"
          >
            Annuler
          </button>{" "}
          <br />
        </div>
        {/* <button onClick={()=>navigate('/register')} type="submit" className="mt-3 btn btn-outline-primary"> <h7> Create a new Account </h7></button> */}
      </form>
    </div>
  );
};

export default Login;
