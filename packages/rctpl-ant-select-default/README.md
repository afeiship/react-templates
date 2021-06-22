# rctpl-ant-select-default
> React teamplate for ant select value/label.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/rctpl-ant-select-default
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
  import RctplAntSelectDefault from '../@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <RctplAntSelectDefault />
      </Container>
    );
  };

  ```

## license
Code released under [the MIT license](https://github.com/afeiship/rctpl-ant-select-default/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/rctpl-ant-select-default
[version-url]: https://npmjs.org/package/@jswork/rctpl-ant-select-default

[license-image]: https://img.shields.io/npm/l/@jswork/rctpl-ant-select-default
[license-url]: https://github.com/afeiship/rctpl-ant-select-default/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/rctpl-ant-select-default
[size-url]: https://github.com/afeiship/rctpl-ant-select-default/blob/master/dist/rctpl-ant-select-default.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/rctpl-ant-select-default
[download-url]: https://www.npmjs.com/package/@jswork/rctpl-ant-select-default
