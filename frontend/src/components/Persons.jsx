import personService from '../services/persons'

const Persons = ({ persons, onDelete }) => {
    return (
        <div>
            {persons.map(person => 
            <div key = {person.name}>
                {person.name} {person.number}
                <button type="button" onClick = {() => onDelete(person.id)}>
                    delete
                </button>
            </div>)}
        </div>
    )
}

export default Persons