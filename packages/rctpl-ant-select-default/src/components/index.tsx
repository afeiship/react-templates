import React from 'react';
import { TemplateArgs } from '@jswork/rctpl-types';
import { Select } from 'antd';

export default (inArgs: TemplateArgs): React.ReactNode => {
  const { item } = inArgs;
  const value = typeof item === 'object' ? item.value : item;
  const label = typeof item === 'object' ? item.label : item;

  return (
    <Select.Option key={value} value={value}>
      {label}
    </Select.Option>
  );
};
