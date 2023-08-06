import { Box, Button} from "@mui/material"
import { Icon } from "../Assets/icon/Icon"
import dev from "../Assets/image/Static assets-amico(3).png"
import contact from "../Assets/image/whatsapp.jpg"
import { useState } from "react"


function Homepage(props) {
  const [overlay, setOverlay] = useState(false);

  const openOverlay = () => {
    console.log('Overlay');
    setOverlay(!overlay)
  }


  let style = {
    display: overlay ? "flex" : "none"
  }

    return (
        <Box id="homePage-section" className='h-screen flex pt-40 homepage'>
          <div className='flex flex-col text-center mx-auto h-1/2 justify-around  Homepage-presentation md:text-left md:ml-16 md:h-3/4'>
            <p className='text-xl md:text-2xl'>Hi, my name is</p>
            <div>
              <h1 className='dakouma text-5xl md:text-6xl font-black'>
          
                <span className="letter d">&lt;D</span>
                <span className="letter a">A</span>
                <span className="letter k">K</span>
                <span className="letter o">O</span>
                <span className="letter u">U</span>
                <span className="letter m">M</span>
                <span className="letter a">A</span>
                <span className="bar1">/</span>
                <span>&gt;</span>
                <span className="tap"></span>
              </h1>
              <p className='text-2xl md:text-3xl'>Front-End Developer</p>
            </div>
            <p className='text-2xl md:text-3xl'>I build things for the web</p>
            <div className=' flex justify-between w-3/5 mx-auto Homepage-social md:mx-0'>
              <div onClick={openOverlay} className={`overlay fixed top-0 right-0 bottom-0 left-0 z-10`} style={style}>
                <img src={contact} className="h-3/4 m-auto"/>
              </div>
              <a href='mailto:ramerison.anselme@gmail.com'><Icon rendue={"envelope"} fill={props.darkMode.boolean ? "#127390" : "#4593ab"} size={{w:"20px", h:"20px"}}/></a>
              <a href='#'><Icon rendue={"instagram"} fill={props.darkMode.boolean ? "#127390" : "#4593ab"} size={{w:"20px", h:"20px"}}/></a>
              <a href='https://www.linkedin.com/in/anselme-ramerison-066999186/'><Icon rendue={"likedin"} fill={props.darkMode.boolean ? "#127390" : "#4593ab"} size={{w:"20px", h:"20px"}}/></a>
              <a className="cursor-pointer" onClick={openOverlay}><Icon rendue={"whatsapp"} fill={props.darkMode.boolean ? "#127390" : "#4593ab"} size={{w:"20px", h:"20px"}}/></a>
            </div>
          </div>
          <div className="absolute image-dev bottom-0 right-0 w-80 md:right-16 md:bottom-8 md:w-1/3 ">
            <img className="" src={dev}/>
          </div>
        </Box>
    )
}

export {Homepage}