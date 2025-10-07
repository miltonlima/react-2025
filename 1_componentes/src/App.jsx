import React, { useState } from 'react';
import './App.css';
import logoSesc from './assets/sesc-logo.png';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="app-container">
      <div className="card">
        <img src={logoSesc} alt="Sesc Logo" className="logo" />

        <h2>Programa de Comprometimento e Gratuidade (PCG)</h2>

        <section>
          <h3>O QUE É O PCG?</h3>
          <p>
            O Programa de Comprometimento e Gratuidade (PCG) é uma iniciativa do Sesc em parceria com o Governo Federal, resultante de um acordo firmado com o Departamento Nacional de Comércio (CNC). Seu objetivo é ampliar o acesso às ações educacionais gratuitas para pessoas de baixa renda, prioritariamente trabalhadores do comércio de bens, serviços e turismo, seus dependentes e estudantes da rede pública de educação básica, cujas famílias tenham renda de até três salários-mínimos nacionais.
          </p>
          <p>
            O PCG oferece oportunidades nas atividades de educação básica, continuada e outras ações educativas, culturais e socioassistenciais. Por meio dessa política de gratuidade, o Sesc busca fortalecer sua atuação como instituição comprometida com o desenvolvimento social do país.
          </p>
        </section>

        <section>
          <h3>QUEM PODE PARTICIPAR?</h3>
          <ul>
            <li>Trabalhadores do comércio de bens, serviços e turismo e seus dependentes</li>
            <li>Estudantes da educação básica, matriculados ou egressos</li>
            <li>Público em geral</li>
          </ul>
          <p>*Todos devem atender ao <strong>critério de renda</strong>.</p>
        </section>

        <section>
          <h3>CRITÉRIO DE RENDA</h3>
          <p>
            Para participar, é necessário que a renda familiar per capita seja de até 3 salários-mínimos nacionais.
          </p>
          <p>
            O que isso significa?
            <ul>
              <li>Some-se a renda total da família (salários, aposentadorias, pensões etc.);</li>
              <li>Divida-se pelo número de pessoas que moram no mesmo domicílio;</li>
              <li>O resultado não pode ser superior a 3 salários-mínimos nacionais.</li>
            </ul>
          </p>
        </section>

        <section>
          <h3>DOCUMENTOS NECESSÁRIOS</h3>
          <p>
            Para se inscrever no PCG, o interessado precisa preencher:
          </p>
          <ul>
            <li>Autodeclaração de Renda | Autodeclaração de Renda para menor de idade (válida por 2 anos);</li>
            <li>Termo de Compromisso | Termo de Compromisso para menor de idade (válido por 2 anos).</li>
          </ul>
          <p>
            Estes documentos devem ser preenchidos pelo responsável legal. Importante: A autodeclaração inclui autorização de uso de imagem e voz para ações de divulgação das ações do Sesc.
          </p>
        </section>

        <section>
          <h3>COMO PARTICIPAR?</h3>
          <ul>
            <li>Clique em “De acordo” e prossiga com o preenchimento;</li>
            <li>Procure uma Unidade Sesc mais próxima;</li>
            <li>Solicite informações sobre as atividades gratuitas oferecidas.</li>
          </ul>
        </section>

        <section>
          <h3>POR QUE O PCG É IMPORTANTE?</h3>
          <p>
            O PCG é uma oportunidade para ampliar o acesso à educação e às atividades de qualidade para pessoas que mais precisam. Ele ajuda a promover a inclusão social e educativa, alinhando-se às ações do Sesc no Brasil. O Programa oferta anualmente centenas de ações gratuitas nas unidades do Sesc RJ.
          </p>
          <p><a href="#">*Saiba Mais: Programa de Comprometimento e Gratuidade (PCG)</a></p>
        </section>

        <div className="checkbox-container">
          <label>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            Li e aceito os termos apresentados no texto acima
          </label>
        </div>

        <button className="btn-prosseguir" disabled={!checked}>PROSSEGUIR</button>
      </div>
    </div>
  );
}

export default App;