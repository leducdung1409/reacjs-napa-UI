import { Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './routes/route';
import { getKey } from './helper/get';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav> */}
      <Routes>
        {routes.map((route) => (
          <Route key={getKey()} path={route.path} element={
            <route.element>
             <route.children/>
            </route.element>
          } />
        ))}

      </Routes>
    </div>
  );
}

export default App;
