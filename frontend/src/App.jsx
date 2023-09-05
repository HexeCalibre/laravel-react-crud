import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './components/ViewComponents.jsx'
import Events from './components/EventComponent.jsx'
import ClickCount from './components/ClickCountComponent.jsx'
import Welcome from './components/WelcomeComponent.jsx'
import PageLinks from "./parts/PageLinks.jsx";
import CreateUser from "./components/CreateUser.jsx";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
