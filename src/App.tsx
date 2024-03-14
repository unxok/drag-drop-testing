import React, { useState } from "react";
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
	UniqueIdentifier,
} from "@dnd-kit/core";
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./components/SortableItem";
import { Droppable } from "./components/Droppable";

const App = () => {
	const [items, setItems] = useState([1, 2, 3]);
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<div className='bg-neutral-800 text-slate-300 inset-0 fixed flex justify-center items-center flex-col gap-3 border'>
				<SortableContext
					items={items}
					strategy={verticalListSortingStrategy}
				>
					<div
						id='lane'
						className='bg-slate-600 border p-5 flex flex-col justify-center items-center gap-3'
					>
						{items.map((id) => (
							<SortableItem
								key={id}
								id={id}
							/>
						))}
					</div>
				</SortableContext>
				<SortableContext
					items={[]}
					strategy={verticalListSortingStrategy}
				>
					<Droppable>
						<div
							id='lane'
							className='bg-slate-600 border p-5 flex flex-col justify-center items-center gap-3'
						></div>
					</Droppable>
				</SortableContext>
			</div>
		</DndContext>
	);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (active.id !== over?.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active?.id as number);
				const newIndex = items.indexOf(over?.id as number);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}
};

export default App;
