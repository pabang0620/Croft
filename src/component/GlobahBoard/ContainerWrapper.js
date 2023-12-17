import SingleContainer from './SingleContainer';
const ContainerWrapper = () => {
  return (
    <div className="flex flex-row gap-[20px]">
      <SingleContainer />
      <SingleContainer />
      <SingleContainer />
      <SingleContainer />
      <SingleContainer />
    </div>
  );
};

export default ContainerWrapper;
