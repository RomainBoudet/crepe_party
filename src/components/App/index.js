// == Import npm
import React from 'react';

// == Import
import Header from '../Header';
import Step from '../Step';
import Ingredients from '../Ingredients';
import Footer from '../Footer';

import './styles.scss';

// == Composant
const App = () => (
  <main className="app">

    <Header />
    <Ingredients />
    <Step />
    <Footer />

  </main>
);

// == Export
export default App;
