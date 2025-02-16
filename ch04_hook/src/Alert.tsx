import {useState} from "react";

type Props = {
	type?: string;
	heading: string;
	children?: React.ReactNode;
	closable?: boolean;
	onClose?: () => void;
}



export function Alert( {
	type = "info",
	heading,
	children,
	closable,
	onClose
} : Props) {

	const [visible, setVisible] = useState(false);

	if (!visible) {
		return <div> Gone! </div>;
		// return null;
	}

}
