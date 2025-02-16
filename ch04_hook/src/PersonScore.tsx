import {useEffect, useState} from "react";
import getPerson from "./getPerson.ts";

export function PersonScore() {

	const [name, setName] = useState<string | null>();
	const [score, setScore] = useState(0);
	const [loading, setLoading] = useState(true);


	useEffect(  () => {

			// const person =  getPerson();
			// console.log(person);

		getPerson().then(person => {
			setLoading(false);
			setName(person.name);
			console.log(person);
			console.log("state values:", name, loading);
		})
	}, [])

function handleAddScore() {
 		setScore(prev => prev + 1);
}

	if (loading) {
		return <div>Loading...</div>;
	}

	return <div>
		<h3>Name: {name},   Score: {score}</h3>
		<button onClick={handleAddScore}> Add</button>
		<button onClick={() => setScore(score -1)}> Subtract</button>
		<button onClick={() => setScore(0)}> Reset</button>
	</div>;

	// return () => {};
	return null;
}
