import { createSlice } from "@reduxjs/toolkit";

export const variablesSlice = createSlice({
  name: "variables",
  initialState: {
    documento: "",
    celular: "",
    planName: "",
    planCost: 0,
  },
  reducers: {
    setPlanName: (state, action) => {
      state.planName = action.payload;
    },
    setPlanCost: (state, action) => {
      state.planCost = action.payload;
    },
    setDocumento: (state, action) => {
      state.documento = action.payload;
    },
    setCelular: (state, action) => {
      state.celular = action.payload;
    },
  },
});

export const { setPlanName, setPlanCost, setDocumento, setCelular } =
  variablesSlice.actions;
/* export default variablesSlice.reducer; */
