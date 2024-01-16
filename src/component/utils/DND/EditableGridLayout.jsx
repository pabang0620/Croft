import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useState, useEffect, useCallback } from 'react';
import * as AllCharts from './Charts';
import { loadFromLS, saveToLS, useForceUpdate } from './Utils.js';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const ResponsiveGridLayout = WidthProvider(Responsive);

const EditableGridLayout = ({ id, defaultLayout }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    layout: defaultLayout,
    isEditable: true,
  });
  const [forceUpdate, updateKey] = useForceUpdate();

  useEffect(() => {
    console.log('EditableGridLayout useEffect', state);
    setState({
      isEditable: state.isEditable,
      layout: loadFromLS('layouts:' + id) || defaultLayout,
    });
  }, [updateKey]);

  const handleRemoveItem = useCallback((i) => {
    console.log('handleRemoveItem', i);
    console.log('state--handleRemoveItem -before');
    console.log(state);
    setState((prevState) => {
      return { ...prevState, layout: _.reject(prevState.layout, { i: i }) };
    });
    // setState(...state.filter((item) => item.i !== i));
    console.log('state--handleRemoveItem -after');
    console.log(state);
  }, []);

  const handleGotoPage = useCallback((el) => {
    console.log('handleGotoPage', el);

    if (el.link) {
      navigate(el.link);
    }
  }, []);

  const handleLayoutChange = useCallback((layout, layouts) => {
    console.log('state--handleLayoutChange -before');
    console.log(state);
    setState((prevState) => {
      let ll = {
        ...prevState,
        layout: layout.map((l, idx) => {
          let tmp_layout = { ...layouts[idx], ...l };
          return tmp_layout;
        }),
      };

      saveToLS('layouts:' + id, ll.layout);
      console.log('state--handleLayoutChange -after');
      console.log(state);
      return ll;
    });
  }, []);

  const handleLayoutReset = () => {
    saveToLS('layouts:' + id, defaultLayout);
    forceUpdate();
  };

  const handleAddChart = (newChart) => {
    console.log('handleAddChart', newChart);

    // check already exits in state.layout by 'chart'
    if (state.layout.find((el) => el.chart === newChart.chart)) {
      console.log('already exits');
      return;
    }

    // append new chart. and increase 'i' by 1 from max i
    let max_i = Math.max(...state.layout.map((el) => el.i));

    max_i = max_i === -Infinity ? 1 : max_i;

    console.log('max_i', max_i);

    let newLayout = [...state.layout, { ...newChart, i: max_i + 1 }];

    saveToLS('layouts:' + id, newLayout);

    setState((prevState) => {
      return { ...prevState, layout: newLayout };
    });
  };

  const handleSettingToggle = () => {
    console.log('handleSettingToggle');
    setState((prevState) => {
      return { ...prevState, isEditable: !prevState.isEditable };
    });
  };

  return (
    <div className="box-border flex-grow relative">
      {state.isEditable && (
        <div className={'flex  pl-4  items-center'}>
          <button
            className={'btn border bg-primary mr-3'}
            onClick={handleLayoutReset}
          >
            <span className={'material-icons'}>settings</span>
            Reset Layout(임시)
          </button>
          Add Chart(임시) :{' '}
        </div>
      )}
      <ResponsiveGridLayout
        className="layout"
        layouts={state.layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 8, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={130}
        width={1000}
        onLayoutChange={handleLayoutChange}
        isRearrangeable
        isDraggable={state.isEditable}
        isResizable={state.isEditable}
      >
        {_.map(state.layout, (el) =>
          createElement(
            el,
            { handleRemoveItem, handleGotoPage },
            state.isEditable
          )
        )}
      </ResponsiveGridLayout>

      <div className={'absolute w-12 h-12 right-4 top-2 mt-4 cursor-pointer'}>
        <span
          onClick={handleSettingToggle}
          className={'material-icons opacity-30 hover:opacity-100'}
        >
          settings
        </span>
      </div>
    </div>
  );
};

export function createElement(el, events, isEditable) {
  const { handleRemoveItem, handleGotoPage } = events;
  const i = el.i;
  const ChartElem = AllCharts[el.chart];

  return (
    <div key={i} data-grid={el}>
      <PanelWithHeader
        title={el.title}
        className={'h-full'}
        onClose={handleRemoveItem?.bind(undefined, i)}
        onDetail={handleGotoPage?.bind(undefined, el)}
        isEditable={isEditable}
      >
        <div className="w-full h-full bg-slate-400"></div>
        {/* <ChartElem /> */}
      </PanelWithHeader>
    </div>
  );
}

export const PanelWithHeader = (
  props = { title: 'Panel Title', isEditable: false }
) => {
  // return  <div className={"neom flex flex-col relative p-4 group" + " " + props.className}>
  return (
    <div
      className={
        'drop-neo-shadow bg-neo  flex flex-col relative p-4 group' +
        ' ' +
        props.className
      }
    >
      <div className=" top-0 left-0  text-xl flex w-full items-center select-none">
        <div className={'flex-grow font-medium text-base-content'}>
          {props.title}
        </div>
      </div>
      <div className={' relative'} style={{ height: 'calc(100% - 20px)' }}>
        {props.children}
      </div>
      <div className="text-xl flex w-full items-center justify-end">
        <div
          className={
            'flex justify-end invisible group-hover:visible duration-75 ease-in w-fit'
          }
        >
          <button
            className={
              ' material-icons pt-1 hover:shadow hover:bg-base-200 select-none'
            }
            onMouseDown={props.onDetail}
          >
            자세히보기
          </button>
          {props.isEditable && (
            <button
              className={
                ' remove material-icons pt-1 hover:shadow hover:bg-base-200'
              }
              onMouseDown={props.onClose}
            >
              close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditableGridLayout;
