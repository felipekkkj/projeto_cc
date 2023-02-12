import styled from "styled-components"

export function Footer() {
    return (
        <Container>
            <footer>
            <small>© 2023 Calhas Cardoso. Todos os direitos reservados.</small>
            </footer>
        </Container>
    )
}

export const Container = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height:25px;
    text-align: center;
    background-color: #5F9BCE;
    color: white;
`