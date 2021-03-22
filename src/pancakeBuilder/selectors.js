import { MODULE_NAME } from './constants';

export const getSavouryIngridients = state => state[MODULE_NAME].savouryIngridients;
export const getSweetIngridients = state => state[MODULE_NAME].sweetIngridients;
export const getDefaultPancakeType = state => state[MODULE_NAME].defaultPancakeType;
export const getPankaceTypes = state => state[MODULE_NAME].pankaceTypes;
export const getTower = state => state[MODULE_NAME].towerPancake;
