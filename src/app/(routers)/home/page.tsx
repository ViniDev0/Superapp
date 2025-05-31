"use client";

import React from "react";
import "@/styles/style-home.css";

export default function Home() {
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
                <img
                  className="ellipsis"
                  src="/img/password-svgrepo-com.svg"
                  alt="Password"
                />
              </div>
            </div>
            {/* Pesquisa */}
            <div className="search-home">
              <div className="placeholder">
                <div className="icon-search">
                  <img
                    className="img"
                    src="/img/search-svgrepo-com.svg"
                    alt="Search"
                  />
                </div>
                <input className="input" placeholder="Search" type="text" />
              </div>
            </div>
            {/* Opções do Navbar */}
            <div className="options-navbar">
              {/* PIX */}
              <a href="/">
                <div className="pix-button">
                  <div className="icone-pix">
                    <img
                      className="pix"
                      src="/img/pix-svgrepo-com.svg"
                      alt="PIX"
                    />
                    <div className="text-wrapper-5">PIX</div>
                  </div>
                </div>
              </a>
              {/* Pagamentos */}
              <a href="/">
                <div className="pag-button">
                  <div className="text-wrapper-6">Pagamentos</div>
                  <img
                    className="barcode-scanner"
                    src="/img/bars-code-barcode-svgrepo-com.svg"
                    alt="Pagamentos"
                  />
                </div>
              </a>
              {/* Cartões */}
              <a href="/">
                <div className="cards-button">
                  <div className="text-wrapper-7">Cartões</div>
                  <img
                    className="bank-cards"
                    src="/img/cards-svgrepo-com.svg"
                    alt="Cartões"
                  />
                </div>
              </a>
              {/* Transporte */}
              <a href="/">
                <div className="transporte-button">
                  <div className="text-wrapper-8">Transportes</div>
                  <img className="car" src="/img/car-svgrepo-com.svg" alt="Car" />
                </div>
              </a>
            </div>
            {/* Sair */}
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
                <img
                  className="bottons-nav2"
                  src="/img/home-4-svgrepo-com.svg"
                  alt="Home"
                />
              </a>
              <a href="/">
                <img
                  className="bottons-nav2"
                  src="/img/notification-6-svgrepo-com.svg"
                  alt="Notificações"
                />
              </a>
              <a href="/">
                <div className="avatar">
                  <img
                    className="vector-2"
                    src="/img/profile-circle-svgrepo-com.svg"
                    alt="Perfil"
                  />
                </div>
              </a>
              <a href="">
                <div className="vector-wrapper">
                  <img
                    className="vector-3"
                    src="/img/message-square-dots-svgrepo-com.svg"
                    alt="Mensagens"
                  />
                </div>
              </a>
              <a href="/">
                <img
                  className="bottons-nav2"
                  src="/img/hamburger-menu-svgrepo-com.svg"
                  alt="Menu"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Tabelas */}
        <div className="tabs-home">
          {/* obs: usar tab selected nas paginas atuais, unselected para as demais */}
          <div className="tabs">
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
            <a href="/">
              <div className="tab-unselected">
                <div className="default">MiniApps</div>
              </div>
            </a>
            <a href="/">
              <div className="tab-unselected">
                <div className="default">Notícias</div>
              </div>
            </a>
          </div>
        </div>
        {/* Minha Conta */}
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
        {/* Empréstimo */}
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
        {/* Investimento */}
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
        {/* Cartão de Crédito */}
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
        {/* Cartão de Débito */}
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
      </div>
    </div>
  );
}
