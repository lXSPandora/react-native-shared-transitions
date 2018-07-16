//@flow
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import VaporMaxLanding from '../components/VaporMaxAnimation/VaporMaxLanding';
import VaporMaxDetails from '../components/VaporMaxAnimation/VaporMaxDetails';

export const ROUTENAMES = {
  VAPOR_MAX_LANDING: 'VAPOR_MAX_LANDING',
  VAPOR_MAX_DETAILS: 'VAPOR_MAX_DETAILS',
}

const Navigator = FluidNavigator(
  {
    [ROUTENAMES.VAPOR_MAX_LANDING]: {
      screen: VaporMaxLanding,
    },
    [ROUTENAMES.VAPOR_MAX_DETAILS]: {
      screen: VaporMaxDetails,
    },
  },
  {
    initialRouteName: ROUTENAMES.VAPOR_MAX_LANDING,
  },
);

export default Navigator;