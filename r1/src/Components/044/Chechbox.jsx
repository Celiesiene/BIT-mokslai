import { useState } from "react"

export default function Checkbox() {
    const [cb, setCb] = useState({a: false, b: true, c: false, d: false});
    const handleCheckbox = id => {
        setCb(c => ({...c, [id]: !c[id]}))
    }
    return(
        <div>
            <input type="checkbox" id="cb_a" checked={cb.a} onChange={_ => handleCheckbox('a')}/><label htmlFor="cb_a">A</label>
            <input type="checkbox" id="cb_b" checked={cb.b} onChange={_ => handleCheckbox('b')}/><label htmlFor="cb_b">B</label>
            <input type="checkbox" id="cb_c" checked={cb.c} onChange={_ => handleCheckbox('c')}/><label htmlFor="cb_c">C</label>
            <input type="checkbox" id="cb_d" checked={cb.d} onChange={_ => handleCheckbox('d')}/><label htmlFor="cb_d">D</label>
        </div>
    )
}