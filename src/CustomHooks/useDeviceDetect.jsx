import { useMediaQuery } from 'react-responsive';

const useDeviceDetect = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return { isMobile, isDesktop, isTabletOrMobile };
};

export default useDeviceDetect;  