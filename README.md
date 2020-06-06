# 📦 millimetr-default

**A basic millimetr starting template**

## Getting started

1. `git clone https://github.com/millimetr/millimetr-default.git`
2. `npm install`
3. `npm start`

## Routes

This starting template starts with three routes:

- `/`: Illustrates how hardcoded values can be passed to route templates
- `/dynamic`: Illustrates how dynamically generated values cna be passed to route templates
- `/remote`: Illustrates how remote data can be fetched and passed to route templates

These routes are configured in the `millemetr.config.js` as follows:

```js
const createConfig = async () => ({ {
    routes: [
        {
            url: '/',
            template: './src/views/homepage.ejs',
            dogs: ['Husky', 'Poodle', 'Beagle', 'Maltese']
        },
        {
            url: '/dynamic',
            template: './src/views/dynamic.ejs',
            timestamp: new Date().getTime(),
        },
        {
            url: '/remote',
            template: './src/views/remote.ejs',
            data: (await axios.get('https://jsonplaceholder.typicode.com/posts')).data,
        },
    ],
}
```
