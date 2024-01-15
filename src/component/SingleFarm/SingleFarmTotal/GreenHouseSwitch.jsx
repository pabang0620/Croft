import GreenHouseTemper from './GreenHouseTemper';
import GreenHouseHumid from './GreenHouseHumid';
import GreenHouseSolar from './GreenHouseSolar';
import GreenHouseCO2 from './GreenHouseCO2';

const GreenHouseSwitch = ({ num }) => {
  switch (num) {
    case 0:
      return <GreenHouseTemper />;
    case 1:
      return <GreenHouseHumid />;
    case 2:
      return <GreenHouseSolar />;
    case 3:
      return <GreenHouseCO2 />;

    default:
      break;
  }
};

export default GreenHouseSwitch;
