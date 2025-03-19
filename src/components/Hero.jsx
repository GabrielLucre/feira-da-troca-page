import styled from 'styled-components'
import Money from '../assets/money-jar.png'

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 1rem auto;
  flex-direction: row;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    padding: 3rem 1rem;
  }
`

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: left;
  
  @media (max-width: 1200px) {
    order: 2;
    text-align: center;
  }
`

const HeroTitle = styled.h1`
  font-size: 4.6rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.7;
  margin-bottom: 2rem;
`

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  img {
    max-width: 110%;
    height: auto;
  };

  @media (max-width: 1200px) {
    margin-left: 2rem;
    order: 1;
    width: 100%;
    max-width: 500px;
    justify-content: center;
  }
`

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle>
          Projeto<br />
          Feira da<br />
          Troca
        </HeroTitle>
        <HeroSubtitle>
          Troque itens que já não tem utilidade<br />
          para você, mas que podem ser de<br />
          grande valor para outra pessoa.
        </HeroSubtitle>
      </HeroContent>
      <HeroImageContainer>
        <img src={Money} alt="Imagem simbolizando o dinheiro" />
      </HeroImageContainer>
    </HeroSection>
  )
}

export default Hero