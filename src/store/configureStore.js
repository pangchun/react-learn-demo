/**
 * 设置store
 * 
 * @author pangchun
 * @since  2021-9-29
 */

import { createStore } from "redux";
import rootReducer from "../reducer/combineReducer";

export default createStore(rootReducer);