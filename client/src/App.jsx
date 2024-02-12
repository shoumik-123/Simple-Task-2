import HomePage from "./pages/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="user/:id" element={<UserDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
