# Byron Dev website

## V2 rewrite using vite + react

The following stack/dependencies are used:
- nodejs
- typescript
- vite (react)
- yarn
- eslint

### Guides

#### Converting svg to React component
1. Place your svg in the path `/src/assets/icons/svg`. Eg: `/src/assets/icons/svg/icon.svg`
2. Run yarn command `yarn svgr [filename]`. Eg: `yarn svgr icon.svg`
3. The generated component is in `/src/assets/icons/svg`