import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableItem = ({ id }: { id: number }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className='border rounded-md p-2 bg-neutral-900 text-slate-400'
		>
			<div>{id}</div>
			<div>Can you drag me?</div>
		</div>
	);
};
