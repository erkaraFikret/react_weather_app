import React, { useState } from 'react'
import axios from 'axios';


function Form({setInfo, setState}) {
    const [city, setCity] = useState("")
    

    const handleChange = async () => {
        const api = "9b4b5a3447adcbb955b05e5d93be8b91"
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
        await axios(baseUrl)
        .then(res => setInfo(res.data))
        setState(true)
        
        
    }
    return (
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
                <div className="form">
                    <input value={city} className='inputText' type="text" placeholder='Şehri Giriniz' onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="btnDiv">
                    <button type='submit' className='btn'>Hava Durumunu Göster</button>
                </div>
            </form>
        </div>
    )
}

export default Form