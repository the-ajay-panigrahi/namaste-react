import { createContext, useState } from "react";

export const inputContext = createContext()

export const InputProvider = ({ children }) => {
    const [name, setName] = useState("Ajay")
    return <inputContext.Provider value={{ name, setName }}>{children}</inputContext.Provider>
}