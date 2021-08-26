const fromApiResponseToCharacters = apiResponse => {
    const { result = [] } = apiResponse;
    if (Array.isArray(result)) {
        const characters = result.map(character => {
            const { id, name, alias, affiliation, gender, status, images } = character
            const image = images[0]

            return { id, name, alias, affiliation, gender, status, image }
        })
        return characters

    }
    return []
}

const getCharacters = page => {

    const apiUrl = `https://myheroacademiaapi.com/api/character?page=${page}`;
    return fetch(apiUrl)
        .then((res) => res.json())
        .then(fromApiResponseToCharacters)
}

export default getCharacters
