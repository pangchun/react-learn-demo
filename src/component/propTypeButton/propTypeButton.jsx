import * as React from 'react';
import PropTypes from 'prop-types'; // 导入类型检查组件
import Button from '@material-ui/core/Button';

class PropTypeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'PropType测试',
        };
    }

    handleClick = () => {
        const { name, count } = this.props; // 使用props传过来的值
        this.setState({
            buttonName: '请查看控制台输出'
        });
        console.log("name = " + name);
        console.log("count = " + count);
      };
    
    render() {
        return(
            <div className="btn">
                <Button onClick={this.handleClick} variant="contained">{this.state.buttonName}</Button> 
            </div>
        )
    }
}

// 定义要进行类型检查的props值以及检查规则
PropTypeButton.propTypes = {
    name: PropTypes.string.isRequired, // 只能为字符串
    count: PropTypes.number.isRequired // 只能为数字
}

export default PropTypeButton;