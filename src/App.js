import React from 'react';
import Generator,{} from 'fr-generator';
import helloWidgets from './helloWidgets';
import { mySettings } from './helloSettings'

const initDefaultValue = eval("defaultValue");
const initExtraButtons = eval("extraButtons");
const initSubmit = eval("formSubmit");
const initOnSchemaChange = eval("onSchemaChange");
const ref = React.createRef();

const Demo = () => {
  return (
    <Generator
      ref={ref}
      defaultValue={initDefaultValue}
      extraButtons={initExtraButtons}
      submit={initSubmit}
      onSchemaChange={initOnSchemaChange}
      widgets={{ ...helloWidgets }}
      settings={mySettings}
    />
  );
}

export default Demo;