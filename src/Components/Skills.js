import figma from "../Assets/image/figma.png";
import css from "../Assets/image/css.png";
import javascript from "../Assets/image/javascript.png";
import html from "../Assets/image/html.png";
import tailwind from "../Assets/image/tailwind.png";
import react from "../Assets/image/react.png";
import { useEffect, useState } from "react";

function Skills(params) {
   

    const skillList = [
        {
            id: "react",
            src: react,
            percent: 90,
        },
        {
            id: "tailwind",
            src: tailwind,
            percent: 90,
        },
        {
            id: "figma",
            src: figma,
            percent: 90,
        },
        {
            id: "css",
            src: css,
            percent: 90,
        },
        {
            id: "html",
            src: html,
            percent: 90,
        },
        {
            id: "javascript",
            src: javascript,
            percent: 90,
        }
    ]



    const SkillsContainer = (props) => {

        const [hover, setHover] = useState({ishover: false, nothover: true});

        const hoverFun = () => {
            const Hov = {...hover}
            Hov.ishover = !Hov.ishover
            Hov.nothover = !Hov.nothover
            setHover(Hov)
            console.log('bob');
        }

        const progressBar = () => {
            const array = []
            for (let index = 0; index < 101; index++) {
                let one =`${index}% {background: conic-gradient( $firstColor ${Math.floor(index * 2.16)}deg, $secondColor 0deg);}`;
                array.push(one)
            }
            console.log(array.join(""));
        }

        

        return (
            <div className="flex justify-center items-center mt-32">
                <div className={`skills-container w-32 h-32 m-auto rounded-full flex ${hover.ishover? `isHover${props.index}` : ""}`} >
                
                </div>
                <div className="skills-inside-back w-24 h-24 m-auto rounded-full absolute">
                <div onMouseEnter={hoverFun} onClick={progressBar} onMouseLeave={hoverFun} className="skills-inside w-24 h-24 m-auto rounded-full flex" style={{backgroundImage: `url(${props.src})`}}>
                
                </div>
                </div>
            </div>
        )
    }

    return(
        <div id="skills-section" className="Skills text-center">
            <h1 className="text-5xl mt-40">Skills</h1>
            <div className="skills grid grid-cols-2 gap-y-4 md:grid-cols-3">
                {skillList.map((value, index) => (
                    <SkillsContainer src={value.src} percent={value.percent} index={index}/>
                ))}
            </div>
        </div>
    )
}

export {Skills}