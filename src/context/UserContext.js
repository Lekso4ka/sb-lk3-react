import { createContext } from "react";

export const UserCtx = createContext({
    token: "",
    user: "",
    setToken: () => {},
    setUser: () => {}
});

export const UserValue = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac",
    user: localStorage.getItem("user") || "",
    setUser: (id) => {
        this.user = id;
        localStorage.setItem("user", id);
    }
}