
const StartButton = ({ handleClick }) => {
    return (
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'center' }}>
            <button onClick={handleClick} style={{ height: '56px', width: '256px', backgroundColor: '#12121F', color: '#BDBDBD', fontSize: '36px', borderInline: 'none', border: 'solid 1px #BDBDBD', borderRadius: '4px', }}>
                Comenzar
        </button>
        </div>
    )
}

export default StartButton