import Title from './title'
import StartButton from './startButton'

const Menu = ({ handleClick }) => {
    return (
        <div>
            <Title />
            <StartButton handleClick={handleClick} />
        </div>
    )
}

export default Menu