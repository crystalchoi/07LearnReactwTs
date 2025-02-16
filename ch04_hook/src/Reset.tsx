import {memo} from "react";

type Props = {
	onClick: () => void,
}
//
// export function Reset(props: Props) {
// 	console.log("Reset comp: ", props)
// 	return <button onClick={() => props.onClick}> Reset </button>
// }


export const Reset = memo( ({ onClick }: Props)=> {
	console.log("Reset render ")
	return <button onClick={onclick}> Reset </button>;
});

Reset.displayName = "Reset";
