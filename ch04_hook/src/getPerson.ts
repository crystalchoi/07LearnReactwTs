type Person = {
	name: string,
}

export default function getPerson(): Promise<Person> {
	return new Promise((resolve, reject) => {
		setTimeout(() => { resolve( {name: "Bob"})}, 2000)
	})
}
