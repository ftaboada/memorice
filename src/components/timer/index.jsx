import { useState , useEffect} from "react"
import {scaleLinear} from 'd3-scale'

const Timer = ()=>{
    const [counter, setCounter] = useState(3000)
    const [color, setColor] = useState('#000')

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 100);
        const newColor = scaleLinear().domain([300,110,100,0]).range(['#7DDE92', '#F9C784','#EA1D76' ,'#EF2D56'])
        setColor(newColor(counter))
      }, [counter]);
    
    return (
        <div style={{width:'100vw', display:'flex', justifyContent:'center', margin:'24px 0px 4px 0px'}}>
            <p style={{color:'#FAFAFF', fontFamily:'Arial', fontSize:'26px', fontWeight:100 }}>
                Time left:{' '} 
                <span style={{color:color, fontFamily:'Arial', fontSize:'26px', fontWeight:100 }} >
                {counter.toString().substring(0,3)+'.'+counter.toString().substring(3,4)}
                </span>
            </p>
        </div>
    )
}
export default Timer