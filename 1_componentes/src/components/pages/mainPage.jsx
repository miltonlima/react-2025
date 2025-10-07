import React from 'react';
// LINHA REMOVIDA: import '../../App.css'; // REMOVIDA para resolver o erro de compilação do CSS

const MainPage = () => {
    // Lógica LogoComponent removida para manter a estrutura do cabeçalho fixa.
    // Se a imagem '/sesc-logo.png' não existir, ela não será exibida.

    return (
        <div className="page-wrapper">
            <div className="document-container">

                {/* CABEÇALHO */}
                <header className="header-content">
                    {/* NOVA ESTRUTURA FIXA DA IMAGEM DO LOGO */}
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
                    <p>
                        O Programa de Comprometimento e Gratuidade (PCG) é uma iniciativa do Sesc em parceria
                        com o Governo Federal, resultado de um acordo firmado com a Confederação Nacional do
                        Comércio (CNC). Seu objetivo é ampliar o acesso a ações educativas gratuitas para pessoas
                        de baixa renda, prioritariamente trabalhadores do comércio de bens, serviços e turismo, seus
                        dependentes e estudantes da rede pública de educação básica, todos com renda familiar de
                        até 2 salários-mínimos nacionais.
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
                    <ol className="participation-list" style={{ listStyleType: 'decimal' }}>
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
                    <p>
                        Para participar, é necessário que a renda familiar per capita seja de até <strong>2 salários-mínimos</strong> nacionais.
                    </p>
                    <p>O que isso significa?</p>
                    <ul className="income-criteria-list" style={{ listStyleType: 'disc' }}>
                        <li>Soma-se a renda total da família (salários, aposentadorias, pensões etc.);</li>
                        <li>Divide-se pelo número de pessoas que moram no mesmo domicílio;</li>
                        <li>O resultado não pode ser superior a 2 salários-mínimos nacionais.</li>
                    </ul>
                </section>

                {/* SEÇÃO 4: DOCUMENTOS NECESSÁRIOS */}
                <section className="document-section">
                    <h2 className="section-title">DOCUMENTOS NECESSÁRIOS</h2>
                    <p>
                        Para se inscrever no PCG, é necessário preencher/apresentar:
                    </p>
                    <div className="doc-item-container">
                        <p className="doc-item">
                            <strong>Autodeclaração de Renda</strong> | Autodeclaração de Renda para menor de idade (válida por 2 anos);
                        </p>
                        <p className="doc-item">
                            <strong>Termo de Compromisso</strong> | Termo de Compromisso para menor de idade (válido por 2 anos);
                        </p>
                    </div>
                    <p className="note-disclaimer">
                        Menores de idade: Os documentos devem ser preenchidos pelo responsável legal. Importante: A autodeclaração inclui autorização de uso de imagem e voz para fins de divulgação das ações do Sesc.
                    </p>
                </section>

                {/* SEÇÃO 5: COMO PARTICIPAR? */}
                <section className="document-section">
                    <h2 className="section-title">COMO PARTICIPAR?</h2>
                    <ul className="participation-list" style={{ listStyleType: 'disc' }}>
                        <li>Clique em "De acordo" e prossiga com o preenchimento.</li>
                        <li>Procure uma Unidade Sesc mais próxima.</li>
                        <li>Solicite informações sobre as atividades gratuitas oferecidas.</li>
                    </ul>
                </section>

                {/* SEÇÃO 6: POR QUE O PCG É IMPORTANTE? */}
                <section className="document-section">
                    <h2 className="section-title">POR QUE O PCG É IMPORTANTE?</h2>
                    <p>
                        O PCG é uma oportunidade para ampliar o acesso à educação e a atividades de qualidade para pessoas que mais precisam. Ele ajuda a promover a inclusão social e a democratização das ações do Sesc em todo o Brasil. O Programa oferta anualmente centenas de ações gratuitas nas unidades do Sesc RJ.
                    </p>
                </section>

                {/* FOOTER / AÇÕES */}
                <footer className="document-footer">
                    {/* Alterado para incluir o asterisco e o negrito no "Saiba Mais" */}
                    <p className="saiba-mais">
                        *<a href="URL_DO_SAIBA_MAIS" className="link-style"><strong>Saiba Mais:</strong> Programa de Comprometimento e Gratuidade (PCG)</a>
                    </p>

                    <div className="agreement-box">
                        <input type="checkbox" id="agreement-checkbox" className="agreement-checkbox" />
                        {/* Alterado para o texto exato da imagem */}
                        <label htmlFor="agreement-checkbox" className="agreement-text">
                            Li e aceito os termos apresentados no texto acima
                        </label>
                    </div>

                    <button className="button-prosseguir">Avançar</button>
                </footer>

            </div>
        </div>
    );
};

export default MainPage;
