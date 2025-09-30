import { useLocation } from "react-router";
import { NAVIGATION_ITEMS } from "../lib/constants";

export function useNavigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return ['/o-que-fazemos', '/diferenciais', '/como-funciona'].includes(location.pathname);
  };

  const getNavigationItems = () => {
    return NAVIGATION_ITEMS;
  };

  return {
    isActive,
    isServicesActive,
    getNavigationItems,
    currentPath: location.pathname,
  };
}
