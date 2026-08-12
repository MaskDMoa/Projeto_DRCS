export function NotFoundPage() {
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
      margin: 0,
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4em', margin: '0 0 10px 0' }}>404</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '5px' }}>ERRO: RECURSO NÃO ENCONTRADO</p>
      <p style={{ color: '#555', fontSize: '0.9em' }}>O arquivo solicitado foi removido, corrompido ou nunca existiu.</p>
      <div style={{ marginTop: '30px', color: '#555', letterSpacing: '5px' }}>~*~*~*~*~*~*~*~*~*~*~</div>
      <p style={{ marginTop: '20px', color: '#333', fontSize: '0.8em' }}>
        Se você acha que deveria haver algo aqui, talvez esteja procurando no lugar errado.
      </p>
    </div>
  );
}
