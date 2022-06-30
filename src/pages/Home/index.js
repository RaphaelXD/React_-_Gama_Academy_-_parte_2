import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as S from './Styled';

function App() {
  const Navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositorios = response.data;
      const repositoriosName = [];
      repositorios.map((repository) => {
        repositoriosName.push(repository.name)
      })
      localStorage.setItem('repositoriosName', JSON.stringify(repositoriosName));
      setErro(false);
      Navigate('/repositorios');
    })
    .catch(err => {
      setErro(true);
    });
  };

  return (
    <S.HomeContainer>
      <S.Container>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
      { erro ? <S.ErrorMsg>Usuário não encontrado.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;
