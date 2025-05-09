import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultInput } from "./components/DefaultInput";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import "./styles/global.css";
import "./styles/theme.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>
          <Menu />
        </Heading>
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="task"
              id="meuInput"
              type="text"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
            <Cycles />
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
