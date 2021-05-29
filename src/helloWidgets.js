import { Space, Row, Button, Input } from 'antd';
// import Wrapper from './FR/Wrapper';
// import RenderField from './FR/RenderField';


const titleWidget = (props) => {
  console.info("props", props);
  return <div style={{ "textAlign": "center", "fontSize": "1.5rem", "marginBottom": "10px", ...props.schema.style }} {...props}>{props.schema.text}</div>;
}

function clickBtn(config) {
  const action = config.action;
  if ("goto" === action) {
    window.location.href = config.url;
  } else if ("open" === action) {
    window.open(config.url);
  } else if ("back" === action) {
    window.history.go(-1);
  } else {
    window.executeButtonAction(config);
  }
}

function buildButtons(buttons) {
  var buf = [];

  buttons.forEach((element, index) => {
    let button = buildButtonWidget(element);
    buf.push(button);
  });
  return buf;
}

const buttonsWidget = (props) => {

  console.info("buttonsWidget", props);
  let buttons = [];

  let items = props.schema.properties;
  for (var key in items) {
    buttons.push(items[key]);
  }
  console.info("buttons", buttons);
  // return <Wrapper $id="{id}">
  //   <div className="as">
  //     <RenderField item={{ schema: props.schema, data: {}}} >
  //       <Wrapper $id="test" inside>
  //         {buildButtons(buttons)}
  //       </Wrapper>
  //     </RenderField>
  //   </div>
  // </Wrapper>

  return <Row justify="center" align="middle" style={{ margin: 30, ...props.schema.style }}>
    <Space >
      {buildButtons(buttons)}
    </Space>
  </Row>
}

const buttonWidget = (props) => {
  console.info("buttonWidget", props)
  let config = props.schema;
  return buildButtonWidget(config);
}

const buildButtonWidget = (config) => {
  console.info("buildButtonWidget", config);
  const key = Math.random();
  const text = config.text;
  return <Button key={'btn-' + key} onClick={() => clickBtn(config)}>{text}</Button>
}

const linkWidget = (props) => {
  const config = props.schema;
  const key = Math.random();
  const text = config.text;
  return <Button key={'btn-' + key} type="link" target="_blank" href={config.url} text={text}>{text}</Button>
}


const myInputWidget = (props) => {
  return <div> <Input props placeholder="自定义输入"></Input></div>
}

let helloWidgets = {
  title: titleWidget,
  buttons: buttonsWidget,
  button: buttonWidget,
  link: linkWidget,
  myInput: myInputWidget
};

export default helloWidgets;