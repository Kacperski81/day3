import characters from '../data/characterData.json';
import Character from './Character';
export default function CharacterGallery() {
    const charactersElements = characters.map(character => (
        <Character
            key={character._id}
            image={character.imgUrl}
            name={character.name}
            birth={character.birth}
            deth={character.death}
            race={character.race}
            realm={character.realm}
            spouse={character.spouse}
        />
    ))

    return (
        <>
            {charactersElements}
        </>
    )
}