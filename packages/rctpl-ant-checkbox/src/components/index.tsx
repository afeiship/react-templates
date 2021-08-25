import React from 'react';
import { TemplateArgs } from '@jswork/rctpl-types';
import { Checkbox } from 'antd';

export default ({ item }: TemplateArgs) => {
  return (
    <Checkbox key={item.value} value={item.value}>
      {item.label}
    </Checkbox>
  );
};
