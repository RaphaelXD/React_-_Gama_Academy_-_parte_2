import React, { useEffect, useState } from 'react';
import * as S from './Styled';
import { useNavigate } from 'react-router-dom';

export default function Repositorios() {
    const [repositorios, setRepositorios] = useState([]);
    const Navegate = useNavigate()

    useEffect(() => {
        let repositoriosName = localStorage.getItem('repositoriosName');
        if (repositoriosName != null) {
            repositoriosName = JSON.parse(repositoriosName);
            setRepositorios(repositoriosName);
            localStorage.clear();
        } else {
            Navegate('/');
        }
    }, [Navegate]);

    return (
        <S.Container>
            <S.Title>Repoksitórios</S.Title>
            <S.List>
                {repositorios.map(repository => {
                    return (
                        <S.ListItem>Repositorio: {repository}</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}
