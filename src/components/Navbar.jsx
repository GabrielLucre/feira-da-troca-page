/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AiOutlineTikTok } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_SECRET_KEY;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.navBackground};
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #4CAF50;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const RightSectionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: flex-end;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  line-height: 0;

  svg {
    cursor: pointer;
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.text || "#fff"};

    &:hover {
      color: ${({ theme }) => theme.primary || "#4CAF50"};
    }
  }
`;

const LoginButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
  }

  ${({ theme }) => theme === 'dark' && `
    background-color: #4CAF50;
    &:hover {
      background-color: #3d8b40;
    }
  `}
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    display: block;
  }
`

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const encryptedData = sessionStorage.getItem("user");

    if (encryptedData) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      try {
        const user = JSON.parse(decryptedData);
        setUser(user);
      } catch (error) {
        console.error("Erro ao tentar parsear JSON:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <NavbarContainer>
      <NavLinks open={open}>
        <Link to="home" smooth={true} duration={500} offset={-100}>
          <NavLink as="home">Home</NavLink>
        </Link>
        <Link to="projeto" smooth={true} duration={500} offset={-100}>
          <NavLink as="span">Projeto</NavLink>
        </Link>
        <Link to="faq" smooth={true} duration={500} offset={-100}>
          <NavLink as="span">FAQ</NavLink>
        </Link>
        <Link to="minhaComanda" smooth={true} duration={500} offset={-150}>
          <NavLink to="minhaComanda">Comanda</NavLink>
        </Link>
      </NavLinks>

      <RightSection>
        <SocialIcons>
          <a href="https://www.tiktok.com/@etecterezinha">
            <AiOutlineTikTok />
          </a>
          <a href="https://www.instagram.com/etecterezinha/">
            <BiLogoInstagramAlt />
          </a>
          <a href="https://www.youtube.com/@EtecTerezinha">
            <BsYoutube />
          </a>
          <a href="https://www.facebook.com/EtecTerezinha">
            <FaFacebookF />
          </a>
        </SocialIcons>

        <RightSectionButtons>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          {user ? (
            <LoginButton theme={theme} onClick={handleLogout}>Logout</LoginButton>
          ) : (
            <LoginButton theme={theme} onClick={() => navigate("/login")}>Login</LoginButton>
          )}
          <MobileMenuButton onClick={() => setOpen(!open)}>☰</MobileMenuButton>
        </RightSectionButtons>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar