import ReactDOM from 'react-dom';
import createRoutes from './collection/route';

const routes = createRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);