import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const routeElements = useRoutes(routes)
  return (
    <Fragment>
      {routeElements}
    </Fragment>
  );
}

export default App;
