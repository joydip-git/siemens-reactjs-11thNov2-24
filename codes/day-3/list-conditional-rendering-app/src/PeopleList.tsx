import { useState } from "react"

const PeopleList = () => {
    const [people, setPeople] = useState(
        [
            {
                id: 1,
                name: 'anil',
                salary: 2000
            },
            {
                id: 2,
                name: 'sunil',
                salary: 3000
            },
            {
                id: 3,
                name: 'joydip',
                salary: 1000
            }
        ]
    )

    const deletePerson = (index: number) => {
        setPeople(
            (oldPeople) => {
                oldPeople.splice(index, 1)
                return [...oldPeople]
            }
        )
    }
    const sortPeople = () => {
        console.log('sorting...');

        setPeople(
            (oldPeople) => {
                oldPeople.sort(
                    (p1, p2) => p1.name
                        .toLocaleLowerCase()
                        .localeCompare(p2.name.toLocaleLowerCase())
                )
                return [...oldPeople]
            }
        )
    }
    return (
        <div>
            <ul>
                {
                    people
                        .map(
                            (p, index) => {
                                /**do not use index of any element in the array as key value, as it is subject to change. its an anti-pattern */
                                return (
                                    <li key={p.id}>
                                        <span>{p.name}</span>
                                        &nbsp;<button type="button" onClick={() => deletePerson(index)}>X</button>
                                    </li>
                                )
                            }
                        )
                }
            </ul>
            <br />
            <br />
            <button type="button" onClick={sortPeople}>Sort People</button>
        </div>
    )
}

export default PeopleList