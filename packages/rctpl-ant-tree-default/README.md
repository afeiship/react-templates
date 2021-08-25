# rctpl-ant-tree-default
> Antd tree default template.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/rctpl-ant-tree-default
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import RctplAntTreeDefault from '../@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <RctplAntTreeDefault />
      </Container>
    );
  };

  ```

## license
Code released under [the MIT license](https://github.com/afeiship/rctpl-ant-tree-default/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/rctpl-ant-tree-default
[version-url]: https://npmjs.org/package/@jswork/rctpl-ant-tree-default

[license-image]: https://img.shields.io/npm/l/@jswork/rctpl-ant-tree-default
[license-url]: https://github.com/afeiship/rctpl-ant-tree-default/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/rctpl-ant-tree-default
[size-url]: https://github.com/afeiship/rctpl-ant-tree-default/blob/master/dist/rctpl-ant-tree-default.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/rctpl-ant-tree-default
[download-url]: https://www.npmjs.com/package/@jswork/rctpl-ant-tree-default
