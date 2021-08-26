const url = "https://myheroacademiaapi.com/api/character?occupation=student&page=1"
const fromApiResponseToCharacters = apiResponse => {
    const { result = [] } = apiResponse;
    if (Array.isArray(result)) {
        const characters = result.map(character => {
            const { name, alias, affiliation, gender, status, images } = character
            const image = images[0]

            return { name, alias, affiliation, gender, status, image }
        })
        return characters

    }
    return []
}

export default function getCharacters() {
    return fetch(url)
        .then((res) => res.json())
        .then(fromApiResponseToCharacters)
}