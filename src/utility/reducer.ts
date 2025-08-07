import { type } from "./action.type";

// Define the shape of the state
export interface StateType {
    basket: unknown[]; // Replace `unknown` with a more specific type if possible
    item: unknown[];
}

// Define the shape of the action
export interface ActionType {
  type: string;
  item?: unknown; // Replace `unknown` with a specific item type
}

// Initial state
export const initialState: StateType = {
    basket: [],
    item:[]
};

// Reducer function
export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
