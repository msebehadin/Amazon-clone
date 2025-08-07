import React, { createContext, useReducer, type ReactNode, type Dispatch } from "react";
import { initialState, reducer, type ActionType, type StateType } from "../../utility/reducer";

// Define the shape of the context value
interface ContextType {
  state: StateType;
  dispatch: Dispatch<ActionType>;
}

// Create the context with a default value
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext<ContextType | undefined>(undefined);

interface ChildrenProp {
  children: ReactNode;
}

export const DataProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
