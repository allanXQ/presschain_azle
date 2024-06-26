import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "components/Layouts/RootLayout";
import Login from "./pages/Auth/login";
import Logout from "./pages/Auth/logout";
import Register from "./pages/Auth/register";
import ForgotPassword from "./pages/Auth/forgotPassword";
import MessageModal from "./components/messages";
import HomeLayout from "./components/Layouts/HomeLayout";
import Profile from "./pages/Profile";
import { ThemeProvider } from "@mui/material";
import useStyledTheme from "./Hooks/useStyledTheme";

function App() {
  const theme = useStyledTheme();
  return (
    <ThemeProvider theme={theme}>
      <MessageModal />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<HomeLayout />}>
          <Route path="home" element={<Home />} />
          {/* <Route path="about" element={<AboutUs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} /> */}
        </Route>

        {/* <Route path="logout" element={<Logout />} />
        <Route element={<RootLayout />}>
          <Route path="profile" element={<Profile />} />
        </Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
