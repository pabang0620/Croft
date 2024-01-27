import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import GridData from "./GridData";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CroftGuide from "../../Charts/CroftGuide/CroftGuide";

const WonhoGrid = ({ editMode, setEditMode }) => {
  const [wonhoGridData, setWonhoGridData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    setWonhoGridData((prevData) =>
      prevData.map((item) => {
        if (item.id === 2) {
          return {
            ...item,
            layout: { ...item.layout, h: showDetail ? 5 : 2 },
          };
        }
        return item;
      })
    );
  }, [showDetail]);

  useEffect(() => {
    const storedData = localStorage.getItem("checkedItems");
    if (storedData) {
      const storedDataArray = JSON.parse(storedData);
      const filteredGridData = GridData.filter((item) =>
        storedDataArray.includes(item.chartID)
      ).map((item) => item.id);
      setWonhoGridData(
        GridData.filter((item) => filteredGridData.includes(item.id))
      );
    }
  }, []); // 여기

  const [layout, setLayout] = useState();
  const [chartInstances, setChartInstances] = useState({});

  useEffect(() => {
    // 로컬 스토리지에서 레이아웃 데이터 불러오기
    const savedLayout = localStorage.getItem("wonhoGridLayout");

    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    } else {
      // 로컬 스토리지에 데이터가 없을 경우 기본 레이아웃 사용
      setLayout(
        GridData.map((item) => ({
          ...item.layout,
          i: item.id.toString(),
        }))
      );
    }
  }, []);

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
    if (editMode) {
      localStorage.setItem("wonhoGridLayout", JSON.stringify(layout));
    }
    setEditMode(!editMode);
  };

  return (
    <>
      <div className="absolute top-[72px] left-[240px] w-[28px] h-[14px]">
        <button
          type="button"
          onClick={toggleEditMode}
          className={`${
            editMode ? "bg-[#3F9192]" : "bg-gray-200"
          } absolute inset-0 w-full h-full rounded-full transition-colors`}
        >
          <span
            className={`${
              editMode ? "translate-x-[2px]" : "translate-x-[-10px]"
            } absolute left-[12px] top-[1px] w-[12px] h-[12px] transform bg-white rounded-full transition-transform`}
          />
        </button>
      </div>
      {/* <TotalResourceChart /> */}
      <GridLayout
        className="layout select-none" // 여기에 select-none 클래스 추가
        cols={10}
        rowHeight={100}
        width={1660}
        onLayoutChange={onLayoutChange}
        isDraggable={editMode}
        isResizable={editMode} // 전체 레이아웃에 대한 isResizable 설정
      >
        {wonhoGridData.map((item) => (
          <div
            key={item.id.toString()}
            data-grid={{ ...item.layout, isResizable: editMode }}
          >
            {item.id === 2 ? (
              <CroftGuide
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                // 다른 필요한 props
              />
            ) : (
              React.cloneElement(item.component, {
                registerChart: registerChart,
                chartKey: item.id.toString(),
                layout: item.layout,
              })
            )}
          </div>
        ))}
      </GridLayout>
    </>
  );
};

export default WonhoGrid;
