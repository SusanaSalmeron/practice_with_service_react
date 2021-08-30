import React from 'react';
import style from './character.module.css'


const Character = ({ data }) => {

    const { name, image, status } = data

    const getStatusStyle = charStatus => {
        switch (charStatus) {
            case "Alive": return style.characterAlive
            case "Deceased": return style.characterDead
            case "Imprisoned": return style.characterImp
            case "Disbanded": return style.characterDis
            case "Arrested": return style.characterArr
            case "Active": return style.characterActive
            default: return style.characterUnknown
        }
    }

    return (
        <>
            <div className={style.container}>
                <div className={getStatusStyle(status)}>
                    <h3>{name}</h3>
                    <img className={style.image}
                        alt={name}
                        src={image}
                    />
                </div>
            </div>



        </>
    )
}

export default Character