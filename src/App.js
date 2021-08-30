import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar className="bg-primary navbar-dark mb-5">
        <Container>
          <Navbar.Brand>Reddit search client</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
