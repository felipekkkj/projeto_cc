import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png"
import styled from "styled-components";

export function Navbar() {
    return (
      <Container>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-1 mb-5 bg-body rounded">
    <div className="container">
    <Link className="navbar-brand calhastexto" to="/">
      Calhas Cardoso
      {/* <img src={logo} alt="Logo Calhas Cardoso" width="259px" height="38px" /> */}
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link itens" to="/quemsomos"><span className="bi-person" /> Quem somos</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link itens" href="tel:+55-99-9999-9999" target="blank"><span className="bi-telephone" /> Ligar Agora</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link itens" to="https://www.google.com/maps/place/Calhas+Cardoso/@-26.764814,-51.0204852,18z/data=!3m1!4b1!4m5!3m4!1s0x94e6c9f607fc4ab7:0x7579e1bfa4e3e5b3!8m2!3d-26.7648164!4d-51.0193882?hl=pt-BR" target="_blank"><span className="bi-arrow-90deg-right" /> Ver Rotas</Link>
        </li>
      </ul>
    </div>
    </div>
        </nav>
      </Container>
    )
}

export const Container = styled.div `

      .calhastexto {
        color: #5F9BCE;
        font-weight: bold;
        font-size: 1.5rem;
      }

      .itens {
        color: #5F9BCE;
        font-weight: 500;
        font-size: 17px;
        margin-left: 20px;

        :hover {
          color: #395d7b;
        }
      }

`