import { useState } from "react"

function Menu(props) {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    
    return (
        <div  className={`menu flex justify-around fixed items-center h-10 w-screen mt-12 ${props.toggle ? "open" : ""}`}>
            <a onClick={handleClick("homePage")} className="menu-list text-lg">Home</a>
            <a onClick={handleClick("skills")} className="menu-list text-lg">Skills</a>
            <a onClick={handleClick("portfolio")}className="menu-list text-lg">Portfolio</a>
        </div>
    )
}

export {Menu}