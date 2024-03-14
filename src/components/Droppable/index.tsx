import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

export const Droppable = ({ children }: { children: ReactNode }) => {
	const { setNodeRef } = useDroppable({
		id: 8,
	});

	return <div ref={setNodeRef}>{children}</div>;
};
