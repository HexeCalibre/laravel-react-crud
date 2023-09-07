import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewComponent from './components/ViewComponents.jsx'
import Events from './components/EventComponent.jsx'
import ClickCount from './components/ClickCountComponent.jsx'
import Welcome from './components/WelcomeComponent.jsx'
import PageLinks from "./parts/PageLinks.jsx";
import CreateUser from "./components/CreateUser.jsx";
import UseEffectComponent from "./components/UseEffectComponent.jsx";
import UserList from "./pages/UserList.jsx";
import View from "./pages/View.jsx";
import Create from "./pages/Create.jsx";
import Description from "./pages/Description.jsx";
import CreateTest from "./pages/CreateTest.jsx";

function App() {
  return (
    <>
      <PageLinks />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<ViewComponent />} />
            {/* <Route path="events" element={<Events />} /> */}
            {/* <Route path="clickcount" element={<ClickCount />} /> */}
            {/* <Route path="welcome" element={<Welcome />} /> */}
            <Route path="createnewuser" element={<CreateUser />} />
            {/* <Route path="useeffect" element={<UseEffectComponent />} /> */}
            <Route path="userlist" element={<UserList />} />
            <Route path="view" element={<View />} />
            <Route path="create" element={<Create />} />
            <Route path="description/:id" element={<Description />} />
            <Route path="create-test" element={<CreateTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
