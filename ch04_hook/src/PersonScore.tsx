import {useEffect} from "react";
import getPerson from "./getPerson.ts";

export function PersonScore() {

	useEffect( () => {
		getPerson().then(person => {
			console.log(person);
		})
	}, [])
	return null;
}
