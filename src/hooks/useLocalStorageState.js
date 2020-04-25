import { useEffect, useState } from "react";

function useLocalStorageState(key, initVal) {
	const [state, setstate] = useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key)) || String(initVal);
		} catch (error) {
			val = initVal;
		}
		return val;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setstate];
}

export default useLocalStorageState;
