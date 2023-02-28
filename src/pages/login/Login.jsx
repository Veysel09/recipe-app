import React, { useState } from "react";
import {
  LoginContainer,
  StyledImg,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg";


const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({email:"", password:""})



  const handleSubmit = (e) => {
    e.preventDefault();
  
    navigate("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<WEYCELL>"}Recipe</Header>
        <StyledForm onSubmit={(e)=>handleSubmit(e)}>
          <StyledInput placeholder="Enter username" type="text"
          value={}
          />
          <StyledInput placeholder="Enter Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
