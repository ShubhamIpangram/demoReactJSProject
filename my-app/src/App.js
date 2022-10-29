import './App.css';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';

//let name = "Shubham"

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About"> </NavBar>
      <div class="container my-3">

        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;

