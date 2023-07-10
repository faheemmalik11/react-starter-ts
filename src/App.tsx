// Plugins Import
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components Import
import routes from './config/routes';

// Extra Imports
import './App.css';

const App: FC<object> = props => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          console.log('route:', route);

          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component name={route.name} {...props} {...route.props} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
