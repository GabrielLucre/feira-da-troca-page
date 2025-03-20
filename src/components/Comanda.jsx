import CryptoJS from "crypto-js";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Tilt from 'react-vanilla-tilt';
import styled from 'styled-components';

const secretKey = import.meta.env.VITE_SECRET_KEY;

const ComandaContainer = styled.div`
  width: 100%;
  max-width: 310px;
  margin: 16rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardComanda = styled.div`
  background-color: #f9f9f9;
  box-shadow: 1px 1px 50px 1px rgba(0, 0, 0, 0.192);
  border-radius: 10px;
  color: #12222a;
  font-family: "Alata", Arial;
  font-size: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 500px;
  width: 310px;
`;

const ComandaImage = styled.svg`
  width: 168px;
  height: 168px;
  margin: 25px;
`;

const QrID = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EscaneieText = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
`;

const OtherInfos = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  width: 100%;
  background-color: #12222a;
  color: #f9f9f9;
  border-radius: 0 0 8px 8px;
  padding: 30px 20px;
  gap: 20px;
`;

const InfoText = styled.p`
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InputNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Comanda = () => {
  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    const encryptedData = sessionStorage.getItem("user");

    if (encryptedData) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      try {
        const user = JSON.parse(decryptedData);
        setStoredUser(user);
      } catch (error) {
        console.error("Erro ao tentar parsear JSON:", error);
      }
    }
  }, []);

  return (
    <ComandaContainer id="minhaComanda">
      <Tilt
        options={{
          max: 90,
          scale: 2,
          perspective: 50000,
        }}
        style={{ padding: 0, borderRadius: "10px" }}
      >
        <CardComanda>
          <QrID>
            <p style={{ marginTop: "20px" }} >{storedUser ? storedUser.id : "F000"}</p>
            <ComandaImage>
              <QRCode
                value="https://criptoetec.web.app/"
                size={168}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </ComandaImage>
            <EscaneieText>Escaneie com uma câmera</EscaneieText>
          </QrID>
          <OtherInfos>
            <InfoText>{storedUser ? storedUser.saldo : "0"} ETC</InfoText>
            <InputNameContainer>
              <span>{storedUser ? storedUser.nome : "Nome aqui"}</span>
            </InputNameContainer>
          </OtherInfos>
        </CardComanda>
      </Tilt>
    </ComandaContainer>
  );
};

export default Comanda;
