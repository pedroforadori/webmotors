import React from 'react';

export const defaultAppState = {
    vehicleList: [],
}

export const AppContext = React.createContext(defaultAppState)