/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useCallback, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const usersContex = createContext({
    user: "",
    appointments: [],
    registerUser: async () => {},
    loginUser: async () => {},
    getAppointment: async () => {},
    cancelAppointment: async () => {},
    createAppointment: async () => {},
    logOut: () => {},
});

export const UsersProvider = ({children}) => {

    const [user, setUser] = useState(localStorage.getItem("userId") || false);
    const [appointments, setAppointments] = useState([]);

    const registerUser = async (datas) => {
        const { data } = await axios.post("http://localhost:3001/users/register", datas);
        return data;
    };

    const loginUser = async (datas) => {
        const { data } = await axios.post("http://localhost:3001/users/login", datas)
        localStorage.setItem("userId", data.user.id)
        setUser(data.user.id)
        return data;
    };


    const getAppointment = useCallback(async (id) => {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        setAppointments(response.data.appointments)
        return response
    }, [setAppointments])

    const cancelAppointment = useCallback(async (id) => {
        await axios.put(`http://localhost:3001/appointments/cancel/${id}`)
    }, [])

    const createAppointment = async (datas) => {
      await axios.post(`http://localhost:3001/appointments/schedule`, datas)
    }

    const logOut = () => {
        localStorage.removeItem("userId");
        setUser(false);
        setAppointments([]);

    }

    const value = {
        user,
        appointments,
        registerUser,
        loginUser,
        getAppointment,
        cancelAppointment,
        createAppointment,
        logOut,
    };

    return(
        <usersContex.Provider value={value}>
            {children}
        </usersContex.Provider>
    );

}