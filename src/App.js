import DashBoard from './Components/DashBoard';
import MenuBar from './Components/MenuBar';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <div className="body-container">
        <MenuBar/>
        <div className="main-container">
          <NavBar/>
          <DashBoard/>
        </div>
      </div>
    </>
  );
}

export default App;
