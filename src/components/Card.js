import React from 'react'
import './Card.css'


let Card = () => {
    let [img,setImg] = React.useState('https://lp-cms-production.imgix.net/news/2019/02/elysium.jpg')
    let randomNum = Math.floor(Math.random()*100);
    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res =>res.json())
        .then(response=>setImg(response.data.memes[randomNum].url))
        
    },[])

    return (
    <div className='card'>
        <img className='img' src={img} alt='elysium'></img>
        <div className = 'info'>
        <h2>prices</h2>
        </div>
        <div className='submission'>
        <button omClick={setImg}>purchase</button>
        </div>
    </div>
    )
}

export default Card