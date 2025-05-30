'use client';

import React, { useState } from 'react'
import axios from 'axios';
interface loginForm {
  
  email: string;
  senha: string;

}

function login() {
  
  const [formData, setFormData] = useState<loginForm>({email:'', senha:''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({...formData, [e.target.name]: e.target.value});
  
  };

  const handleSubmit = async (e:React.FormEvent) => {

    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('api/login', formData);

    } catch(err: any) {

      setError(err.response?.data?.error || 'Login falhou');
    
    } finally {

      setLoading(false);

    }
  };




  return (
  <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-yellow-200">Faça Login na sua conta!</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-yellow-200">Email address</label>
            <div className="mt-2">
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder='e-mail Aqui' required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-yellow-200">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-yellow-100 hover:text-yellow-600">Esqueceu a Senha?</a>
              </div>
            </div>
            <div className="mt-2">
              <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha Aqui" id="password" autoComplete="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <button type="submit" disabled={loading} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-yellow-200 shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default login;