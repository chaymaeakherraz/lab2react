import './App.css';
import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';

function App() {
  return (
    <div className="container">
      <h1>Mon TP React</h1>

      <Compteur />
      <MessageBouton />
      <FormulaireNom />
      <CompteurEffet />
    </div>
  );
}

export default App;