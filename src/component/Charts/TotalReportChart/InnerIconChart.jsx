import NavBarModalHeader from '../../../layout/NavBar/DeviceModal/NavBarModalHeader';
const InnerIconChart = ({size}) => {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4">
      <NavBarModalHeader
        imgName="temp"
        detail="12℃"
        warning={true}
        size={size}
      />
      <NavBarModalHeader
        imgName="humidity"
        detail="51%"
        warning={false}
        size={size}
      />
      <NavBarModalHeader
        imgName="solar"
        detail="629 w/m²"
        warning={false}
        size={size}
      />
      <NavBarModalHeader
        imgName="co2"
        detail="285.3 ppm"
        warning={false}
        size={size}
      />
    </div>
  );
};

export default InnerIconChart;
