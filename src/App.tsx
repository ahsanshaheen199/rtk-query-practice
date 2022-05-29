import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import {useAppDispatch} from "./app/hooks";
import {useEffect} from "react";
import {setUser} from "./features/authSlice";


function App() {
    const dispatch = useAppDispatch();

    const user = JSON.parse(localStorage.getItem("user")  || "{}" );

    useEffect( () => {
        dispatch(setUser(user));
    }, [user] )

  return (
    <div className="App">
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
