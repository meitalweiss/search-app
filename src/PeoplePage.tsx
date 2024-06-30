import React, { useState } from 'react';
import { Wrapper, Header, TableRow, TableColumn, TableHeaderColumn } from './PeoplePage.styles';
import Button from './components/Button';

interface Person {
    name: string;
   height: string;
   mass: string;
   hair_color:string;
   skin_color: string;
   eye_color: string;
   birth_year: string;
   gender: string;
   [key: string]: string;
}

const categories = [ "name",
"height",
"mass",
"hair_color",
"skin_color",
"eye_color",
"birth_year",
"gender"
]
const peopleList = [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
    },
    {
      "name": "Leia Organa",
      "height": "150",
      "mass": "49",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "19BBY",
      "gender": "female",
    },
    {
      "name": "Owen Lars",
      "height": "178",
      "mass": "120",
      "hair_color": "brown, grey",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "52BBY",
      "gender": "male",
    },
    {
      "name": "Beru Whitesun lars",
      "height": "165",
      "mass": "75",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "47BBY",
      "gender": "female",
    },
    {
      "name": "Biggs Darklighter",
      "height": "183",
      "mass": "84",
      "hair_color": "black",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "24BBY",
      "gender": "male",
    },
    {
      "name": "Anakin Skywalker",
      "height": "188",
      "mass": "84",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "41.9BBY",
      "gender": "male",
    },
    {
      "name": "Wilhuff Tarkin",
      "height": "180",
      "mass": "unknown",
      "hair_color": "auburn, grey",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "64BBY",
      "gender": "male",
    },
    {
      "name": "Han Solo",
      "height": "180",
      "mass": "80",
      "hair_color": "brown",
      "skin_color": "fair",
      "eye_color": "brown",
      "birth_year": "29BBY",
      "gender": "male",
    },
    {
      "name": "Jabba Desilijic Tiure",
      "height": "175",
      "mass": "1,358",
      "hair_color": "n/a",
      "skin_color": "green-tan, brown",
      "eye_color": "orange",
      "birth_year": "600BBY",
      "gender": "hermaphrodite",
    },
    {
      "name": "Wedge Antilles",
      "height": "170",
      "mass": "77",
      "hair_color": "brown",
      "skin_color": "fair",
      "eye_color": "hazel",
      "birth_year": "21BBY",
      "gender": "male",
    }
  ]

const PeoplePage: React.FC = () => {
    const [people, setPeople] = useState<Person[]>(peopleList);
    const columns = categories;

    const handleDelete = (id: number) => {
        console.log('delete');
    };

    const handleCreate = () => {
        console.log('create');
    };

    return (
        <Wrapper>
            <Header>
                <h1>People Page</h1>
                <Button onClick={handleCreate}>Create</Button>
            </Header>
            <div className="people-list">
                <TableRow>{columns.map(column => (
                    <TableHeaderColumn key={column}>{column.replace(/_/g," ")}</TableHeaderColumn>
                ))}</TableRow>
                {people.map(person => (
                    <TableRow key={person.name}>
                        {columns.map((column, index) => (
                            <TableColumn key={`${person.name} - ${person[column]}${index}`}>{person[column]}</TableColumn>
                        ))}
                    </TableRow>
                ))}
            </div>
        </Wrapper>
    );
};

export default PeoplePage;