import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from './Container';

const TestDashBoard = () => {
  //추후 드래그 앤 드랍 라이브러리 확정되면 사용하지 않는 라이브러리들 삭제 예정
  return (
    <div className="flex flex-col p-4 gap-2">
      <div>드래그 앤 드랍 Test</div>

      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
};

export default TestDashBoard;
