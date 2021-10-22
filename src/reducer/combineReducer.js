/**
 * 合并所有reducer,返回一个rootReducer
 * 
 * @author pangchun
 * @since  2021-9-29
 */

import { combineReducers } from 'redux';
import { default as title} from './titleReducer';

/**
 * 合并所有reducer
 * 在合并了所有reducer后，调用方式变为store.getState().title.titleName, 意思是中间多了一层title
 */
const rootReducer = combineReducers({
    title,
    //下面可以继续添加其它reducer
});

export default rootReducer;