const path = require('path');

module.exports = {
    entry: {
        'generator': './src/generator.js',
        'company-list': './src/company-list.js',
        'home': './src/home.js',
        'pdfworker': './src/PdfWorker.js'
    },
    output: {
        filename: '[name].gen.js',
        path: path.resolve(__dirname, 'static/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        modules: [ 'src', 'node_modules', 'i18n' ],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class'
        }
    }
};