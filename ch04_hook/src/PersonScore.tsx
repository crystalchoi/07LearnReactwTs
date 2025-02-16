import {useEffect, useReducer, useRef, useState} from "react";
import getPerson from "./getPerson.ts";

type State = {
	name: string | undefined,
	score: number,
	loading: boolean
};

type Action = {
	type: 'initialize';
	name: string;
}
	| {
	type: 'increment';
}
	| {
	type: 'decrement';
}
	| {
	type: 'reset';
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'initialize':
			return { name: action.name, score: 0, loading: false };
		case "increment":
			return {...state, score: state.score + 1};
		case 'decrement':
			return {...state, score: state.score - 1};
		case 'reset':
			return {...state, score: 0};
		default:
			return state;
	}
}

export function PersonScore() {

	// const [name, setName] = useState<string | null>();
	// const [score, setScore] = useState(0);
	// const [loading, setLoading] = useState(true);

	const [{ name, score, loading}, dispatch] = useReducer(reducer, { name: undefined, score: 0, loading: true});
	const addButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(  () => {

			// const person =  getPerson();
			// console.log(person);

		getPerson().then(({ name }) => {
			// setLoading(false);
			// setName(person.name);
			// console.log(person);
			dispatch( { type: 'initialize', name});
			console.log("dispatch state values:", name, loading);
			addButtonRef.current?.focus();
		})
	}, []);
	useEffect(() => {
		if (!loading) {
			addButtonRef.current?.focus();
		}
	}, [loading]);

function handleAddScore() {
 		// setScore(prev => prev + 1);
	dispatch( { type: 'increment'})
}

	if (loading) {
		return <div>Loading...</div>;
	}

	return <div>
		<h3>Name: {name}, Score: {score} loading: {loading}</h3>
		<button ref={addButtonRef} onClick={handleAddScore}> Add</button>
		<button onClick={() => dispatch({type: 'decrement'})}> Subtract</button>
		<button onClick={() => dispatch({type: 'reset'})}> Reset</button>
		<button onClick={() => dispatch({type: 'initialize'})}> Init</button>
	</div>;

	// return () => {};
	return null;
}
