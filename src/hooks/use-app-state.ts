import { useAppStateStore } from '@/store';

const useAppState = () => {
  const {
    isFlightDrawerOpen,
    isSearchDrawerOpen,
    flightDrawerContent,
    toggleSearchDrawer,
    toggleFlightDrawer,
    setFlightDrawerContent
  } = useAppStateStore();
  return {
    isFlightDrawerOpen,
    isSearchDrawerOpen,
    flightDrawerContent,
    toggleSearchDrawer,
    toggleFlightDrawer,
    setFlightDrawerContent
  };
};

export { useAppState };
