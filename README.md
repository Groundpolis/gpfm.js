# gpfm.js
An GPFM(Extended MFM for Groundpolis) parser implementation with PEG.js. Forked from [mfm.js](https://github.com/misskey-dev/mfm.js).
<!-- [Try it out!](https://runkit.com/npm/mfm-js) -->

<!-- [![Test](https://github.com/misskey-dev/mfm.js/actions/workflows/test.yml/badge.svg)](https://github.com/misskey-dev/mfm.js/actions/workflows/test.yml) -->
<!-- [![codecov](https://codecov.io/gh/misskey-dev/mfm.js/branch/develop/graph/badge.svg?token=irAWFiHK8T)](https://codecov.io/gh/misskey-dev/mfm.js) -->

<!-- [![NPM](https://nodei.co/npm/mfm-js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/mfm-js) -->

## Installation
```
npm i Groundpolis/gpfm.js
```

## Usage
Please see [docs](./docs/index.md) for the detail.

TypeScript:
```ts
import * as mfm from 'mfm-js';

const inputText =
`<center>
Hello $[tada everynyan! 🎉]

I'm @ai, A bot of misskey!

https://github.com/syuilo/ai
</center>`;

// Generate a MFM tree from the MFM text.
const mfmTree = mfm.parse(inputText);

// Generate a MFM tree from the MFM plain text.
const plainMfmTree = mfm.parsePlain('I like the hot soup :soup:​');

// Reverse to a MFM text from the MFM tree.
const text = mfm.toString(mfmTree);

```

## Develop
### 1. Clone
```
git clone https://github.com/Groundpolis/gpfm.js.git
```

### 2. Install packages
```
cd gpfm.js
npm i
```

### 3. Build
```
npm run build
```

### Use the interactive CLI parser
full parser:
```
npm run parse
```

plain parser:
```
npm run parse-plain
```

## License
This software is released under the [MIT License](LICENSE).
