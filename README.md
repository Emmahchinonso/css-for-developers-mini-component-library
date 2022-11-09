# Component Library Workshop

In this workshop, we'll build 3 components from scratch:

1. ProgressBar
2. Select
3. IconInput

Most of the pertinent information will be stored in the Figma document (https://www.figma.com/file/u0wCdLXheiN9f2FmAuPsE9/Mini-Component-Library), but this README will contain some additional information to help you on your mission!

Two fully-formed components have already been included, to be used as-needed in your work:

- `Icon`, an icon component that uses `react-feather` to render various icons
- `VisuallyHidden`, a component that allows us to make text available to screen-reader users, but not to sighted users.

Additionally, all of the colors you'll need are indexed in `constants.js`.

All components in this project use [the `Roboto` font](https://fonts.google.com/specimen/Roboto). This font is already included in the Storybook environment, and is already applied to all elements. It comes in two weights:

- 400 (default)
- 700 (bold)

## Running Storybook

This project uses Storybook, a component development tool.

First, install dependencies with `npm install`.

Once dependencies are installed, you can start storybook by running:

```
npm run start
```

Once running, you can visit storybook at http://localhost:6006.

## Troubleshooting

You may get an error when running the `start` script that looks like this:

```
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:130:10)
```

You can fix this issue either by downgrading to Node 16, or by updating the `package.json` file as follows:

```diff
  "scripts": {
-   "start": "start-storybook -p 6006 -s public",
+   "start": "NODE_OPTIONS=--openssl-legacy-provider start-storybook -p 6006 -s public",
  },
```
