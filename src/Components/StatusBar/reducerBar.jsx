const initialState = {
    toggleTraficType: false,
    colorNowSelected: "green"
  };

const StatusBarState = (state = initialState, action) => {
    switch (action.type) {
      case 'CANGE_STATE_TYPE':
        return { ...state, toggleTraficType: state.toggleTraficType === false ? true : false };
      default:
        return state;
    }
  };
  
  export default StatusBarState;