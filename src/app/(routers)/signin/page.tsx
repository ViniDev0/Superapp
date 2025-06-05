"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "@/styles/globals.css";
import "@/styles/styleguide.css";
import "@/styles/style.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

 const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:3000/creator/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: senha }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Erro no login: " + data.message);
      return;
    }
    console.log("Login bem-sucedido:", data);

    router.push('/register-MiniApp');
  } catch (error) {
    console.error("Erro ao logar:", error);
  }
};

  return (
    <div className="login">
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

        <div className="frame-3">
          <div className="text-wrapper-3">Faça seu login</div>

          <label className="text-wrapper-4">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              position: "absolute",
              top: "132px",
              left: "19px",
              width: "322px",
              height: "40px",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <label className="text-wrapper-5">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{
              position: "absolute",
              top: "218px",
              left: "19px",
              width: "322px",
              height: "40px",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />

          <div className="text-wrapper-6">Esqueci minha senha</div>
          <div className="text-wrapper-7">
            <a href="/signup" className="signupBTN">
            <p id="signupText">
              Ainda não sou cliente
            </p>
          </a>
          </div>

          <div className="div-wrapper" onClick={handleLogin} style={{ cursor: "pointer" }}>
            <div className="text-wrapper-8">CONTINUAR</div>
          </div>
        </div>

        <div className="text"></div>
      </div>
    </div>
  );
}
