import 'windi.css';
import './app.css';
import { ServiceProvider, services } from './service';

const App = props => {
    return <ServiceProvider value={services}>{props.children}</ServiceProvider>;
};

export default App;
