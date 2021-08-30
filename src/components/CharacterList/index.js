import React, { useEffect, useState } from 'react';
import charStyles from './characterList.module.css';
import CharacterService from '../../service/characterService'
import Character from '../Character';
import {
    Link
} from 'react-router-dom';

export default function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(false)

    useEffect(function () {
        new CharacterService().getCharacters(page)
            .then(data => {
                setCharacters(data.characters)
                setLastPage(data.isLastPage)
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
            <h1 className={charStyles.title}>
                My Hero Academia - Personajes
            </h1>
            <div className={charStyles.buttons}>
                {page === 1 ? <button
                    disabled>
                    Anterior
                </button> : <button
                    type="submit"
                    value={page}
                    onClick={handlePagePrev}>
                    Anterior
                </button>}
                {lastPage ? <button
                    disabled>
                    Siguiente
                </button> : <button
                    type="submit"
                    value={page}
                    onClick={handlePageNext}>
                    Siguiente
                </button>}
            </div>
            <div className={charStyles.page}>
                Página: {page}
            </div>
            <div className={charStyles.container} >
                {characters.map((ch, key) => {
                    return <Link to={`/characters/${ch.id}/detail`}>
                        <Character
                            key={key}
                            data={ch}
                        />
                    </Link>
                })}
            </div>
        </>
    )
}