import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import Todo from '../Todo';


export default function Dashboard() {
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    function renderElement(){
        if(userdetail){
            return <div>
                <Todo/>
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }

    return(
        <div>
            
            <p>Welcome {userdetail.name}</p>
            { renderElement() }
        </div>
    )
}