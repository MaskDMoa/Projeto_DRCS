import React, { useState, useEffect } from 'react';
import { useBackButtonRitual } from '../hooks/useBackButtonRitual';

export function BaitPage() {
  useBackButtonRitual(5, 5000, '/arquivista');

  const defaultComments = [
    { name: 'Maria do Carmo', time: 'há 2 dias', text: 'Ficou maravilhoso! Meus netos adoraram, não sobrou nenhum pra contar história.' },
    { name: 'João Pedro', time: 'há 1 semana', text: 'Segui a receita passo a passo e deu super certo. Recomendo usar queijo canastra meia cura se tiverem, dá um toque especial.' },
    { name: 'Ana Lúcia', time: 'há 2 semanas', text: 'Dá para congelar a massa antes de assar?', reply: 'Pode sim, Ana! Congele as bolinhas separadas em uma forma e depois guarde em saquinhos. Vão direto do congelador pro forno. Ficam ótimos.' }
  ];

  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('vovo_comments');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultComments;
      }
    }
    return defaultComments;
  });

  useEffect(() => {
    localStorage.setItem('vovo_comments', JSON.stringify(comments));
  }, [comments]);

  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;
    
    setComments([
      { name: newName, time: 'agora mesmo', text: newText },
      ...comments
    ]);
    setNewName('');
    setNewText('');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px', color: '#333', backgroundColor: '#fff', minHeight: '100vh', textAlign: 'left' }}>
      <header style={{ borderBottom: '2px solid #FFA500', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#FF8C00', margin: 0 }}>Receitas da Vovó</h1>
        <h2 style={{ color: '#555', marginTop: '5px' }}>Pão de Queijo Mineiro Autêntico</h2>
        <p style={{ color: '#666', fontStyle: 'italic' }}>A verdadeira receita tradicional, crocante por fora e macia por dentro. Perfeita para o café da tarde!</p>
      </header>

      <main>
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Ingredientes</h3>
          <ul style={{ lineHeight: '1.8' }}>
            <li>500g de polvilho azedo</li>
            <li>1 copo (americano) de água</li>
            <li>1 copo (americano) de leite</li>
            <li>1/2 copo (americano) de óleo</li>
            <li>2 ovos grandes</li>
            <li>100g de queijo parmesão ralado na hora</li>
            <li>Sal a gosto</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Modo de Preparo</h3>
          <ol style={{ lineHeight: '1.8' }}>
            <li>Em uma panela, ferva a água, o leite, o óleo e o sal.</li>
            <li>Despeje a mistura fervente sobre o polvilho aos poucos, misturando bem até escaldar toda a massa.</li>
            <li>Deixe a massa esfriar até ficar morna e adicione os ovos, um a um, amassando vigorosamente.</li>
            <li>Acrescente o queijo ralado e misture até a massa ficar completamente homogênea.</li>
            <li>Unte as mãos com um pouco de óleo, faça bolinhas e coloque em uma assadeira (não precisa untar a forma).</li>
            <li>Asse em forno preaquecido a 180°C por cerca de 30 a 35 minutos, ou até dourarem.</li>
          </ol>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Deixe seu comentário</h3>
          <form onSubmit={handleAddComment} style={{ marginBottom: '30px', background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Seu Nome:</label>
              <input 
                type="text" 
                value={newName} 
                onChange={e => setNewName(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                placeholder="Ex: João da Silva"
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Comentário:</label>
              <textarea 
                value={newText} 
                onChange={e => setNewText(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
                placeholder="O que achou da receita?"
              />
            </div>
            <button type="submit" style={{ background: '#FF8C00', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Enviar Comentário
            </button>
          </form>

          <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Comentários ({comments.length})</h3>
          
          {comments.map((c, i) => (
            <div key={i} style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '15px', borderRadius: '4px', marginBottom: '15px' }}>
              <strong style={{ color: '#444' }}>{c.name}</strong> 
              <span style={{ color: '#999', fontSize: '0.8em', marginLeft: '10px' }}>{c.time}</span>
              <p style={{ margin: '5px 0 0 0' }}>{c.text}</p>
              {c.reply && (
                <div style={{ marginLeft: '20px', marginTop: '10px', color: '#555', borderLeft: '3px solid #ccc', paddingLeft: '10px' }}>
                  <strong style={{ color: '#666' }}>Vovó responde:</strong> {c.reply}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
