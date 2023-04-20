import Perfil from "../img/Foto-perfil.jpg";
import "../styles/components/sidebar.sass";

import { SocialNetworkContainer } from "./SocialNetworks";
import { InformationContainer } from "./InformationContainer";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <img src={Perfil} alt="Foto-perfil" title="Foto-perfil" />
      <p className="title"> Aspirante Desenvolvedor Jr. </p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=fb897ca15b&attid=0.1&permmsgid=msg-f:1763021143453861785&th=187782639b120799&view=att&disp=inline&saddbat=ANGjdJ8mauWbbUCpFCotj5JSYQJ0n0D7jYEOSTiVtYRBOFJaf8s3_PgSAYL0D4ucp13uXWZJdkqhvOGwe20Cr--Xj4613t-d420zQDmc7gkgMofP8dK2BcRDwyj1r7M1dAbubwa4sK6jXc6e4Na9LH_k6UVgm8TyR82P48F6GrFCON67_pqF6tIC-RQTn7lKmscxsMtdM1bAvnwAxdZuKCWtKvhqXtWr5LYLtSJTPR6J2EmmI3laWPn_7-g31qJapChnlcqEbIiiusK1VIyK58NU2lLzq-XUVxv52WNAFlbweuVxK7_JH_9zGhm1f97kxerf6OczRA8kkazRiLnSu5IoB5MEC6e2c_U2_mwh-Iz5j29DujaxE5bzN0IaDi5LsXt-oY9Ofo9i9v6nKLmQ-9hCIJoDqNMAd2n_wKiU6eyBd6DX-wZ6jbOgBiQZyyOx-DVMu4q0v1WXfOZj4asLcKEP1EPjjX5l2J_OmNQJ5rI-23qfeIHmChEPaOoScpXSqKrChF6JonQLouN49n3tPIftJGxka23zWWPVQiRCeTLwSmywXdNHRyjIX6D3hDdsvDBwHPa5UitkIrflCrUoh7ag-G1iokAZ5ekHvgAup4U8gKjFhO7Wc8Ue1PiiiIvhQTbsMfXSz-PuSYRaU2yyxtXZIZSnWYnSMEH60PSxN619201eDSNKNnctV_uLTb2dNkkbsUDSwKKTtDRepwdOHEhIbbiIT0Y2AaOs--CLA2LFkjZCsZpRaC9NATAkBe3wNTJslzPcnaLi7h7EB1HSvMKyXXDB_M0Vy1IX9KgY-c0Inbis0WbdPakNFj2F3Km5WKM2kuQFRIfqW5pkh5nOOkE81l3szR0OzS11QDAPCCBWrSTYVpEB1kMlYN4OYmMMDzS7_QHxWzEwdpB7k8i-7JpJWlX_IKf9v7vR6gLq2qC-WblyoKQbzOLgr_tyVygMN9HWSxIhsrv2d4OdYqaKrBVDIKWH8_TqcFgUTO4FJcbilXUzRZHCQWNiv8oGPQonaWpQN_JdrHCJGy-zPD006C7Xk8aNKZU5JxxyILAzDg"
        target="_blank"
        className="btn"
      >
        Download curriculo
      </a>
    </section>
  );
};
