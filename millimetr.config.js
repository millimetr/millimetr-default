/*
 * Third-party modules
 */

const axios = require('axios');

/*
 * Primary export 
 */

const createConfig = async () => ({
    /**
     * Files that should be copied directly to build.
     *
     * For example `./src/static/favicon.ico` will be copied as is to
     * `build/favicon.icon`.
     */
    static: './src/static',

    /**
     * This is the folder where the user-facing code will be compiled to.
     */
    output: './build',

    /**
     * A glob value specifying what file changes should trigger a rebuild when
     * running `millimeter develop`.
     */
    input: './src',
    
    /*
     * An array of routes that contain the the file URL (as a relative path) and
     * the template that should be used to build that route, as well as any
     * additional data that should be passed to the template.
     */
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
})

module.exports = createConfig;
