import './App.css';
import Navbar from './components/Navbar.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="Homepage">
        <header >
            <div className='title'>
                <img src={require("./images/Logo Chti'frite.png")} alt="Logo" />
                <h1>La Chti'frite</h1>
                <h2>La frite traditionelle du Nord</h2>
            </div>
        </header>
        <section className='AboutUs'>
            <div>
                <h2>Qui sommes-nous ?</h2>
                <p>A Chti'Frite, in est amoureux de l'cuisine du Nord, et chaque plat qu'in prépare, ch'est eune fête de l'tradition culinaire ch'ti. In est là, toute eul' équipe dévouée, à s'bouger pour te donner eune expérience gastronomique qui t'reste in tête, qu'in t'emporte direct'mint dins ches rues bourdonnantes ed'vie à Lille. Cha, ch'est pas juste des bouchées, ch'est des p'tits voyaches dins l'monde culinaire ed'chez nous.</p>
            </div>
            <img src={require("./images/peel-the-potato.jpg")} alt="Un home qui épluche des pommes de terres" />
        </section>
        <section className='BestSales'>
            <h2>Nos meilleures ventes</h2>
            <div className='productContainer'>
                <Link to="/Chti-Frite/menu">
                    <div className='product'>
                        <p>La Barquette</p>
                        <img src={require("./images/french-fries_barquette.jpg")} alt="Des Frites" />
                    </div>
                </Link>
                <Link to="/Chti-Frite/menu">
                    <div className='product'>
                        <p>Le Burger</p>
                        <img src={require("./images/hamburger.jpg")} alt="Un Burger" />
                    </div>
                </Link>
                <Link to="/Chti-Frite/menu">
                    <div className='product'>
                        <p>L'Américain</p>
                        <img src={require("./images/americain.jpg")} alt="Un Américain" />
                    </div>
                </Link>            
            </div>
        </section>
        <section className='Engagements'>
            <h2>Nos engagements</h2>
            <div className='Images'>
                <div>
                    <img src={require("./images/potatoes.jpg")} alt="Des patates naturelles et 100% française" />
                    <h3>Pommes de terres 100% françaises</h3>
                </div>
                <div>
                    <img src={require("./images/farmer.jpg")} alt="Roger, notre fermier partenaire" />
                    <h3>Des agriculteurs partenaires</h3>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}

export default App;
