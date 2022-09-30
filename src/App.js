import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customers from './components/Customers';
import SiteHeader from './components/SiteHeader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import customerReducer from './redux/reducers/customerReducer';
import FormCustomer from './components/Form';

const codeStore = createStore(customerReducer, applyMiddleware(thunk))


function App() {
  return (
    <Provider store={codeStore}>
      <SiteHeader />
      <Routes>
        <Route path='/' element={< Customers />} />
        <Route path='/form' element={< FormCustomer/>} />
      </Routes>
    </Provider>
  );
}

export default App;
