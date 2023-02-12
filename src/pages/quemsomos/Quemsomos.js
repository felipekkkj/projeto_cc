import styled from "styled-components"

export function Quemsomos() {
    return (
        <Container className="container">
        <div className="row justify-content-center">
            <div className="col-sm text-center">
                <h1 className="titulo display-4">Quem Somos?</h1>
                <h6 className="subtitulo">
                Nos somos um comércio de calhas, rufos, chaminés e materiais de construção.
                </h6>
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
`