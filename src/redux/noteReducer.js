
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream () {
  return {
    type: BUY_ICECREAM
  }
}



const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return state.concat([action.data]);
   
            case 'EDIT_NOTE':
                return state.map((note) => note.id === action.id ? {...note, editing: !note.editing} : note);
         
                case 'DELETE_NOTE':
                return state.filter((note) => note.id !== action.id);
            case 'UPDATE_NOTE':
                return state.map((note) => {
                    if (note.id === action.id) {
                        return {
                            ...note,
                            title: action.data.newTitle,
                            message: action.data.newMessage,
                            editing: !note.editing
                        }
                    } else {
                        return note;
                    }
                });
        default:
            return state;
    }
};
export default noteReducer;