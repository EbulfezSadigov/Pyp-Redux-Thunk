import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customers from './components/Customers';
import SiteHeader from './components/SiteHeader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cartReducer } from './redux/reducers/cart.reducer';
import Cart from './components/Cart';

const codeStore = createStore(cartReducer)


function App() {
  return (
    <Provider store={codeStore}>
      <SiteHeader />
      <Routes>
        <Route path='/' element={< Customers />} />
        <Route path='/cart' element={< Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
