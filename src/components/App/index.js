// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Step from '../Step';
import Ingredients from '../Ingredients';
import Footer from '../Footer';

import './styles.scss';
import data from '../../data/recipe';
// je vais désormais faire passer des props dans l'appel de mes composants !
// Un composant n'importe rien lui même ! il recoit tous en paramétres via les props pour qu'il soit réutilisable !
// == Composant
const App = () => (
  <main className="app">
    <Header
    title={data.title}
    thumbnail={data.thumbnail}
    difficulty={data.difficulty}
    author={data.author}
    />
    <Ingredients />
    <Step
    instructions={data.instructions} />
    <Footer
    date={(new Date()).getFullYear()} 
    />

  </main>
);

// == Export
export default App;
