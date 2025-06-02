"use client";

import React, { useEffect, useState } from "react";
import "@/styles/style-home.css";

type MiniApp = {
  id: string;
  name: string;
  description: string;
  version: string;
  entrypointUrl: string;
  iconUrl: string;
  repositoryUrl: string;
  category: string;
  permissions: string[];
  creatorId: string;
  createdAt: string;
};

export default function Home() {
  const [miniApps, setMiniApps] = useState<MiniApp[]>([]);
  const [showMiniApps, setShowMiniApps] = useState(false);
  const [selectedMiniAppUrl, setSelectedMiniAppUrl] = useState<string | null>(null);
  const closeIframe = () => setSelectedMiniAppUrl(null);

  useEffect(() => {
      localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZGI5MjQyNmUtYTk3OS00MTUzLTk0Y2YtOTBhYTFlNzQyZTVkIiwiaWF0IjoxNzQ3OTk1MDA1fQ.zsD6twtJQJFxNoC8q8ZQGlul8UTeB6e_CBY9zKUuYQE");
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/miniapps?page=1&limit=10", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: MiniApp[]) => setMiniApps(data))
      .catch((error) => console.error("Erro ao buscar miniApps:", error));
  }, []);
  return (
     <div className="iphone">
      <div className="div">
        {/* Menu Superior */}
        <div className="overlap-home">
          <div className="status-bar"></div>

          {/* Nav Bar */}
          <div className="nav-bar-home">
            <div className="logo">
              <a href="/">
                <div className="text-logo">SuperApp</div>
              </a>
            </div>

            {/* Valor */}
            <div className="home-valor">
              <div className="name-home">Olá, Fulano!</div>
              <a href="/">
                <img className="ver-valor" src="/img/arrow-2.svg" alt="Ver valor" />
              </a>
              <div className="group-2">
                <div className="cifrão-home">R$</div>
                <img className="ellipsis" src="/img/password-svgrepo-com.svg" alt="Password" />
              </div>
            </div>

            {/* Pesquisa */}
            <div className="search-home">
              <div className="placeholder">
                <div className="icon-search">
                  <img className="img" src="/img/search-svgrepo-com.svg" alt="Search" />
                </div>
                <input className="input" placeholder="Search" type="text" />
              </div>
            </div>

            {/* Opções do Navbar */}
            <div className="options-navbar">
              <a href="/">
                <div className="pix-button">
                  <div className="icone-pix">
                    <img className="pix" src="/img/pix-svgrepo-com.svg" alt="PIX" />
                    <div className="text-wrapper-5">PIX</div>
                  </div>
                </div>
              </a>

              <a href="/">
                <div className="pag-button">
                  <div className="text-wrapper-6">Pagamentos</div>
                  <img className="barcode-scanner" src="/img/bars-code-barcode-svgrepo-com.svg" alt="Pagamentos" />
                </div>
              </a>

              <a href="/">
                <div className="cards-button">
                  <div className="text-wrapper-7">Cartões</div>
                  <img className="bank-cards" src="/img/cards-svgrepo-com.svg" alt="Cartões" />
                </div>
              </a>

              <a href="/">
                <div className="transporte-button">
                  <div className="text-wrapper-8">Transportes</div>
                  <img className="car" src="/img/car-svgrepo-com.svg" alt="Car" />
                </div>
              </a>
            </div>

            <a href="/">
              <div className="sair-button">Sair</div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-home">
          <div className="overlap-2">
            <div className="bottom-nav">
              <a href="">
                <img className="bottons-nav2" src="/img/home-4-svgrepo-com.svg" alt="Home" />
              </a>
              <a href="/">
                <img className="bottons-nav2" src="/img/notification-6-svgrepo-com.svg" alt="Notificações" />
              </a>
              <a href="/">
                <div className="avatar">
                  <img className="vector-2" src="/img/profile-circle-svgrepo-com.svg" alt="Perfil" />
                </div>
              </a>
              <a href="">
                <div className="vector-wrapper">
                  <img className="vector-3" src="/img/message-square-dots-svgrepo-com.svg" alt="Mensagens" />
                </div>
              </a>
              <a href="/">
                <img className="bottons-nav2" src="/img/hamburger-menu-svgrepo-com.svg" alt="Menu" />
              </a>
            </div>
          </div>
        </div>

        {/* Tabelas e MiniApps */}
       <div className="tabs-home">
  <div className="tabs">
    <div className="tabs-nav">
      <a href="/">
        <div className="tab-selected">
          <div className="default">Banco</div>
        </div>
      </a>

      <a href="/">
        <div className="tab-unselected">
          <div className="default">Social</div>
        </div>
      </a>

      <button
        className={showMiniApps ? "tab-selected" : "tab-unselected"}
        onClick={() => setShowMiniApps(true)}
      >
        <div className="default">MiniApps</div>
      </button>

      <a href="/">
        <div className="tab-unselected">
          <div className="default">Notícias</div>
        </div>
      </a>
    </div>

    {/* MiniApps visíveis quando ativados */}
    {showMiniApps && (
      <div className="gen-miniapp">
        {miniApps.map((miniApp) => (
  <button
    key={miniApp.id}
    onClick={() => setSelectedMiniAppUrl(miniApp.entrypointUrl)}
    className="miniapps"
    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
  >
    <img
      src={miniApp.iconUrl}
      alt={`${miniApp.name} logo`}
      className="miniapp-icon"
    />
  </button>
))}


        <a href="/register-MiniApp">
          <div className="miniapps">
            <img
              src="./img/add-square-svgrepo-com.svg"
              alt="Adicionar novo miniapp"
              className="miniapp-icon"
            />
          </div>
        </a>
      </div>
    )}
  </div>
</div>


        {/* Componentes visíveis quando showMiniApps for false */}
        {!showMiniApps && (
          <>
            <a href="/">
              <div className="account-button">
                <div className="option">
                  <div className="pay-BTN">
                    <div className="title-options">MINHA CONTA</div>
                    <img className="icon-arrow" src="/img/arrow.svg" alt="Seta" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/">
              <div className="emprestimo-button">
                <div className="option">
                  <div className="pay-BTN">
                    <div className="title-options">EMPRÉSTIMO</div>
                    <img className="icon-arrow" src="/img/arrow.svg" alt="Seta" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/">
              <div className="investimento-button">
                <div className="option">
                  <div className="pay-BTN">
                    <div className="title-options">INVESTIMENTO</div>
                    <img className="icon-arrow" src="/img/arrow.svg" alt="Seta" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/">
              <div className="cc-button">
                <div className="option">
                  <div className="pay-BTN">
                    <div className="title-options">CARTÃO DE CRÉDITO</div>
                    <img className="icon-arrow" src="/img/arrow.svg" alt="Seta" />
                  </div>
                </div>
              </div>
            </a>

            <a href="/">
              <div className="cd-button">
                <div className="option">
                  <div className="pay-BTN">
                    <div className="title-options">CARTÃO DE DÉBITO</div>
                    <img className="icon-arrow" src="/img/arrow.svg" alt="Seta" />
                  </div>
                </div>
              </div>
            </a>
          </>
        )}
      </div>
      {selectedMiniAppUrl && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <button
      onClick={closeIframe}
      style={{
        marginBottom: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "8px 16px",
        cursor: "pointer",
      }}
    >
      Fechar MiniApp
    </button>
    <iframe
      src={selectedMiniAppUrl}
      style={{
        width: "90vw",
        height: "85vh",
        border: "2px solid white",
        borderRadius: "12px",
        backgroundColor: "#fff",
      }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    ></iframe>
  </div>
)}

    </div>
  );
}