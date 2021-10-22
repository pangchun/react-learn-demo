import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';

function RefDialog(props) {

  // 是否展示对话框
  const [open, setOpen] = React.useState(false);

  /**
   * 自定义函数组件暴露给父组件的实例值 参考：https://react.docschina.org/docs/hooks-reference.html#useimperativehandle
   * 这里暴露给父组件一个函数
   */
  React.useImperativeHandle(props.onRef, () => {
    return {
      openRefDialog: handleOpen,
    };
  });

  //关闭对话框
  function handleClose() {
    setOpen(false);
  };

  //打开对话框
  function handleOpen() {
    setOpen(true);
  };

  // 定义输入框的引用
  const username = React.useRef(null);
  const password = React.useRef(null);

  /**
   * 处理提交
   */
  function handleSubmit() {
    console.log("username = " + username.current.value);
    console.log("password = " + password.current.value);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>函数组件的ref引用</DialogTitle>
      <DialogContent dividers={true} >
        <div>
          {/* 原生输入框使用ref */}
          <input ref={username} placeholder="username"/><br/>
          {/* MUI的文本框使用inputRef 参考：https://mui.com/zh/api/text-field/ */}
          <TextField inputRef={password} type="text" label="Standard" variant="standard" />
        </div>
        <Button onClick={handleSubmit} variant="contained">{"提交"}</Button>
      </DialogContent>
    </Dialog>
  );
}

export default RefDialog;
