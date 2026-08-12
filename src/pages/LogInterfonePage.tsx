export function LogInterfonePage() {
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
          <h1 style={{ color: '#ff0000', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', textShadow: '2px 2px #000', fontSize: '1.8em' }}>
            o que eu ouvi ontem
          </h1>
          <p style={{ color: '#777', fontSize: '0.9em', fontStyle: 'italic' }}>(ou foi isso que a data dizia, pelo menos)</p>
          <div style={{ color: '#555', letterSpacing: '5px', margin: '15px 0' }}>~*~*~*~*~*~*~*~*~*~*~*~*~*~*~</div>
        </header>

        <section style={{ padding: '15px', border: '1px solid #333', marginBottom: '30px' }}>
          <div style={{ lineHeight: '1.6', fontFamily: '"Courier New", Courier, monospace', fontSize: '0.95em', color: '#ccc' }}>
            <p>
              vou ser sincero: até eu fiquei incomodado com esse. peguei junto
              com um lote de fitas de interfone que ninguém mais tinha catalogado
              — mais um bônus de eu ter chegado primeiro no depósito certo.
            </p>
            <p>
              zipei antes de subir aqui. não porque eu ache que alguém vai chegar
              tão longe quanto eu, mas por precaução. não vou facilitar a senha
              pra qualquer um — só vou dizer que sou preguiçoso demais pra inventar
              senha nova toda vez. uso sempre o mesmo tipo de coisa que eu já
              catalogo de qualquer jeito. quem prestou atenção na semana passada
              não vai ter trabalho nenhum.
            </p>
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '20px', border: '2px dashed #555', background: '#1a1a1a' }}>
          <p style={{ color: '#aaa', marginBottom: '15px' }}>Arquivo disponível para download:</p>
          <a
            href="/log_interfone.zip"
            download
            style={{
              color: '#0f0',
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '1.1em',
              textDecoration: 'none',
              border: '1px solid #0f0',
              padding: '10px 25px',
              display: 'inline-block',
              transition: 'all 0.3s'
            }}
            onMouseOver={e => { (e.target as HTMLElement).style.background = '#0f0'; (e.target as HTMLElement).style.color = '#000'; }}
            onMouseOut={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#0f0'; }}
          >
            ⬇ log_interfone.zip
          </a>
          <p style={{ color: '#555', fontSize: '0.8em', marginTop: '15px' }}>[arquivo protegido por senha]</p>
        </section>

        <footer style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{ color: '#555', letterSpacing: '5px', margin: '15px 0' }}>~*~*~*~*~*~*~*~*~*~*~*~*~*~*~</div>
          <a href="/arquivista" style={{ color: '#00ffff', textDecoration: 'underline', fontSize: '0.9em' }}>← voltar pro acervo</a>
        </footer>

      </div>
    </div>
  );
}
