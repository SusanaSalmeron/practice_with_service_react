class CharacterService {
    url = "https://myheroacademiaapi.com/api/"

    toCharacter = data => {
        const { id, name, alias, affiliation, gender, status, images, occupation } = data
        const image = images[0]

        return { id, name, alias, affiliation, gender, status, image, occupation }
    }

    fromApiResponseToCharacters = apiResponse => {
        const { result = [] } = apiResponse;
        const { info = {} } = apiResponse;
        const characters = result.map(this.toCharacter)
        const isLastPage = info.pages === info.currentPage
        return { isLastPage, characters }
    }

    getCharacters = async page => {

        const apiUrl = `${this.url}character?page=${page}`;
        const res = await fetch(apiUrl);
        const apiResponse = await res.json();
        return this.fromApiResponseToCharacters(apiResponse);
    }

    getCharacterById = async id => {
        const apiUrl = `${this.url}character/${id}`;
        return fetch(apiUrl)
            .then((res) => res.json())
            .then(this.toCharacter)

    }
}
export default CharacterService
