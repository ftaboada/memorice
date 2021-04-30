import Card from './card'


const CardContainer = ()=>{
    const cards = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    return (
        <div style={{display:'flex', width:'100vw', justifyContent:'center', margin:'24px 0px 0px 0px'}}>
        <div style={{
            height:'620px',
            width:'920px',
            backgroundColor:'#2A2A2A',
            borderRadius:'4px',
            border:'solid 1px #353535',
            padding:'12px',
            display:'flex',
            flexFlow:'row wrap',
            justifyContent:'center',
            alignContent:'center'
        }}>
            {cards.map((x,idx)=>{
                return<Card key={idx} idx={idx}/>
            })}
            
        </div>
        </div>
    )
}
export default CardContainer