/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import LoginImage from "../assets/escola-etec.jpg";
import { loginComanda } from "../lib/loginService";
import { GlobalStyles } from "../styles/GlobalStyles";
import { darkTheme, lightTheme } from "../styles/Themes";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
`;

const TopBar = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoutButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  object-fit: cover;
  padding: 0 14px;
  padding-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 28px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #eee;
  }

  ${({ theme }) => theme === 'dark' && `
    background-color: #121212;
    color: #fff;
    &:hover {
      background-color: #333;
    }
  `}
`;

const LeftSection = styled.div`
  flex: 1.2;
  background: url(${LoginImage}) no-repeat center;
  background-size: cover;
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);

  @media (max-width: 1200px) {
    flex: 0;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.cardBackground};
`;

const LoginBox = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 3rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${({ theme }) => theme.inputBackground};
  color: #000;
  
  &::placeholder {
    color: #777;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 1rem;

  &:hover {
    background: #3d8b40;
  }
`;

const Login = ({ theme }) => {
  const navigate = useNavigate();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const [valueName, setValueName] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) navigate("/");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginComanda(valueName, date);

    if (response.error) {
      setErrorMessage(response.error);
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <LoginContainer>
        <TopBar>
          <LogoutButton theme={theme} onClick={handleLogout}>‹</LogoutButton>
        </TopBar>
        <LeftSection />
        <RightSection>
          <LoginBox>
            <Title>Login</Title>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={valueName}
                  onChange={(e) => setValueName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="date">Data</Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </FormGroup>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <Button type="submit">Entrar</Button>
            </form>
          </LoginBox>
        </RightSection>
      </LoginContainer>
    </ThemeProvider >
  );
};

export default Login;
