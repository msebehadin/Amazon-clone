import { type } from "./action.type";
import type { ProductType } from "../types/product";

// Define the shape of the state
export interface StateType {
  basket: ProductType[];
  item: ProductType[];
}

// Define the shape of the action
export interface ActionType {
  type: string;
  item?: ProductType;
}

// Initial state
export const initialState: StateType = {
  basket: [],
  item: [],
};

// Reducer function
export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      if (!action.item) {
        return state;
      }
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
