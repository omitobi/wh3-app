export const CounterReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return action.counter;
        default:
            return state;
    }
};
