import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {logout, selectAuth} from "../features/authSlice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function Dashboard() {
    const { name } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const userLogout = () => {
        dispatch(logout());
        toast.success("user logout successfully");
        navigate('/login');
    }

    return (
        <div className={"container mx-auto"}>
            <div className={"flex justify-center"}>
                <div className={"w-1/2"}>
                    <h2>Dashboard</h2>
                    <h3>Name: {name}</h3>
                    <button onClick={userLogout} className={"py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;