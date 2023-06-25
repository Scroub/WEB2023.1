import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 500 }

export const IdSlice = createSlice ({
    name: "id", 
    initialState,
    reducers: {
        incrementar:(state) => { state.value += 1 },
        decrementar:(state) => { state.value -= 1 },
        aumentarValor:(state,action) => { state.value += action.payload },
        diminuirValor:(state,action) => { state.value -= action.payload }
    }
})

export const { incrementar, decrementar, aumentarValor, diminuirValor } = IdSlice.actions
export default IdSlice.reducer