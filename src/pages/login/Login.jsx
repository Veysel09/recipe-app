import React  from "react";
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
import { useLoginContext } from "../../context/LoginProvider";


const Login = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({email:"", password:""})

  const { user, setUser } = useLoginContext()



  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<WEYCELL/>"}Recipe</Header>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <StyledInput
            placeholder="Enter Email"
            type="email"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <StyledInput
            placeholder="Enter Password"
            type="password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
