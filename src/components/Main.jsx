import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Box from "./Box";
import { data } from "../data.js";

export default function Main({ setGameClear }) {
	const [towers, setTowers] = useState(data);

	const handleDragEnd = (result) => {
		//タスクを並び替える
		const { source, destination } = result;
		if (destination && source.droppableId !== destination.droppableId) {
			const sourceColIndex = towers.findIndex(
				(e) => e.id === source.droppableId
			);
			const destinationColIndex = towers.findIndex(
				(e) => e.id === destination.droppableId
			);
			const sourceCol = towers[sourceColIndex];
			const destinatinCol = towers[destinationColIndex];

			const sourceTower = [...sourceCol.boxes];
			const destinationTower = [...destinatinCol.boxes];

			if (destination.index === 0) {
				if (
					(destinationTower[0] &&
						destinationTower[0].width > sourceTower[source.index].width) ||
					destinationTower[0] === undefined
				) {
					//動かし始めたタスクの削除
					const [removed] = sourceTower.splice(source.index, 1);
					//動かした後のカラムにタスクの追加
					destinationTower.splice(destination.index, 0, removed);

					towers[sourceColIndex].boxes = sourceTower;
					towers[destinationColIndex].boxes = destinationTower;
				}
			}
		}

		setTowers(towers);
		if (towers[2].boxes.length === 5) setGameClear(true);
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<div className="gameArea">
				{towers.map((tower) => (
					<Droppable
						key={tower.id}
						droppableId={tower.id}
						className="towerArea"
					>
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className="tower"
							>
								<div className="stick"></div>
								<div className="boxes">
									{tower.boxes.map((box, index) => (
										<Box box={box} index={index} key={box.id} />
									))}
									{provided.placeholder}
								</div>
							</div>
						)}
					</Droppable>
				))}
			</div>
		</DragDropContext>
	);
}
