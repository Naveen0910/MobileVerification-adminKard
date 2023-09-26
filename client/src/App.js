import {
  BrowserRouter as Main,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import PhoneNumberInput from "./Pages/PhoneNumberInput";
import OtpVerification from "./Pages/OTPVerification";
import { OtpProvider } from "./Context/context";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <OtpProvider>
      <Main>
        <Routes>
          <Route path="/" exact index={true} element={<PhoneNumberInput />} />
          <Route path="/verifyOTP" exact element={<OtpVerification />} />
          <Route path="/landingpage" exact element={<LandingPage />} />
        </Routes>
      </Main>
    </OtpProvider>
  );
};

export default App;
