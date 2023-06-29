import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';

createBrowserRouter([
  { path: '/', element: <HomePage /> }, // property for main page example.com/
  {},
]);
function App() {
  return <div></div>;
}

export default App;
