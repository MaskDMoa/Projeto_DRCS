import { useEffect, useState } from 'react';
import { useSlowLoad } from '../hooks/useSlowLoad';

const Marquee = 'marquee' as any;

export function ArchivistPage() {
  const { loading, progress } = useSlowLoad(300, 1500);
  const [visitorCount, setVisitorCount] = useState('00000');

  useEffect(() => {
    // Check if user already visited in this session
    const hasVisitedThisSession = sessionStorage.getItem('arquivista_visited_session');
    
    // We use a new key to effectively "reset" the counter to 0 for everyone
    const current = localStorage.getItem('arquivista_visitors_v2');
    let count = current ? parseInt(current, 10) : 0;
    
    if (!loading) {
      if (!hasVisitedThisSession) {
        count += 1;
        localStorage.setItem('arquivista_visitors_v2', count.toString());
        sessionStorage.setItem('arquivista_visited_session', 'true');
      }
      setVisitorCount(count.toString().padStart(5, '0'));
    } else {
      setVisitorCount(count.toString().padStart(5, '0'));
    }
  }, [loading]);

  if (loading) {
    return (
      <div style={{ 
        background: '#000', 
        color: '#0f0', 
        height: '100vh', 
        width: '100vw',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontFamily: '"Courier New", Courier, monospace',
        margin: 0
      }}>
        <h2>Establishing secure connection...</h2>
        <p>Warning: Connection is unstable. Packet loss detected.</p>
        <div style={{ width: '300px', border: '1px solid #0f0', marginTop: '20px' }}>
          <div style={{ width: `${progress}%`, background: '#0f0', height: '20px', transition: 'width 0.2s' }}></div>
        </div>
        <p style={{ marginTop: '10px' }}>{progress}% loaded</p>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#111', 
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h10v10H0V0zm1 1v8h8V1H1z\' fill=\'%23222\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      color: '#ccc', 
      minHeight: '100vh',
      width: '100vw',
      fontFamily: '"Times New Roman", Times, serif',
      padding: '20px',
      margin: 0,
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        maxWidth: '700px', 
        margin: '0 auto', 
        background: '#222', 
        padding: '30px', 
        border: '3px ridge #555',
        boxShadow: '0 0 15px rgba(0,0,0,0.8)'
      }}>
        
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#ff0000', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', textShadow: '2px 2px #000', fontSize: '2.5em' }}>
            O Arquivo
          </h1>
          <div style={{ color: '#555', letterSpacing: '5px', margin: '15px 0' }}>~*~*~*~*~*~*~*~*~*~*~*~*~*~*~</div>
          <Marquee style={{ color: '#ffff00', width: '80%', padding: '5px', border: '1px dashed #444', display: 'inline-block' }}>
            Bem-vindo. Nem tudo aqui é o que parece. A verdade está oculta nas entrelinhas.
          </Marquee>
        </header>

        <section style={{ marginBottom: '40px', padding: '15px', border: '1px solid #333' }}>
          <h2 style={{ borderBottom: '1px dashed #555', paddingBottom: '5px', color: '#aaa' }}>Sobre mim</h2>
          <p style={{ lineHeight: '1.6' }}>
            Bem-vindos. Sério, deviam se sentir sortudos por terem achado esse lugar — duvido muito que exista alguém aí fora com acesso ao que eu tenho aqui.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Eles acham que os registros do DRCS (Departamento de Recepção e Catalogação de Sinais) foram perdidos quando ele fechou as portas. Estão errados. Eu estava lá antes que alguém pensasse em destruir qualquer coisa. Recuperei as fitas. Recuperei os discos magnéticos. Não foi sorte, foi eu sabendo procurar onde ninguém mais procurou.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Não vou usar meu nome verdadeiro aqui. Não é frescura, é só que nomes normais não combinam mais com o que eu virei depois de mexer nisso tudo. Pode me chamar do que eu mesmo decidi me chamar: o Arquivista. Parece apropriado, já que sou basicamente o único cuidando disso direito.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Ainda não entendi tudo — algumas partes eu simplesmente não sei ler, ou pioram quando mexo demais nelas. Mas é questão de tempo. Sempre descubro.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Se você achou este lugar, preste atenção: não confie no que está na superfície. O que você vê primeiro quase nunca é a mensagem real.
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Se alguém aí achar que é mais esperto que eu e quiser "ajudar", fique à vontade pra tentar. Só não venha se gabar depois se travar em algo que eu já resolvi sozinho.
          </p>
        </section>

        <section style={{ marginBottom: '40px', padding: '15px', border: '1px solid #333' }}>
          <h2 style={{ borderBottom: '1px dashed #555', paddingBottom: '5px', color: '#aaa' }}>Acervo / Fragmentos Recuperados</h2>
          <ul style={{ listStyleType: 'square', lineHeight: '2' }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#00ffff', textDecoration: 'underline' }}>arquivo 01 (ainda tentando entender esse)</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#00ffff', textDecoration: 'underline' }}>pra quem perguntou sobre o lugar</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#00ffff', textDecoration: 'underline' }}>não deveria ter escaneado isso em alta qualidade</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#00ffff', textDecoration: 'underline' }}>o que eu ouvi ontem</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ color: '#00ffff', textDecoration: 'underline' }}>não abram isso no celular</a>
            </li>
            <li style={{ marginTop: '20px', listStyleType: 'none' }}>
              <a href="/guestbook" style={{ color: '#00ffff', textDecoration: 'underline' }}>Guestbook</a>
              <span style={{ color: 'red', marginLeft: '10px', fontSize: '0.9em' }}>[ERRO 404 - BANCO DE DADOS NÃO ENCONTRADO]</span>
            </li>
          </ul>
        </section>

        <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '0.9em', color: '#777' }}>
          <div style={{ color: '#555', letterSpacing: '5px', margin: '15px 0' }}>~*~*~*~*~*~*~*~*~*~*~*~*~*~*~</div>
          <p>Última atualização: 32 de Fevereiro de 1999</p>
          <div style={{ 
            marginTop: '20px', 
            border: '2px inset #555', 
            display: 'inline-block', 
            padding: '5px 15px', 
            background: '#000',
            boxShadow: 'inset 0 0 5px rgba(255,255,255,0.2)'
          }}>
            Visitante nº <span style={{ color: '#0f0', fontFamily: '"Courier New", monospace', fontSize: '1.3em', fontWeight: 'bold' }}>{visitorCount}</span>
          </div>
          <p style={{ marginTop: '15px', fontSize: '0.8em' }}>Melhor visualizado em 800x600.</p>
        </footer>

      </div>
    </div>
  );
}
