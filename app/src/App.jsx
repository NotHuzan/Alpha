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
    // <div className='mx-auto max-w-screen-xl p-6 py-6 md:p-8 lg:p-10'>
    <div className="overflow-hidden">
      <Navbar/>
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
      <Footer />
    </div>

    // </div>
  );
}

export default App;
