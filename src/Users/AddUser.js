import React, { useState } from 'react';

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid name',
				message: 'Error empty'
			})
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Error age'
			})
			return;
		}
		console.log(enteredAge, enteredUserName)
		setEnteredUserName('')
		setEnteredAge('')

		props.onAddUser(enteredUserName, enteredAge)
	};

	const usernameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	}

	return (
		<div>
			{error && <ErrorModal title="An error occured" message="Something went wrong" onConfirm={errorHandler}/>}
			<Card memeName={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username
					</label>
					<input value={enteredUserName} id="username" type="text" onChange={usernameChangeHandler} />
					<label htmlFor="age">Age (years)
					</label>
					<input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	)
}

export default AddUser;