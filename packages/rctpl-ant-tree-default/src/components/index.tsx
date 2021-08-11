import React from 'react';
import { Tree } from 'antd';
import { TreeTemplateArgs, TreeWalkCallback } from '@jswork/rctpl-types';

export default (inArgs: TreeTemplateArgs, inCallback: TreeWalkCallback): React.ReactNode => {
  const { item, independent } = inArgs;
  const props = {
    title: item.label,
    key: item.value,
    isLeaf: independent,
    children: independent ? null : inCallback()
  };
  return <Tree.TreeNode {...props} />;
};
