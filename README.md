<img src="https://suprim-react-ui.netlify.app/img/sru.svg" height="150"/>

# suprim-ui

> Modern and minimalist React UI library, originating from Suprim's design.

[![Build Status](https://travis-ci.com/suprim12/suprim-react-ui.svg?token=nY7pXrDphx6WpYSmhszC&branch=master)](https://travis-ci.com/suprim12/suprim-react-ui) [![NPM](https://img.shields.io/npm/v/suprim-react-ui.svg?color=ggg)](https://www.npmjs.com/package/suprim-react-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/suprim-react-ui?color=ggg) ![npm bundle size](https://img.shields.io/bundlephobia/min/suprim-react-ui?color=ggg) ![NPM](https://img.shields.io/npm/l/suprim-react-ui?color=ggg)

## Install

```bash
npm i suprim-ui  or yarn add suprim-ui
```

## Usage

```jsx
import React, { Component } from "react";

import { MyComponent ,SuprimThemeProvider, theme } from "suprim-ui";

class Example extends Component {
  render() {
    return (
    <SuprimThemeProvider theme={theme.dark}>
      <MyComponent />
    </SuprimThemeProvider>
  }
}
```

## Documentation

- [Document Site](https://suprim.org.np)

## License

[MIT](https://github.com/suprim12/suprim-react-ui-public/blob/master/LICENSE)
