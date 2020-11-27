import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
    	<Header />
      	<Switch >
      		<Route exact path='/' component={Homepage} />
      		<Route path='/shop' component={ShopPage} />
      	</Switch >
    </div>
  );
}

export default App;
