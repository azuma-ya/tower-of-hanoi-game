import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Box({ box, index }) {
	const [width, setWidth] = useState(window.innerWidth);
	const [isDrag, setIsDrag] = useState(index === 0 ? false : true);

	const resize = () => {
		setWidth(window.innerWidth);
	};

	const style = {
		width: box.width * (width / 30),
		height: 30,
		backgroundColor: box.color,
	};

	useEffect(() => {
		window.addEventListener("resize", resize);
	}, []);

	useEffect(() => {
		setIsDrag(index === 0 ? false : true);
	}, [index]);

	return (
		<Draggable
			draggableId={box.id}
			index={index}
			key={box.id}
			isDragDisabled={isDrag}
		>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div className="box" style={style}></div>
				</div>
			)}
		</Draggable>
	);
}
