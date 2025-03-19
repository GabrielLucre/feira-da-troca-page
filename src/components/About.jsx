import styled from 'styled-components';
import HandShake from '../assets/handshake.png';

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 14rem auto;
  flex-direction: row;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    padding: 3rem 1rem;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: left;

  @media (max-width: 1200px) {
    order: 2;
    text-align: center;
  }
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 2rem;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  img {
    margin-left: 3rem;
    max-width: 105%;
    height: auto;
  };

  @media (max-width: 1200px) {
    order: 1;
    width: 100%;
    max-width: 400px;
    justify-content: center;
    margin-right: 3rem;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContent>
        <AboutTitle id="projeto">Sobre o Projeto</AboutTitle>
        <AboutText>
          A <strong>Feira da Troca</strong> é uma iniciativa que promove a economia
          sustentável e a reutilização de itens. Aqui, você pode trocar objetos que não usa mais
          por algo que realmente precisa, contribuindo para a redução do desperdício.
        </AboutText>
        <AboutText>
          🌱 Incentivamos o consumo consciente <br />
          ♻️ Reduzimos o desperdício <br />
          🤝 Criamos conexões entre as pessoas
        </AboutText>
        <AboutText>
          Por isso, traga produtos para a escola <a href="https://www.bing.com/maps?&ty=18&q=ETEC%20teresinha%20monteiro%20dos%20santos&ss=ypid.YN7993x13667548945203040308&mb=-23.525048~-49.255217~-23.537265~-49.236056&description=Rua%20S%C3%A3o%20Benedito%20484%20%28Centro%29%2C%20Taquarituba%2C%20SP%C2%B7Ensino%20m%C3%A9dio&cardbg=%2388979C&dt=1740873600000&tt=Etec%20Professora%20Terezinha%20Monteiro%20dos%20Santos&tsts0=%2526ty%253D18%2526q%253DETEC%252520teresinha%252520monteiro%252520dos%252520santos%2526ss%253Dypid.YN7993x13667548945203040308%2526mb%253D-23.525048~-49.255217~-23.537265~-49.236056%2526description%253DRua%252520S%2525C3%2525A3o%252520Benedito%252520484%252520%252528Centro%252529%25252C%252520Taquarituba%25252C%252520SP%2525C2%2525B7Ensino%252520m%2525C3%2525A9dio%2526cardbg%253D%25252388979C%2526dt%253D1740873600000&tstt0=Etec%20Professora%20Terezinha%20Monteiro%20dos%20Santos&cp=-23.53078~-49.245733&lvl=18.975445&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027" target="_blank" rel="noopener noreferrer">
            ETEC Terezinha Monteiro dos Santos
          </a>, participe da Feira da Troca e ajude a criar um ciclo sustentável de consumo!
        </AboutText>

        <AboutText>
          📅 Data: 03 de julho <br />
          📍 Local: Rua São Benedito 484, Taquarituba, SP <br />
          🎁 O que doar? Roupas, livros, eletrônicos e objetos em bom estado.
        </AboutText>
      </AboutContent>
      <AboutImageContainer>
        <img src={HandShake} alt="Imagem representando a troca" />
      </AboutImageContainer>
    </AboutSection>
  );
};

export default About;
