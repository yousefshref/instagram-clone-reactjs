import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import { AuthContextProvider } from "./utlits/AuthContext";
import PrivateRoute from "./utlits/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
