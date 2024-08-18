import { Outlet } from "react-router-dom";
import {Entry} from '../pages/index'
function App() {
  return (
    <>
      <Entry />
      <Outlet/>
    </>
  );
}

export default App;
