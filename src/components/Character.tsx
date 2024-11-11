//@ts-ignore
const Character = ({ character }) => {

    return (
        <div className="character">
            <h1 className="character-name">{character.name}</h1>
            <h1 className="character-status">{character.status}</h1>
            <h1 className="character-species">{character.species}</h1>
            <h1 className="character-gender">{character.gender}</h1>
            <img src={character?.image} alt={character.name} className="character-image" />
        </div>
    )
}

export { Character }