import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import UnderDevelopment from "./pages/UnderDevelopment";
import GoalForm from "./pages/GoalForm";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/form" element={<GoalForm />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/underDevelopment" element={<UnderDevelopment />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
