import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './components/ViewComponents.jsx'
import Events from './components/EventComponent.jsx'
import ClickCount from './components/ClickCountComponent.jsx'
import Welcome from './components/WelcomeComponent.jsx'
import PageLinks from "./parts/PageLinks.jsx";
import CreateUser from "./components/CreateUser.jsx";
import UseEffectComponent from "./components/UseEffectComponent.jsx";
import UserList from "./pages/UserList.jsx";
import Create from "./pages/Create.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <PageLinks />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<View />} />
            <Route path="events" element={<Events />} />
            <Route path="clickcount" element={<ClickCount />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="createnewuser" element={<CreateUser />} />
            <Route path="useeffect" element={<UseEffectComponent />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="create" element={<Create />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
