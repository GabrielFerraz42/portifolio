import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/InformationContainer.sass";

export const InformationContainer = () => {
  return (
    <section className="Info">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(22) 99871-7397</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Gmail</h3>
          <p title="gabrielferraznog@gmail.com">gabrielferraznog@</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Nova Friburgo / RJ</p>
        </div>
      </div>
    </section>
  );
};
