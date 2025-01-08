import { useState } from "react";

export default function Text() {

const [text, setText] = useState('')
const [greenText, setGreenText] = useState({pirmas: '', antras:  '', trecias: ''});
const handleText = e => {
    setText(e.target.value);
    console.log(e.target.value);
    
}

const handleGreenText = e => {
    const {name, value} = e.target;
    setGreenText(gt => ({...gt, [name]: value}))
}

    return(
        <>
            <input type="text" onChange={e => handleText(e)} value={text} />
            <input type="text" className="green" name="pirmas" value={greenText.pirmas}  onChange={handleGreenText}/>
            <input type="text" className="green" name="antras"  value={greenText.antras} onChange={handleGreenText}/>
            <input type="text" className="green" name="trecias" value={greenText.trecias} onChange={handleGreenText} />
        </>
    );
}