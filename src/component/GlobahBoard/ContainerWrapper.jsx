import SingleContainer from './SingleContainer';

const ContainerWrapper = () => {
  const single1 = { critical: [1,2], warning: [] };
  const single2 = { critical: [], warning: [1] };
  const single3 = { critical: [], warning: [] };
  const single4 = { critical: [], warning: [] };

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
        disconnect={true}
        critical={single4.critical}
        warning={single4.warning}
      />
    </div>
  );
};

export default ContainerWrapper;
