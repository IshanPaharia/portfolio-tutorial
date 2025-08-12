import { useEffect, useState } from "react"
import {Sun, Moon} from "lucide-react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false)
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true)
        }
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true)
        }
    }, [])

    return (
        <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-card/50 transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300"/>
            ) : (
                <Moon className="h-5 w-5 text-foreground" />
            )}
        </button>
    )
}