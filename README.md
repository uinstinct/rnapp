### Using the `expo-cli`

- Do not install npm packages globally - https://dev.to/sroehrl/how-to-install-global-npm-packages-without-sudo-on-ubuntu-3hm4

- Use this to accesss the package _(for example - nodemon)_ as its package-name _(nodemon)_

```
ln -s /${HOME}/.npm-global/bin/nodemon /usr/local/bin
```

- If not using the above the steps, do the following to access the `expo` command

```
${HOME}/.npm-packages/bin/expo init rnapp .
```

### Images

Most of the props are similar to a _web application_.
Refet to [React Native Website(https://reactnative.dev/docs/image) for more information.

### Flexbox

Flexbox in react-native is almost same to css.

By default, the `flexDirection` is _column_.

`alignItems` aligns all the **each of the item** inside the flexbox container.
`alignContent` aligns the **all the items as a whole** inside the flexbox container.

### Positioning

Same as css.

By default, all components are _relatively_ positioned.

## Remaining to learn

- Routing between screens
- Using a UI Library

## Reference

Tutorials :

- _tut1_ https://www.youtube.com/watch?v=0-S5a0eXPoc
