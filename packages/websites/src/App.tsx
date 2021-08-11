import React from "react";
import ReactAntSelct from "@jswork/react-ant-select";
import ReactAntRadioGroup from "@jswork/react-ant-radio-group";
import RctplAntSelectDefault from "@jswork/rctpl-ant-select-default";
import RctplAntSelectCname from "@jswork/rctpl-ant-select-cname";
import RctplAntRadioButton from "@jswork/rctpl-ant-radio-button";
import RctplAntRadio from "@jswork/rctpl-ant-radio";
import { Tree } from 'antd';

import nxTreeWalk from '@jswork/next-tree-walk';
import rctplAntTreeDefault from '@jswork/rctpl-ant-tree-default';

const TreeNode = Tree.TreeNode;

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
  const items4 = [
    {
      "value": "13000000",
      "label": "13 Development (Service)",
      "hasChildren": true,
      "children": [
        {
          "value": "13010000",
          "label": "1301 Concept development",
          "hasChildren": true,
          "children": [
            {
              "value": "13010100",
              "label": "130101 Feasibility analysis",
              "hasChildren": true,
              "children": [
                {
                  "value": "13010190",
                  "label": "13010190 Feasibility analysis (unspecified)",
                  "isLeaf": true
                }
              ]
            },
            {
              "value": "13010200",
              "label": "130102 Product definition (concept definition)",
              "hasChildren": true,
              "children": [
                {
                  "value": "13010290",
                  "label": "13010290 Product definition (concept definition, unspecified)",
                  "isLeaf": true
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="App">
      <ReactAntSelct template={RctplAntSelectCname} items={items1} />
      <ReactAntSelct template={RctplAntSelectDefault} items={items2} />
      <ReactAntSelct template={RctplAntSelectDefault} items={items3} />

      {/* RadioGroup */}
      <ReactAntRadioGroup template={RctplAntRadioButton} items={items2} />
      <ReactAntRadioGroup template={RctplAntRadio} items={items2} />

      <div className="container">
        <Tree.DirectoryTree defaultExpandAll>
          {
            nxTreeWalk(items4, { template: rctplAntTreeDefault })
          }
        </Tree.DirectoryTree>
      </div>
    </div>
  );
}

export default App;
