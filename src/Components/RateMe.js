import  { Alert, FormControl, useFormControl} from "@mui/material"
import { useState } from "react"




function RateMe() {
    const [comment, setComment] = useState("")

    const AlertCustom = () => {
        return(
            <>
            </>
        )
    }

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you :)')
        setComment("")
    }

    return (
        <div id="rateMe-section" className="RateMe mt-40">
            <h1 className={`text-5xl text-center mb-16`}>Rate Me</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
            <textarea
            onChange={handleChange}
            className="mx-auto w-3/4 h-40 bg-transparent area md:w-1/3 md:h-60 text-xl"
            type="textarea"
            name="comment"
            value={comment}
            placeholder="By leaving a rating you will help me a lot to improve my skills. Thank you so much."/>
            <button type="submit" className="text-xl submitbtn mt-5 mx-auto">Rate</button>
            </form>
            <div className="backFoot">
            <div className="footer pb-2 pt-2 md:w-2/3 mx-auto">
                <div>
                    <h1>Adresse</h1>
                    <p className="md:text-center">Cité Procoops Lot 92-B, Toamasina 501, Madagascar</p>
                </div>
                <div>
                    <h1>Copyright</h1>
                    <p className="md:text-center">Copyright by Dakouma.ltd</p>
                </div>
            </div>
            </div>
        </div>
    )
}


export {RateMe}