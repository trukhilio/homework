module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {
                        presets: ['airbnb']
                    }}
                ]
            },
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['verbose']
    });
};