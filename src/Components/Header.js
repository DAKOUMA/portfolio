import { Icon } from "../Assets/icon/Icon"


function Header(props) {

    const dark = props.dark
//onClick={props.darkMode.active}
    return (
        <header className={`z-10 h-12 fixed top-0 left-0 right-0 Header flex backdrop-blur-xl ${props.darkMode.boolean? "" : "headerDarkMode"}`}>
            <navbar className="flex items-center justify-between w-full mx-2">
                <a className="ml-4" onClick={props.darkMode.active}><Icon rendue={"sun"} size={{w:"20px", h:"20px"}} fill={props.darkMode.boolean ? "white" : "#4593ab"}/></a>
                <div onClick={props.toggle} className="toggle mr-2">
                <Icon rendue={"bars"} size={{w:"30px", h:"30px"}} fill={props.darkMode.boolean ? "white" : "#4593ab"}/>
                </div>
            </navbar>
        </header>
    )
}

export {Header}