import React, { createContext, useReducer } from 'react';

const initialState ={
    selectedItem: [],
    counterItem: 0,
    total: 0,
    checkout: false
}

const cartReducer = (state , action) => {
  switch(action.type){
    case "ADD_ITEM":
        if(!state.selectedItem.find(item => item.id === action.payload.id)){
            state.selectedItem.push({
                ...action.payload,
                quantity: 1
            })
        }
        return {
            ...state,
            selectedItem : [...state.selectedItem]
        }

      case "REMOVE_ITEM":
        const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            selectedItem: [...newSelectedItem]
            
        }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id)
            state.selectedItem[indexI].quantity++;
            return {
                ...state
            }
        case "DECREASE" :
           const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id)
           state.selectedItem[indexD].quantity--;
           return {
               ...state
           } 
        case "CHECKOUT":
             return {
                selectedItem: [],
                counterItem: 0,
                total: 0,
                checkout: true
             }
         case "CLEAR":
                 return {
                    selectedItem: [],
                    counterItem: 0,
                    total: 0,
                    checkout: false
                 }
            
    }
}

export const cartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(cartReducer , initialState);
    
    return <cartContext.Provider value={{state , dispatch}}>
                {children}
    </cartContext.Provider>
        

    
};

export default CartContextProvider;
