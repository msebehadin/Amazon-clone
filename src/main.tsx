import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./Components/dataProvider/dataProvider.tsx";
import "./index.css";
import App from "./App.tsx";
import {initialState,reducer} from './utility/reducer.ts'
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);
