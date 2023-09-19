import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="300"
      width="300"
      color="#4fa94d"
      wrapperStyle={{ position: 'fixed', top: '30%', left: '40%' }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#FF0000"
      innerCircleColor="#FFFF00"
      middleCircleColor="#008000"
    />
  );
};
