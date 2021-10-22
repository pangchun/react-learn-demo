/**
 * title的action creator
 * 
 * @author pangchun
 * @since  2021-9-29
 */

import ActionType from "../constant/actionType";

export function changeTitleName(titleName) {
    return {
        type: ActionType.TITLE.CHANGE_TITLE_NAME,
        payload: {titleName: titleName }
    };
}

// 下面可以继续定义title相关的action creator