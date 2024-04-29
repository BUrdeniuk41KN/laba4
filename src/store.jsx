import { createStore } from 'redux';
import StatusBarState from './Components/StatusBar/reducerBar';

const store = createStore(StatusBarState);

export default store;