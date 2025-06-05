'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/styles/globalscadastro.css';
import '@/styles/styleguidecadastro.css';
import '@/styles/stylecadastro.css';

export default function CadastroPage() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async () => {
    const payload = {
      fullname: nome,
      document: cpf,
      cnpj,
      email,
      password: senha,
    };

    try {
      const response = await fetch('http://localhost:3000/creator/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push('/signin');
      } else {
        const error = await response.json();
        alert(error.message || 'Erro ao cadastrar');
      }
    } catch (err) {
      alert('Erro ao conectar com o servidor.');
      console.error(err);
    }
  };

  return (
    <div className="cadastro">
      <div className="div">
        <div className="overlap">
          <div className="status-bar">
            <div className="text-wrapper">9:26</div>
            <div className="frame">
              <div className="frame-2">
                <div className="rectangle"></div>
                <div className="rectangle-2"></div>
                <div className="rectangle-3"></div>
                <div className="rectangle-4"></div>
              </div>
              <div className="group">
                <div className="overlap-group">
                  <div className="rectangle-5"></div>
                </div>
                <div className="rectangle-6"></div>
              </div>
            </div>
          </div>
          <div className="logo">
            <div className="text-wrapper-2">SuperApp</div>
          </div>
        </div>

        <div className="overlap-2">
          <div className="text"></div>
          <div className="rectangle-7"></div>

          <label className="text-wrapper-7" htmlFor="nome">Nome Completo :</label>
          <input id="nome" className="rectangle-8" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

          <label className="text-wrapper-3" htmlFor="cpf">CPF:</label>
          <input id="cpf" className="rectangle-9" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />

          <label className="text-wrapper-4" htmlFor="cnpj">CNPJ:</label>
          <input id="cnpj" className="rectangle-10" type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

          <label className="text-wrapper-5" htmlFor="email">Email:</label>
          <input id="email" className="rectangle-11" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="text-wrapper-6" htmlFor="senha">Senha:</label>
          <input id="senha" className="rectangle-12" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

          {/* Extras — caso você queira usar depois */}

          <div className="div-wrapper">
            <button className="text-wrapper-8" onClick={handleSubmit}>CONTINUAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
