import { useState } from "react"
import AuthUser from './AuthUser';

export default function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.access_token);
        })
    }

    return(
        <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
                
              </div>
             
              
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label className="sr-only">Email address</label>
                    <input id="email" onChange={e=>setEmail(e.target.value)} type="email"  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 my-2 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
                  </div>
                  <div>
                    <label className="sr-only">Password</label>
                    <input id="pwd" onChange={e => setPassword(e.target.value)} type="password"  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
                  </div>
                </div>
                
                 <div>
                  <button type="button" onClick={submitForm} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    
                    Login
                  </button>
                </div>
             
            </div>
          </div>
        </>
    
    )
}