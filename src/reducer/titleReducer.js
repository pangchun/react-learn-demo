/**
 * title组件的reducer
 * 
 * @author pangchun
 * @since  2021-9-29
 */

import ActionType from "../constant/actionType";

/**
 * 初始化state数据
 */
const initialState = {
    titleName: '我的社区',
}

/**
 * 返回reducer
 * reducer是一个纯虚函数，接收两个参数并返回一个state
 */
function reducer(state = initialState, action) {
    switch(action.type) {
        case ActionType.TITLE.CHANGE_TITLE_NAME:
            return (Object.assign({}, state, {titleName: action.payload.titleName}))
        default:
            return state
    }
};

export default reducer;