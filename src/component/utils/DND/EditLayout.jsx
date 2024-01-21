// import React, { useState } from 'react';
// import GridLayout from 'react-grid-layout';
// import DashSubBar from '../../../layout/NavBar/SubNavBar/DashSubBar';
// import GridData from './GridData';
// // import TotalResourceChart from '../../Charts/TotalResourceChart/TotalResourceChart';

// const EditLayout = ({ editMode, setEditMode }) => {
//   const [gridLayoutData, setGridLayoutData] = useState(GridData); // 상태로 관리

//   const calculateLayoutForComponent = (index) => {
//     const positionMap = {
//       0: { x: 0, y: 0 },
//       1: { x: 4, y: 0 },
//       2: { x: 6, y: 0 },
//       3: { x: 0, y: 5 },
//       4: { x: 0, y: 1 },
//       5: { x: 2, y: 1 },
//       6: { x: 4, y: 1 },
//       7: { x: 8, y: 1 },
//       8: { x: 0, y: 2 },
//       9: { x: 2, y: 2 },
//       10: { x: 0, y: 3 },
//       11: { x: 2, y: 3 },
//       12: { x: 4, y: 3 },
//       13: { x: 0, y: 4 },
//       14: { x: 2, y: 4 },
//       15: { x: 4, y: 4 },
//       16: { x: 6, y: 4 },
//       17: { x: 0, y: 6 },
//     };

//     const position = positionMap[index];
//     let width;
//     if (index === 6 || index === 7) {
//       width = 3;
//     } else if (index === 0 || index === 2 || index === 3) {
//       width = 4;
//     } else {
//       width = 2;
//     }
//     const height = index === 6 || index === 7 ? 4 : 2;

//     return {
//       i: index.toString(),
//       x: position.x,
//       y: position.y,
//       w: width,
//       h: height,
//       isResizable: true,
//     };
//   };

//   const initialLayout = GridData.map((_, index) =>
//     calculateLayoutForComponent(index)
//   );

//   // const addComponent = (newComponent) => {
//   const addComponent = (componentKey) => {
//     // GridData
//     const newComponent = GridData.filter(
//       (_, index) => index.toString() === componentKey
//     );
//     setGridLayoutData([...gridLayoutData, newComponent]);
//     // 필요하면 여기서 layout도 업데이트
//     // 레이아웃을 새롭게 계산합니다. 이 때, 삭제된 컴포넌트의 인덱스를 고려합니다.
//     const newLayout = gridLayoutData.map((_, index) => {
//       // 여기서 'index'는 새로운 배열의 인덱스이므로, 실제 'positionMap'에서 사용되어야 할
//       // 인덱스와 일치하지 않을 수 있습니다. 이를 매핑하기 위해 원본 배열을 참조합니다.
//       const originalIndex = gridLayoutData.findIndex(
//         (component, compIndex) => compIndex.toString() === index.toString()
//       );
//       return calculateLayoutForComponent(originalIndex);
//     });

//     setLayout(newLayout);
//   };
//   const removeComponent = (componentKey) => {
//     const newGridData = gridLayoutData.filter(
//       (_, index) => index.toString() !== componentKey
//     );
//     setGridLayoutData(newGridData);

//     // 레이아웃을 새롭게 계산합니다. 이 때, 삭제된 컴포넌트의 인덱스를 고려합니다.
//     const newLayout = newGridData.map((_, index) => {
//       // 여기서 'index'는 새로운 배열의 인덱스이므로, 실제 'positionMap'에서 사용되어야 할
//       // 인덱스와 일치하지 않을 수 있습니다. 이를 매핑하기 위해 원본 배열을 참조합니다.
//       const originalIndex = gridLayoutData.findIndex(
//         (component, compIndex) => compIndex.toString() === index.toString()
//       );
//       return calculateLayoutForComponent(originalIndex);
//     });

//     setLayout(newLayout);
//   };

//   // 삭제 추가 로직 끝 --------------
//   // 초기 레이아웃 설정

//   const [layout, setLayout] = useState(initialLayout);
//   const [chartInstances, setChartInstances] = useState({});

//   const onLayoutChange = (newLayout) => {
//     setLayout(newLayout);
//     Object.values(chartInstances).forEach((chart) => chart.resize());
//   };

//   const registerChart = (key, instance) => {
//     setChartInstances((prev) => ({ ...prev, [key]: instance }));
//   };

//   // 수정모드 토글 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   const toggleEditMode = () => {
//     setEditMode(!editMode); // 수정 모드 토글
//   };

//   return (
//     <div className="select-none h-full w-full overflow-hidden">
//       <button onClick={toggleEditMode}>
//         {editMode ? '수정 완료' : '레이아웃 수정'}
//       </button>
//       {/* <TotalResourceChart /> */}
//       <div className="pr-[12rem] pt-[45px] pl-[25px] overflow-y-auto h-fit"></div>
//       <GridLayout
//         className="layout"
//         layout={layout}
//         cols={10}
//         rowHeight={100}
//         width={1650}
//         onLayoutChange={onLayoutChange}
//         isDraggable={editMode}
//         isResizable={editMode} // 전체 레이아웃에 대한 isResizable 설정
//       >
//         {gridLayoutData.map((Component, i) => (
//           <div
//             key={i.toString()}
//             data-grid={{
//               ...layout.find((item) => item.i === i.toString()),
//               isResizable: editMode && !(i === 0 || i === 1 || i === 5), // 개별 아이템에 대한 isResizable 설정
//             }}
//           >
//             {editMode && (
//               <button
//                 className=""
//                 onClick={() => removeComponent(i.toString())}
//               >
//                 삭제
//               </button>
//             )}
//             {React.cloneElement(Component, {
//               registerChart,
//               chartKey: i.toString(),
//               layout: layout.find((item) => item.i === i.toString()),
//             })}
//           </div>
//         ))}
//       </GridLayout>
//       <DashSubBar
//         setEditMode={setEditMode}
//         removeComponent={removeComponent}
//         addComponent={addComponent}
//       />
//     </div>
//   );
// };

// export default EditLayout;
