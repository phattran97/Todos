import './App.css';
import Todo from './pages/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Todo />
    </div>
  );
}

export default App;
