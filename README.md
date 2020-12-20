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
