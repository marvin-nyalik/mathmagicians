import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Layout>
              {' '}
              <Home />
              {' '}
            </Layout>
)}
        />
        <Route
          exact
          path="/quote"
          element={(
            <Layout>
              {' '}
              <Quote />
              {' '}
            </Layout>
)}
        />
        <Route
          exact
          path="/calculator"
          element={(
            <Layout>
              {' '}
              <Calculator />
              {' '}
            </Layout>
)}
        />
      </Routes>
    </Router>
  );
}

export default App;
