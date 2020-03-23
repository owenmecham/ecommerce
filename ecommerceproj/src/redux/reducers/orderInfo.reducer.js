let orderState = {};

function orderInfo( state = orderState, action ){
    switch( action.type ) {
        case "UPDATE_ORDER":
            return Object.assign( action.payload );

        default: return state;
    }
}

export default orderInfo;