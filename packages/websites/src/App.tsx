import React from "react";
import ReactAntSelct from "@jswork/react-ant-select";
import ReactAntRadioGroup from "@jswork/react-ant-radio-group";
import RctplAntSelectDefault from "@jswork/rctpl-ant-select-default";
import RctplAntSelectCname from "@jswork/rctpl-ant-select-cname";
import RctplAntRadioButton from "@jswork/rctpl-ant-radio-button";
import RctplAntRadio from "@jswork/rctpl-ant-radio";

function App() {
  const items1 = [
    { code: "aaa", name: "AAA" },
    { code: "bbb", name: "BBB" },
    { code: "ccc", name: "CCC" },
  ];

  const items2 = [
    { value: "aaa", label: "AAA" },
    { value: "bbb", label: "BBB" },
    { value: "ccc", label: "CCC" },
  ];

  const items3 = ["option1", "option2", "option3"];

  return (
    <div className="App">
      <ReactAntSelct template={RctplAntSelectCname} items={items1} />
      <ReactAntSelct template={RctplAntSelectDefault} items={items2} />
      <ReactAntSelct template={RctplAntSelectDefault} items={items3} />

      {/* RadioGroup */}
      <ReactAntRadioGroup template={RctplAntRadioButton} items={items2} />
      <ReactAntRadioGroup template={RctplAntRadio} items={items2} />
    </div>
  );
}

export default App;
