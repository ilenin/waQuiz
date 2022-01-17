import React, { useEffect, useState } from 'react';

import { useNetInfo } from '@react-native-community/netinfo';
import HomeRoutes from './appRoutes/home.routes';

import UnConnected from '../pages/UnConnected';

const Routes: React.FC = () => {
  const netInfo = useNetInfo();

  const [connection, setConnection] = useState(true);

  useEffect(() => {
    setConnection(netInfo.isConnected || true);
  }, [netInfo]);

  if (!connection) {
    return <UnConnected />;
  }

  return <HomeRoutes />;
};

export default Routes;
