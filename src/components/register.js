import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{email:email,password:password,name:name}).then((res)=>{
            navigate('/login')
        })
    }

    return(

        <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>
                
              </div>
            
                <input type="hidden" name="remember" value="true"/>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label for="full_name" className="sr-only">Full Name</label>
                    <input id="full_name" onChange={e=>setName(e.target.value)}  name="email" type="text" autocomplete="off" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Full Name"/>
                  </div>
                  <div>
                    <label for="email-address"  className="sr-only">Email address</label>
                    <input id="email-address" onChange={e=>setEmail(e.target.value)} name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
                  </div>
                  <div>
                    <label for="password" className="sr-only">Password</label>
                    <input id="password" onChange={e => setPassword(e.target.value)} name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
                  </div>
                </div>
                
                 <div>
                  <button type="button" onClick={submitForm} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    
                    Register
                  </button>
                </div>
             
            </div>
          </div>
        </>
       
    )
}