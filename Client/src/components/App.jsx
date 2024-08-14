import { Outlet } from "react-router-dom";
import {Entry} from './index'
function App() {
  return (
    <>
      <Entry />
      <Outlet/>
    </>
  );
}

export default App;
