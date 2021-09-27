import React from 'react';
import { InputVerify, BcmProps } from 'peak-bcm-base';
import 'peak-bcm-base/lib/bcm-props/index.css'
import 'antd/dist/antd.css'


function App() {
  return (
    <div className="App">
      hello  <InputVerify
        placeholder="请输入四位验证码"
        sendCode={() => { }}
        onChange={() => { }}
      />
      <BcmProps
    ptype="user"
    initialValue="${user.$mp_wx6228eb2adfba3ab4_qr_scene_str}"
    readonly={false}
    onConfirm={() => {}}
  />
    </div>
  );
}

export default App;
