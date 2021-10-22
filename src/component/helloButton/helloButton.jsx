import * as React from 'react';
import Button from '@material-ui/core/Button';

import HelloDialog from '../helloDialog/helloDialog';


class HelloButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: '点击弹出对话框',
            open: false,
        };
    }

    handleClick = () => {
        this.setState({
            open: true
        })
      };
    
    handleClose = (value) => {
        this.setState({
            open: false
        })
      };


    render() {
        return(
            <div className="btn">
                <Button onClick={this.handleClick} variant="contained">{this.state.buttonName}</Button>
                <HelloDialog onClose={this.handleClose} open={this.state.open}></HelloDialog>    
            </div>
        )
    }
}

export default HelloButton;