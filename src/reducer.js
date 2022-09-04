export const initialState = {
    basket:[
   
         //     { 
            
    // id:"1000",
    // title:" Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD)",
    // price: 215890,
    // rating:5,
    // image: "https://ik.imagekit.io/amazonshop/hero_intro_endframe__e6khcva4hkeq_medium_jFwS6FUFJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660205454596",
    

    // },
    // { 
            
    //     id:"1000",
    //     title:" Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD)",
    //     price: 215890,
    //     rating:5,
    //     image: "https://ik.imagekit.io/amazonshop/hero_intro_endframe__e6khcva4hkeq_medium_jFwS6FUFJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660205454596",
        
    
    //     },

],

    user:null,
};

//subtotal 
export const getBasketTotal = (basket) => 

   basket?.reduce((amount, item) => item.price + amount, 0);


//add & remove cart
const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
       

        case'ADD_TO_BASKET':
   
        return {
            ...state,
            basket: [...state.basket, action.item]
        //adding  items into basket
        };

        case 'REMOVE_FROM_BASKET':
 
let newBasket = [...state.basket];
const index = state.basket.findIndex(
    (basketItem) => basketItem.id === action.id
                                     );
 
// item exist in cart remove it
if (index >=0) {
newBasket.splice(index, 1);      //after click remove new cart 
} else{
    console.warn (`can't remove (id: ${action.id} as its now in product`);
    }
            return {...state, 
                    basket: newBasket,
                };
            //removing items from basket
            
            default:
                return state;
    }
}
  export default reducer;


  