import React, { useEffect, useState } from 'react';
import charStyles from './characterList.module.css';
import getCharacters from '../../service/getCharacter'

export default function CharacterList() {
    const [characters, setCharactes] = useState([])
    const [page, setPage] = useState(1)

    useEffect(function () {
        getCharacters(page)
            .then(ch => {
                setCharactes(ch)
            })
    }, [page])

    const handlePageNext = () => {
        setPage(page + 1)
    }

    const handlePagePrev = () => {
        setPage(page - 1)
    }

    return (
        <>
            <div className={charStyles.container}>
                {characters.map(ch => {
                    return <div className={charStyles.character}>
                        <h3>{ch.name}</h3>
                        <img className={charStyles.image} alt={ch.name} src={ch.image} />
                        <div key={ch.id} className={charStyles.dataChar}>
                            <p>{ch.alias}</p>
                            <p>{ch.affiliation}</p>
                            <p>{ch.gender}</p>
                            <p>{ch.status}</p>
                        </div>
                    </div>
                })}
            </div>

            <div className={charStyles.buttons}>
                <button type="submit" value={page} onClick={handlePagePrev}>Anterior</button>
                <button type="submit" value={page} onClick={handlePageNext}>Siguiente</button>
            </div>



        </>
    )
}