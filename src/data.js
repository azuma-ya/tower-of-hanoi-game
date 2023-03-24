import { v4 as uuidv4 } from "uuid";

export const data = [
	{
		id: uuidv4(),
		boxes: [
			{ id: uuidv4(), width: 1, color: "#ff8000" },
			{ id: uuidv4(), width: 2, color: "#e6ff00" },
			{ id: uuidv4(), width: 3, color: "#4dff00" },
			{ id: uuidv4(), width: 4, color: "#00ff4d" },
			{ id: uuidv4(), width: 5, color: "#00ffe6" },
			// { id: uuidv4(), width: 6, color: "#0080ff" },
			// { id: uuidv4(), width: 7, color: "#1a00ff" },
			// { id: uuidv4(), width: 8, color: "#b300ff" },
			// { id: uuidv4(), width: 9, color: "#ff00b3" },
			// { id: uuidv4(), width: 10, color: "#ff001a" },
		],
	},
	{
		id: uuidv4(),
		boxes: [],
	},
	{
		id: uuidv4(),
		boxes: [],
	},
];
