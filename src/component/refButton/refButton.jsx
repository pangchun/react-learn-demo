import * as React from 'react';
import Button from '@material-ui/core/Button';

import RefDialog from '../refDialog/refDialog';


export const RefButton = (props) => {

    // 创建RefDialog的引用
    const RefDialogRef = React.createRef();
    const handleClick = () => {
        // 父组件调用子组件的方法
        RefDialogRef.current.openRefDialog();
    };

    return(
        <React.Fragment>
            <div className="btn">
                <Button onClick={handleClick} variant="contained">{"函数组件引用"}</Button>
                <RefDialog onRef={RefDialogRef}></RefDialog>    
            </div>
        </React.Fragment>
    );
}