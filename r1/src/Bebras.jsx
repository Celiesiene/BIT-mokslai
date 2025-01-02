export default function Bebras() {
    let A = 6

    if (A > 5){
        A = 10
    }
    const func = _ =>{
        return 'Labas'
    }
    return (
        <>
               <h2>Bebras {func()}</h2>
               <p>yra gražus</p>
               <p>Bebras yra {A > 4 ? 'Senas' : 'Jaunas'} metų</p>
        </>
    
)
}