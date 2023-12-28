import SingleContainer from './SingleContainer';
import {
  single1,
  single2,
  single3,
  single4,
  single5,
} from '../utils/Data/ContainerData';

const ContainerWrapper = () => {
  return (
    <div className="flex flex-wrap gap-[30px]">
      <SingleContainer
        disconnect={false}
        critical={single1.critical}
        warning={single1.warning}
      />
      <SingleContainer
        disconnect={false}
        critical={single2.critical}
        warning={single2.warning}
      />
      <SingleContainer
        disconnect={false}
        critical={single3.critical}
        warning={single3.warning}
      />
      <SingleContainer
        disconnect={false}
        critical={single4.critical}
        warning={single4.warning}
      />
      <SingleContainer
        disconnect={true}
        critical={single5.critical}
        warning={single5.warning}
      />
    </div>
  );
};

export default ContainerWrapper;
