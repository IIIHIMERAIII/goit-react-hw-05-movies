import { Container, Nav } from "./styled";

<Nav className={isActive =>
    "nav-link" + (!isActive ? " unselected" : "")
} />

export const Header = () => {
    return (
        <Container>
            <header>
                <nav>
                    <Nav to="/">Home</Nav>
                    <Nav to="/movies">Movies</Nav>
                </nav>
            </header>
        </Container>
    )
};