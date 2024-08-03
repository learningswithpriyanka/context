import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Details from "./Details";
import NotFound from "./NotFound";
import Phone from "./Phone";
import Computers from "./Computers";
import Users from "./Users";
import UserDetails from "./UserDetails";
import AdminUser from "./AdminUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="phone" element={<Phone />} />
        <Route path="computer" element={<Computers />} />
        <Route path="details">
          <Route index element={<Details />} />
          <Route path="phone" element={<Phone />} />
          <Route path="computer" element={<Computers />} />
        </Route>
        {/* <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<AdminUser />} />
        </Route> */}
        <Route path="users/:id/:key" element={<UserDetails />} />
        <Route path="users/admin" element={<AdminUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
