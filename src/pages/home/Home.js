import { Link } from "react-router-dom"
import styled from "styled-components"

export function Home() {
    return (
        <Container className="container">
            <div className="row justify-content-center">
                <div className="col-sm text-center">
                    <h1 className="titulo display-4">Calhas Cardoso</h1>
                    <h6 className="subtitulo">Comércio de calhas, rufos, chaminés e materiais de construção</h6>
                </div>
                <div className="mb-5 text-center" >
                    <Link className="btn btncolor" data-bs-toggle="modal" data-bs-target="#botaocotacao" to="/">Solicitar Cotação</Link>
                    {/* Modal */}
                    <div className="modal fade" id="botaocotacao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Solicitar Cotação</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* Itens dentro do modal */}
                                    <form>
                                    <div className="mb-3">
                                            <label for="exampleInputUser1" className="form-label">Nome Completo</label>
                                            <input type="username" className="form-control" id="exampleInputUser1" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPhone1" className="form-label">Número de telefone</label>
                                            <input type="tel" className="form-control" id="exampleInputPhone1"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Endereço de e-mail</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Descrição (O que precisa solicitar)</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">Evite incluir informações confidenciais que você não quer compartilhar com esta empresa.</div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="sumbit" className="btn btnenviar" data-bs-dismiss="modal">Enviar</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* Fim modal */}
                </div>
            </div>
        </Container> 
    )
}

export const Container = styled.div `
    .titulo {
        color: #5F9BCE;
        font-weight: bold;
    }

    .subtitulo {
        color: black;
    }

    .btncolor {
        padding: 20px;
        padding-inline: 75px;
        background-color: #5F9BCE;
        color: white;

        :hover {
            background-color: #395d7b;
        }
    }

    .btnenviar {
        background-color: #5F9BCE;
        color: white;

        :hover {
            background-color: #395d7b;
        }
    }
`