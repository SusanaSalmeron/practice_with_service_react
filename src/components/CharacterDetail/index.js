import React, { useEffect, useState } from 'react';
import style from './characterDetail.module.css';
import {
    useParams
} from 'react-router-dom';
import CharacterService from '../../service/characterService';


export default function CharacterDetail() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        new CharacterService().getCharacterById(id)
            .then(dataChar => {
                setCharacter(dataChar)
            })
    }, [id]);

    return (
        <>
            <div className={style.dataChar}>
                <p>Alias: {character.alias} </p>
                <p>Afiliación: {character.affiliation} </p>
                <p>Género: {character.gender} </p>
                <p>Ocupación: {character.occupation} </p>
                <p>Status: {character.status}</p>
            </div>
        </>
    )
}