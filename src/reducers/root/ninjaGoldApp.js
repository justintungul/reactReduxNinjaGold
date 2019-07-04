const initialState = {
    totalGold: 0,
    history: []
}

const ninjaGoldApp = (state=initialState, action) => {
    let amount;
    let luck = 1;
    let historyItem;

    switch (action.type) {
        case 'ADD_GOLD':
            switch (action.location) {
                case 'farm':
                    amount = Math.floor(Math.random() * (20 + 1 - 10) + 10);
                    break;
                case 'cave':
                    amount = Math.floor(Math.random() * (10 + 1 - 5) + 5);
                    break;
                case 'house':
                    amount = Math.floor(Math.random() * (5 + 1 - 2) + 2);
                    break;
                case 'casino':
                    luck = Math.floor(Math.random() * 2);
                    amount = Math.floor(Math.random() * (50));
                    break;
                default:
                    return state;
            }
            break;
        default:
            return state;
    }

    if (luck) {
        historyItem = {
            color: 'green',
            message: `Earned ${amount} gold from the ${action.location}`
        }
    } else {
        historyItem = {
            color: 'red',
            message: `Lost ${amount} gold from the ${action.location}`
        }
        amount *= -1;
    }

    return {
        totalGold: state.totalGold + amount,
        history: [historyItem, ...state.history]
    }
}

export default ninjaGoldApp;