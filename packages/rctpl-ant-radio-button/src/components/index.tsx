import React from 'react';
import { TemplateArgs } from '@jswork/rctpl-types';
import { Radio } from 'antd';

export default (inArgs: TemplateArgs): React.ReactNode => {
  const { item } = inArgs;
  const { value, label, ...props } = item;
  return (
    <Radio.Button key={value} value={value} {...props}>
      {label}
    </Radio.Button>
  );
};
