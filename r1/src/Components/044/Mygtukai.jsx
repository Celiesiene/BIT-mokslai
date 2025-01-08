import { useState } from 'react';

export default function Mygtukai() {
    const [color, setColor] = useState('blue'); // Pradinė kvadrato spalva
    const [size, setSize] = useState(5); // Pradinis skaičius

    return (
        <>
            <div className="mygtukai">
                <button 
                    className="green" 
                    onClick={() => {
                        setColor('green'); // Nustato spalvą į žalią
                        setSize(5); // Atstato skaičių į 5
                    }}
                >
                    Pažaliuoti
                </button>
                <button className="red" onClick={() => setColor('red')}>Paraudonuoti</button>
                <button className="yellow" onClick={() => setSize(c => c + 1)}>+1</button>
            </div>

            <div 
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color, // Naudojama būsena, norint keisti spalvą
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px',
                }}
            >
                {size}
            </div>
        </>
    );
}