import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import GridData from "./GridData";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CroftGuide from "../../Charts/CroftGuide/CroftGuide";

const WonhoGrid = ({ editMode, layout, setLayout }) => {
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

  // useEffect(() => {
  //   const storedData = localStorage.getItem("checkedItems");
  //   if (storedData) {
  //     const storedDataArray = JSON.parse(storedData);
  //     const filteredGridData = GridData.filter((item) =>
  //       storedDataArray.includes(item.chartID)
  //     );
  //     setWonhoGridData(filteredGridData);
  //   } else {
  //     // 로컬 스토리지에 'checkedItems'가 없을 경우
  //     // chartID가 1부터 9까지인 항목만 보여주도록 설정
  //     const defaultGridData = GridData.filter(
  //       (item) => item.chartID >= 1 && item.chartID <= 9
  //     );
  //     setWonhoGridData(defaultGridData);
  //   }
  // }, []);

  // const [layout, setLayout] = useState();
  const [chartInstances, setChartInstances] = useState({});

  useEffect(() => {
    const savedLayout = localStorage.getItem("wonhoGridLayout");
    const storedData = localStorage.getItem("checkedItems");
    let storedDataArray = [];

    if (storedData) {
      storedDataArray = JSON.parse(storedData);
    }

    if (savedLayout) {
      const parsedLayout = JSON.parse(savedLayout);
      setLayout(parsedLayout);
      // 로컬 스토리지에서 불러온 레이아웃을 기반으로 wonhoGridData 업데이트
      const updatedWonhoGridData = GridData.filter((item) =>
        storedDataArray.length > 0
          ? storedDataArray.includes(item.chartID)
          : true
      ).map((item) => {
        const newItemLayout = parsedLayout.find(
          (layoutItem) => layoutItem.i === item.id.toString()
        );
        return newItemLayout ? { ...item, layout: newItemLayout } : item;
      });

      setWonhoGridData(updatedWonhoGridData);
    } else {
      // 로컬 스토리지에 레이아웃 데이터가 없을 경우
      const defaultLayout = GridData.map((item) => ({
        ...item.layout,
        i: item.id.toString(),
      }));
      setLayout(defaultLayout);

      // checkedItems 기반으로 필터링 적용
      const defaultFilteredGridData = GridData.filter((item) =>
        storedDataArray.length > 0
          ? storedDataArray.includes(item.chartID)
          : true
      );
      setWonhoGridData(defaultFilteredGridData); // 이 경우 GridData는 이미 positionMap을 사용하여 구성됨
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

  return (
    <>
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
