import 'windi.css';
import { Provider } from 'mobx-react';
import './app.css';

const store = {};

const App = props => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default App;
