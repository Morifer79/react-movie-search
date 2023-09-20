import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="300"
      width="300"
      color="#e50914"
      wrapperStyle={{ position: 'fixed', top: '30%', left: '40%' }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#e50914"
      innerCircleColor="#ffffff"
      middleCircleColor="#e50914"
    />
  );
};
