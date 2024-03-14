import {
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "..";

export const SortableLane = ({
	laneId,
	items,
}: {
	laneId: number;
	items?: number[];
}) => {
	useSortable({ id: laneId });

	return (
		// <SortableContext
		// 	items={items}
		// 	strategy={verticalListSortingStrategy}
		// >
		<div className='bg-neutral-800 text-slate-300 inset-0 fixed flex justify-center items-center flex-col gap-3 border'>
			<div
				id='lane'
				className='bg-slate-600 border p-5 flex flex-col justify-center items-center gap-3'
			>
				{items?.map((id) => (
					<SortableItem
						key={id}
						id={id}
					/>
				))}
			</div>
		</div>
		// </SortableContext>
	);
};
