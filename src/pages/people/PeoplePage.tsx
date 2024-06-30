import React, { useState, useContext } from 'react';
import { 
    Wrapper,
    Header,
    TableRow,
    TableColumn,
    TableHeaderColumn,
    FormWrapper,
    FormRow,
    FormInput,
    ActionsWrapper
} from './PeoplePage.styles';
import { StarWarsContext } from '../../StarWarsContext';
import Button from '../../components/Button';
import Modal from '../../components/modal/Modal';

interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

const fieldNames = [ "name",
"height",
"mass",
"hair_color",
"skin_color",
"eye_color",
"birth_year",
"gender"
];

const initialFormData: Partial<Person> = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: ''
}; 

const PeoplePage: React.FC = () => {
    const { results } = useContext(StarWarsContext);
    // @ts-expect-error: Let's ignore a compile error like this unreachable code 
    const [people, setPeople] = useState<Person[]>(results.people);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState<Partial<Person>>(initialFormData);

    const columns = fieldNames;

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const handleCancel = () => {
        setFormData(initialFormData);
        setEditIndex(null);
        setShowModal(!showModal);
      };

    const handleDelete = (index: number) => {
        setPeople(prev => prev.filter((_, idx) => idx !== index));
        setEditIndex(null); // Reset edit mode if deleting the edited row
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        const { value } = e.target;
        setFormData(prev => ({
          ...prev,
          [fieldName]: value
        }));
      };    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editIndex !== null) {
        const updatedPeople = [...people];
        updatedPeople[editIndex] = {
            ...updatedPeople[editIndex],
            ...formData
        };
        setPeople(updatedPeople);
        setEditIndex(null);
        } else {
            const newPerson: Person = {
                name: formData.name || '',
                height: formData.height || '',
                mass: formData.mass || '',
                hair_color: formData.hair_color || '',
                skin_color: formData.skin_color || '',
                eye_color: formData.eye_color || '',
                birth_year: formData.birth_year || '',
                gender: formData.gender || ''
            };
            setPeople(prev => [...prev, newPerson]);
        }
        setFormData(initialFormData); // Reset form fields after submission
        setShowModal(!showModal);
    };

    const handleEdit = (index: number) => {
        setFormData(people[index]);
        setEditIndex(index);
        setShowModal(!showModal);
      };

    return (
        <Wrapper>
            <Header>
                <h1>People Page</h1>
                <Button onClick={toggleModal}>Create</Button>
            </Header>
            <div>
                <TableRow>{
                    columns.map(column => (
                        <TableHeaderColumn key={column}>{column.replace(/_/g," ")}</TableHeaderColumn>
                    ))}
                    <TableHeaderColumn key="action">Actions</TableHeaderColumn>
                </TableRow>
                {people?.map((person, index) => (
                    <TableRow key={person.name}>
                        {columns.map((column, index) => (
                            //  @ts-expect-error: Let's ignore a compile error like this unreachable code 
                            <TableColumn key={`${person.name} - ${person[column]}${index}`}>{person[column]}</TableColumn>
                        ))}
                        <TableColumn>
                            <Button onClick={() => handleDelete(index)}>Delete</Button>
                            <Button onClick={() => handleEdit(index)}>Edit</Button>
                        </TableColumn>
                    </TableRow>
                ))}
            </div>
            {showModal && 
                <Modal title="create people" cancel="Cancel" onCancel={handleCancel} submit="Create">
                    <form onSubmit={handleSubmit}>
                        <FormWrapper>
                            {columns.map(column => (
                                    
                                <FormRow>
                                <FormInput
                                    placeholder={column.replace(/_/g, " ")}
                                    type="text"
                                    id={column}
                                    name={column}
                                    value={formData[column as keyof Person] || ''}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, column)}
                                />
                                </FormRow>
                            ))}
                            <ActionsWrapper>
                                <Button type="submit">Submit</Button>
                            </ActionsWrapper>
                        </FormWrapper>
                    </form>
                </Modal>
            }
        </Wrapper>
    );
};

export default PeoplePage;