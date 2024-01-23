import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { DiVTag, Container } from "./StyledComponents/styledHeader";
import "./App.css";

function App() {
  return (
    <Container>
    <DiVTag>
      <Header></Header>
      <Article></Article>
      <Footer></Footer>
    </DiVTag>
    </Container>
  );
}

export default App;
