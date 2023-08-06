import { Box } from "@mui/material"
import portfolio1 from "../Assets/image/portfolio1.jpeg"
import portfolio2 from "../Assets/image/portfolio2.jpeg"
import portfolio3 from "../Assets/image/portfolio3.jpeg"

const portfolioList = [
    {
        id: "Maki",
        title: "Maki",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.",
        src: portfolio1,
        link: "https://fr.wikipedia.org/wiki/L%C3%A9mur_catta"
    },
    {
        id: "Baobab",
        title: "Baobab",
        description: "audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        src: portfolio2,
        link: "https://fr.wikipedia.org/wiki/Baobab_africain"
    },
    {
        id: "Toamasina",
        title: "Toamasina",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        src: portfolio3,
        link: "https://fr.wikipedia.org/wiki/Toamasina" 
    },
]



function PortFolio() {
    const Container = (props) => {
        return (
            <a href={props.link} className="flex flex-col w-3/4 mx-auto portfolio my-24 md:flex-row md:text-left md:w-2/3">
                    <img src={props.src}/>
                    <div className="px-4 pb-4 md:px-2 md:pt-8">
                    <h2 className="text-3xl mb-2 mt-1 md:mb-12 md:text-5xl">{props.title}</h2>
                        <p className="text-xl text-justify">{props.description}</p>
                    </div>
            </a>
        )
    }


    return (
        <div id="portfolio-section" className={` text-center mt-52`}>
            <h1 className={`text-5xl `}>PortFolio</h1>
            <div className="mt-24">
                {portfolioList.map((value, index) => (
                    <Container 
                        title={value.title} 
                        description={value.description}
                        link={value.link}
                        src={value.src}/>
                ))}
            </div>
        </div>
    )
}

export {PortFolio}