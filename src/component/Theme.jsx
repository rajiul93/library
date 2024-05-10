import { useEffect, useState } from "react";

 

const Theme = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
  
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  
    return (
        <div onClick={handleToggle}>
            <input type="checkbox" className="toggle toggle-warning"  />
 
        </div>
    );
};

export default Theme;