import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SingleBlogLayout from './components/SingleBlogLayout/SingleBlogLayout';
import AddBlog from './Pages/AddBlog/AddBlog';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <AddBlog></AddBlog>
    </div>
  );
}

export default App;
