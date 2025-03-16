import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import FAQs from "./pages/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";
import FreeTrial from "./pages/FreeTrial/FreeTrial";
import CompanyTeamName from "./pages/CompanyTeamName/CompanyTeamName";
import TeamInviteForm from "./pages/TeamInviteForm/TeamInviteForm";
import PaymentForm from "./pages/PaymentForm/PaymentForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/freetrial" element={<FreeTrial />} />
          <Route path="/companyname" element={<CompanyTeamName />} />
          <Route path="/teaminvite" element={<TeamInviteForm />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
