import React, { useEffect, useState } from 'react';
import charStyles from './chapterList.module.css';
import getCharacters from '../../service/getCharacter'

export default function CharacterList() {
    const [characters, setCharactes] = useState([])

    useEffect(function () {
        getCharacters(ch => ch)
            .then(ch => {
                setCharactes(ch)
            })
    }, [])

    return (
        <>
            <div className={charStyles.container}>
                {characters.map(ch => {
                    return <div className={charStyles.character}>
                        <h3>{ch.name}</h3>
                        <img className={charStyles.image} alt={ch.name} src={ch.image} />
                        <div className={charStyles.data}>

                            <p>{ch.alias}</p>
                            <p>{ch.affiliation}</p>
                            <p>{ch.gender}</p>
                            <p>{ch.status}</p>
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}