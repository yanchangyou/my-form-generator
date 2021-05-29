import React from 'react';
import Generator, { } from 'fr-generator';
import helloWidgets from './helloWidgets';
import { mySettings } from './helloSettings'

const initDefaultValue = window.defaultValue;
const initExtraButtons = window.extraButtons;
const initSubmit = window.formSubmit;
const initOnSchemaChange = window.onSchemaChange;
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