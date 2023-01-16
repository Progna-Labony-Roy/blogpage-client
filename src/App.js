import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SingleBlogLayout from './components/SingleBlogLayout/SingleBlogLayout';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <SingleBlogLayout></SingleBlogLayout>
    </div>
  );
}

export default App;
