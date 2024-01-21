import BasicSubBar from './BasicSubBar';
// import ReportSubBar from './ReportSubBar';
// import DashSubBar from './DashSubBar';
// import SalesSubBar from './SalesSubBar';
// import ResourceSubBar from './ResourceSubBar';

export const SubNavBarTitle = (
  currentPath,
  setContainer,
  container,
  setTitle
) => {
  switch (currentPath) {
    case 'basic':
      return <BasicSubBar title={''} />;
    // case '/dash':
    //   return <DashSubBar />;
    case '/dash/environment/total':
      return <BasicSubBar title={'온실환경 종합'} />;
    case '/dash/environment/RTR':
      return <BasicSubBar title={'RTR'} />;
    case '/dash/environment/DLI':
      return <BasicSubBar title={'DLI'} />;
    case '/dash/environment/VPD':
      return <BasicSubBar title={'VPD'} />;
    case '/dash/environment/PP':
      return <BasicSubBar title={'PHOTOPERIOD'} />;
    // case '/single-report':
    //   return <ReportSubBar type="single" />;
    default:
      break;
  }
};
