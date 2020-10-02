import React, {useState} from 'react'
import GoogleLogin from 'react-google-login'
import { Card, Image } from 'react-bootstrap';


const GoogleLog = () => {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({})
    const [picture, setPicture] = useState('');

    const responseGoogle = (response) => { 
        setData(response)
        setPicture(response.profileObj.imageUrl)
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }



    return (
        <div className='container'>
            {!login && <GoogleLogin
                clientId='369782595415-rss3spvia1vca7jthh9kmn6qglrav1bv.apps.googleusercontent.com'
                buttonText='Continuar con Google'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                autoLoad={false}
                cookiePolicy={'single_host_origin'}


            />} 
            {login && <Image src={picture} roundedCircle />

            }

        </div>
    )
}

export default GoogleLog;