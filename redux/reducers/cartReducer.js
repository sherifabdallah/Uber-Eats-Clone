let defaultState = {
    selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        // Case for adding an item to the cart
        case "ADD_TO_CART": {
            let newState = { ...state }; // Shallow copy of the current state
        
            if (action.payload.checkboxValue) {
                console.log("ADD TO CART");
        
                // Update the selectedItems object with the new item and restaurant name
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload.item], // Wrap action.payload.item in an array
                    restaurantName: action.payload.restaurantName,
                };
            } else {
                console.log("REMOVE FROM CART");
                // Filter out the item with the title matching the action payload's title
                newState.selectedItems = {
                    items: newState.selectedItems.items.filter(
                        (item) => item.title !== action.payload.item.title // Adjust the filter condition
                    ),
                    restaurantName: action.payload.restaurantName,
                };
            }

            // console.log(JSON.stringify(newState), "👉");
            return newState;
        }
        // Default case returns the current state if the action type doesn't match
        default:
            return state;
    }
};

export default cartReducer;
