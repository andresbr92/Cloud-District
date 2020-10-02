import React, {useState} from 'react'
import GoogleLogin from 'react-google-login'


const GoogleLog = () => {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({})
    const [picture, setPicture] = useState('');

    const responseGoogle = (response) => { 
        setData(response)
    }



    return (
        <div className='container'>
            {!login }

        </div>
    )
}

export default GoogleLog;