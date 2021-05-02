import { useState } from "react"
import CardContainer from "../components/CardContainer"
import Timer from "../components/timer"
import Menu from '../components/menu'


const Game = () => {
    const [gameOver, setGameover] = useState(false)
    const [start, setStart] = useState(false)
    const handleGameOver = (a) => {
        setGameover(a)
        setTimeout(() => {
            setStart(false)
            setGameover(false)
        }, 3000)
    }
    const handleStart = () => {
        setStart(true)
    }
    if (!start) {
        return <div>
            <Menu handleClick={handleStart} />
        </div>
    }
    return (
        <div>
            {gameOver && <div style={{
                position: 'absolute',
                width: '100vw', zIndex: 1000,
                backgroundColor: '#121226',
                borderTop: 'solid 1px #BDBDBD',
                borderBottom: 'solid 1px #BDBDBD',
                margin: '10% 0px 0px 0px',
            }}> <h1 style={{
                color: "#DADADF",
                fontFamily: "Arial",
                fontSize: "26px",
                fontWeight: 100,
                textAlign: 'center',
                padding: '64px',
            }}>Game Over</h1></div>}
            <Timer setGameOver={handleGameOver} />
            <CardContainer gameOver={gameOver} />
            :<div></div>
        </div>
    )
}
export default Game