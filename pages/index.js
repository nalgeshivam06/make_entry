
import { Provider } from 'react-redux';
import Home from '../src/Components/Home';
import { createStore } from 'redux';
import rootReducer from '../src/Reducers';
const store = createStore(rootReducer);



function App() {
  return (
    <>

    <Provider store={store}>
    <Home/>
    
    </Provider>
    
  </>
  );
}

export default App;
