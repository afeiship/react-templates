import React from 'react';
import { TemplateArgs } from '@jswork/rctpl-types';
import { Select } from 'antd';

export default (inArgs: TemplateArgs): React.ReactNode => {
  const { item } = inArgs;
  const { code, name } = item;

  return (
    <Select.Option key={code} value={code}>
      {name}
    </Select.Option>
  );
};
