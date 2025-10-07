import React from 'react';
import '../../app.css'; // se houver um arquivo de estilos

const MainPage = () => {
    return (
      <div className="page-wrapper">
        <div className="page-wrapper">
            <div className="document-container">

                {/* CABEÇALHO */}
                <header className="header-content">
                    {/* NOVA IMAGEM DO LOGO */}
                    <img 
                        src="/sesc-logo.png" 
                        alt="Logo Sesc" 
                        className="sesc-logo-image"
                    />
                    <h1 className="main-title">Programa de Comprometimento e Gratuidade (PCG)</h1>
                </header>

                {/* SEÇÃO 1: O QUE É O PCG? */}
                <section className="document-section">
                    <h2 className="section-title">O QUE É O PCG?</h2>
                    <div className="divider"></div>
                    <p>
                        O Programa de Comprometimento e Gratuidade (PCG) é uma iniciativa do Sesc em parceria
                        com o Governo Federal, resultado de um acordo firmado com a Confederação Nacional do
                        Comércio (CNC). Seu objetivo é ampliar o acesso a ações educativas gratuitas para pessoas
                        de baixa renda, prioritariamente trabalhadores do comércio de bens, serviços e turismo, seus
                        dependentes e estudantes da rede pública de educação básica, todos com renda familiar de
                        até três salários-mínimos nacionais. 
                    </p>
                    <p>
                        O programa destina recursos para atividades de educação básica, continuada e outras ações
                        educativas, promovendo valores fundamentais como acesso, inclusão e democratização. Por
                        meio do PCG, o Sesc RJ oferece programações gratuitas nas áreas de Educação,
                        Assistência, Cultura, Lazer e Saúde, garantindo um atendimento mais completo e de
                        qualidade à população, contribuindo diretamente para a melhoria da qualidade de vida dos
                        comerciários, suas famílias e da comunidade em geral.
                    </p>
                </section>

                {/* SEÇÃO 2: QUEM PODE PARTICIPAR? */}
                <section className="document-section">
                    <h2 className="section-title">QUEM PODE PARTICIPAR?</h2>
                    <div className="divider"></div>
                    <ol className="participation-list">
                        <li>Trabalhadores do comércio de bens, serviços e turismo e seus dependentes</li>
                        <li>Estudantes da educação básica, matriculados ou egressos</li>
                        <li>Público em geral</li>
                    </ol>
                    <p className="income-note">
                        *Todos devem atender ao <strong>critério de renda</strong>.
                    </p>
                </section>

                {/* SEÇÃO 3: CRITÉRIO DE RENDA */}
                <section className="document-section">
                    <h2 className="section-title">CRITÉRIO DE RENDA</h2>
                    <div className="divider"></div>
                    <p>
                        Para participar, é necessário que a renda familiar per capita seja de até <strong>2 salários-mínimos</strong> nacionais.
                    </p>
                    <p>O que isso significa?</p>
                    <ul className="income-criteria-list">
                        <li>Soma-se a renda total da família (salários, aposentadorias, pensões etc.).</li>
                        <li>Divide-se pelo número de pessoas que moram no mesmo domicílio;</li>
                        <li>O resultado não pode ser superior a 2 salários-mínimos nacionais.</li>
                    </ul>
                </section>

            </div>
        </div>
      </div>
    );
  };
  
  export default MainPage;
  


