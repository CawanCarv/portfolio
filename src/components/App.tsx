import Inicio from './sections/Inicio';
import Projetos from './sections/Projetos';
import Sobre from './sections/Sobre';
import Menu from './template/Menu';

function App() {
  return (
    <div id='App'>
      <Menu />
      <main>
        <Inicio />
        <Sobre />
        <Projetos />
      </main>
    </div>
  );
}

export default App;
