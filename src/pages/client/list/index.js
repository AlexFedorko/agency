import React, {memo} from 'react';
import Table from "components/Table";

const columns = [
    {
        label: 'User name',
        className: 'text-red',
        render: row => row.firstName + ' ' + row.lastName
    },
    {
        label: 'First name',
        dataIndex: 'firstName',
    },
    {
        label: 'Last name',
        dataIndex: 'lastName'
    },
    {
        label: 'Age',
        dataIndex: 'age'
    },
    {
        label: 'Progress',
        dataIndex: 'points',
         render: {} // Checking error for render function
    },
    {
        label: 'Action',
        render: (row) => <button onClick={() => alert('Name is: ' + row.firstName)}>Action</button>
    }
];

const dataArray = [
    {
        firstName: "James",
        lastName: "Matman",
        jobTitle: "Chief Sandwich Eater",
        favoriteColor: "Lettuce Green",
        warsOrTrek: "Trek",
        secretAlias: "Digby Green",
        dateOfBirth: "January 13, 1979",
        dreamVacationCity: "Gotham City",
        gpa: "3.1",
        arbitraryData: "RBX-12"
    },
    {
        firstName: "The",
        lastName: "Tick",
        jobTitle: "Crimefighter Sorta",
        favoriteColor: "Blue",
        warsOrTrek: "Wars",
        secretAlias: "John Smith",
        dateOfBirth: "July 19, 1968",
        dreamVacationCity: "Athens",
        gpa: "N/A",
        arbitraryData: "Edlund, Ben (July 1996)."
    },
    {
        firstName: "Jokey",
        lastName: "Smurf",
        jobTitle: "Giving Exploding Presents",
        favoriteColor: "Smurflow",
        warsOrTrek: "Smurf",
        secretAlias: "Smurflane Smurfmutt",
        dateOfBirth: "Smurfuary Smurfteenth, 1945",
        dreamVacationCity: "New Smurf City",
        gpa: "4.Smurf",
        arbitraryData: "One"
    },
    {
        firstName: "Cindy",
        lastName: "Beyler",
        jobTitle: "Sales Representative",
        favoriteColor: "Red",
        warsOrTrek: "Wars",
        secretAlias: "Lori Quivey",
        dateOfBirth: "July 5, 1956",
        dreamVacationCity: "Paris",
        gpa: "3.4",
        arbitraryData: "3451"
    },
    {
        firstName: "Captain",
        lastName: "Cool",
        jobTitle: "Tree Crusher",
        favoriteColor: "Blue",
        warsOrTrek: "Wars",
        secretAlias: "Steve 42nd",
        dateOfBirth: "December 13, 1982",
        dreamVacationCity: "Las Vegas",
        gpa: "1.9",
        arbitraryData: "Under the couch"
    }
];


function ClientList() {
    return (
        <Table
            columns={columns}
            data={dataArray}
            style={{margin: '30px'}}
        />
    )
}

export default memo(ClientList)