import React from 'react';
import './StyleInterno.css';

const ProfissionaisPage = () => {
  return (
    <div className="container mt-5 text-center">
   
      <div className="mt-5 p-4 bg-dark-green text-white rounded shadow combat-fake-news">
        <h2 className="fw-bold textt">Como Combater Fake News na Área da Saúde</h2>
        <p className="lead">
          Em um mundo repleto de informações, é essencial saber distinguir o que é verdadeiro do que é falso. 
          Aqui estão algumas dicas para ajudar você a identificar e evitar notícias falsas sobre saúde, baseadas em conversas com profissionais da área:
        </p>
        <ul className="text-start">
          <li><strong>Verifique a fonte:</strong> Sempre confira se a notícia vem de uma fonte confiável, como sites oficiais, hospitais, ou órgãos governamentais de saúde.</li>
          <li><strong>Cheque a data:</strong> Notícias antigas podem circular como se fossem recentes, mas podem estar desatualizadas.</li>
          <li><strong>Desconfie de manchetes sensacionalistas:</strong> Títulos chamativos podem ser enganadores. Leia o conteúdo completo antes de acreditar.</li>
          <li><strong>Use sites de verificação:</strong> Sites como <a href="https://www.boatos.org" target="_blank" rel="noopener noreferrer" className="text-warning">Boatos.org</a> e <a href="https://www.fatooufake.com" target="_blank" rel="noopener noreferrer" className="text-warning">Fato ou Fake</a> ajudam a verificar a veracidade das informações.</li>
          <li><strong>Consulte profissionais de saúde:</strong> Em caso de dúvida, pergunte a um profissional de saúde qualificado para verificar a informação.</li>
        </ul>
        <p className="text-muted">Manter-se informado é essencial, mas certifique-se de que suas fontes são confiáveis.</p>
      </div>


      <div className="mt-5 p-4 bg-dark-green text-white rounded shadow recommendations">
        <h3 className="fw-bold textt">Recomendações de Canais e Livros Confiáveis</h3>
        <p>
          Para obter informações de qualidade sobre saúde e esportes, recomendamos:
        </p>
        <ul className="text-start">
          <li><strong>Educação Física:</strong> Livros como "Treinamento Funcional" de Michael Boyle e o canal "Cefis Educação Física" no YouTube.</li>
          <li><strong>Nutrição:</strong> O livro "Nutrição para o Esporte e o Exercício" de McArdle, Katch e Katch, e o site <a href="https://www.sbn.org.br/" target="_blank" rel="noopener noreferrer" className="text-warning">Sociedade Brasileira de Nutrição</a>.</li>
          <li><strong>Psicologia:</strong> "Psicologia do Esporte e do Exercício" de Weinberg & Gould, e o canal "Esporte Psico" no YouTube.</li>
          <li><strong>Endocrinologia:</strong> O portal da <a href="https://www.endocrino.org.br/" target="_blank" rel="noopener noreferrer" className="text-warning">Sociedade Brasileira de Endocrinologia</a>, com conteúdos voltados para atletas.</li>
          <li><strong>Fisioterapia Esportiva:</strong> O livro "Fisioterapia no Esporte" de Greve, e vídeos no canal "Fisio em Movimento" no YouTube.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfissionaisPage;
