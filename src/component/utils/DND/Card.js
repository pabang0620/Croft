import { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const style = {
  borderRadius: '10px',
  backgroundColor: 'white',
  cursor: 'pointer',
  flexShrink: '0',
};

export const Card = memo(function Card({ id, text, width, height, moveCard, findCard }) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: 'CARD',
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [originalIndex]
  );

  const [, dropRef] = useDrop(
    () => ({
      accept: 'CARD',
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      style={{
        ...style,
        opacity: isDragging ? 0.4 : 1,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {text}
    </div>
  );
});