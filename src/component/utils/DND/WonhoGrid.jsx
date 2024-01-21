import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import GridData from "./GridData";

const WonhoGrid = () => {
  const [wonhoGridData, setWonhoGridData] = useState([]);
  const [editMode, setEditMode] = useState(false); // 수정 모드 상태

  useEffect(() => {
    const storedData = localStorage.getItem("wonhoGridComponents");
    if (storedData) {
      setWonhoGridData(JSON.parse(storedData));
    } else {
      setWonhoGridData(GridData.filter((item) => [1, 2, 3].includes(item.id)));
    }
  }, []);

  const calculateLayoutForComponent = (item) => {
    return {
      i: item.id.toString(), // 여기에서 id를 문자열로 변환
      x: item.layout.x,
      y: item.layout.y,
      w: item.layout.w,
      h: item.layout.h,
      isResizable: true,
    };
  };

  const [layout, setLayout] = useState(() =>
    GridData.map((item) => calculateLayoutForComponent(item))
  );
  const [chartInstances, setChartInstances] = useState({});

  const onLayoutChange = (newLayout) => {
    if (JSON.stringify(newLayout) !== JSON.stringify(layout)) {
      // 새로운 레이아웃으로 상태 업데이트
      setLayout(newLayout);

      // wonhoGridData도 새로운 레이아웃으로 업데이트
      const updatedWonhoGridData = wonhoGridData.map((item) => {
        const newItemLayout = newLayout.find(
          (layoutItem) => layoutItem.i === item.id.toString()
        );
        return newItemLayout ? { ...item, layout: newItemLayout } : item;
      });

      setWonhoGridData(updatedWonhoGridData);
    }

    Object.values(chartInstances).forEach((chart) => chart.resize());
  };

  const registerChart = (key, instance) => {
    setChartInstances((prev) => ({ ...prev, [key]: instance }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode); // 수정 모드 토글
  };

  return (
    <>
      <button onClick={toggleEditMode}>
        {editMode ? "수정 완료" : "레이아웃 수정"}
      </button>
      {/* <TotalResourceChart /> */}
      <GridLayout
        className="layout"
        cols={10}
        rowHeight={100}
        width={1660}
        onLayoutChange={onLayoutChange}
        isDraggable={editMode}
        isResizable={editMode} // 전체 레이아웃에 대한 isResizable 설정
      >
        {wonhoGridData.map((item) => (
          <div
            key={item.id.toString()} // 고유한 key로 item의 id를 사용
            data-grid={{
              ...item.layout, // item의 layout 정보를 사용
              isResizable:
                editMode && !(item.id === 0 || item.id === 1 || item.id === 5), // 조건에 따른 isResizable 설정
            }}
          >
            {React.cloneElement(item.component, {
              registerChart: registerChart,
              chartKey: item.id.toString(),
              layout: item.layout, // item의 layout 정보 전달
            })}
          </div>
        ))}
      </GridLayout>
    </>
  );
};

export default WonhoGrid;
