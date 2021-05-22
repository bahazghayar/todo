import { useState, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../components/auth/context';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useAjax = (url) => {
	const [list, setList] = useState([]);

	const loginContext = useContext(LoginContext);

	// const _addItem = async (item) => {
	// 	item.due = new Date();
	// 	const results = await axios.post(todoAPI, item);
	// 	setList([...list, results.data]);
	// };

	let config = {
		headers: {
			mode: 'cors',
			cache: 'no-cache',
			'Content-Type': 'application/json',
		},
	};

	// const _toggleComplete = async (id) => {
	// 	let item = list.filter((i) => i._id === id)[0] || {};

	// 	if (item._id) {
	// 		item.complete = !item.complete;
	// 		let url = `${todoAPI}/${id}`;

	// 		const results = await axios.put(url, item);
	// 		setList(
	// 			list.map((listItem) =>
	// 				listItem._id === item._id ? results.data : listItem,
	// 			),
	// 		);
	// 	}
	// };

	const fetchingData = async (id, method = 'get', item) => {
		if (method === 'get') {
			const results = await axios[method](url, config);
			setList([...results.data.results]);
		}


		// const _getTodoItems = async () => {
		// 	const results = await axios.get(todoAPI);
		// 	setList([...results.data.results]);
		// };

		if (method === 'post' && (loginContext.user.user.type === 'admin' || loginContext.user.user.type === 'editor')) {
			item.due = new Date();
			const results = await axios[method](url, item, config);
			setList([...list, results.data]);
		}

		// const _deleteTask = async (id) => {
		// 	let item = list.find((i) => i._id === id) || {};

		if (method === 'put' && (loginContext.user.user.type === 'admin' || loginContext.user.user.type === 'editor')) {

			let item = list.filter((i) => i._id === id)[0] || {};

			if (item._id) {
				item.complete = !item.complete;
				const results = await axios[method](`${url}/${id}`, item, config);
				setList(
					list.map((listItem) =>
						listItem._id === item._id ? results.data : listItem,
					),
				);
			}
		}

		// if (item._id) {
		// 	item.complete = !item.complete;
		// 	let url = `${todoAPI}/${id}`;

		// 	const results = await axios.delete(url);
		// 	setList(list.filter((listItem) => listItem._id !== results.data._id));
		// }
		// };

		if (method === 'delete' && loginContext.user.user.type === 'admin') {
			let item = list.find((i) => i._id === id) || {};

			if (item._id) {
				const results = await axios[method](`${url}/${id}`, config);
				setList(list.filter((listItem) => listItem._id !== results.data._id));
			}
		}
	}
	return [list, fetchingData];
};

export default useAjax;