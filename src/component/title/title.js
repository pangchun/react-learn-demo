/**
 * title组件
 * 
 * @author pangchun
 * @since  2021-9-29
 */

import React from 'react';
// 导入antd
import { Button } from 'antd';
import 'antd/dist/antd.css';
// 导入redux相关
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// 导入store
// import { default as store}  from '../../store/configureStore';
// 导入action creator
import * as titleActionCreator from '../../action/titleAction';

class Title extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            buttonName: '点击改变标题名称',
        };
    }

    handleChange = () => {
        // store.dispatch(titleActionCreator.changeTitleName('动感地带')); 这种方式是redux原生dispatch调用方式，下面的是react-redux提供的调用方式
        this.props.titleAction.changeTitleName('动感地带');
        console.log(this.props); // handleChange方法结束之前，这里的props仍然是未刷新前的props，原因是dispatch就是一个异步调用，在一系列的生命周期结束前不会更新this.props
    }

    render() {
        return (
            <div className="title">
                <h1 className="titleName">欢迎来到{this.props.title.titleName}</h1>
                <Button type="primary" onClick={this.handleChange}>{this.state.buttonName}</Button>
            </div>
        );
    }
}

/**
 * 关联redux的state到react的props
 * 子组件可以通过this.props.title.titleName直接从props取值
 */
const mapStateToProps = (state) => ({
    title: state.title, // 这里为什么可以这样写？请看combineReducers的说明
    // 可以继续添加其它要同步到props的state
});

/**
 * 绑定action creator到props
 * 子组件可以通过this.props.titleAction.changeTitleName('param');的方式直接调用reducer去修改state，而不需要通过store.dispatch
 */
const mapDispatchToProps = (dispatch) => ({
    titleAction: bindActionCreators(titleActionCreator, dispatch),
    // 可以继续添加其它要绑定到props的action
});

/**
 * 连接此组件到redux store
 * 请参考文档中的 connect api 
 */
 export default connect(mapStateToProps, mapDispatchToProps)(Title);