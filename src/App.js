// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/NavBar';
import { Container } from 'react-bootstrap';
import Addtodo from './components/Addtodo';
import Displaytodoas from './components/Displaytodoas';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
   <Provider store={store}>
      <Container className='py-3'>
        <Addtodo/>
        <Displaytodoas/>
      </Container>
   </Provider>
  );
}

export default App;
