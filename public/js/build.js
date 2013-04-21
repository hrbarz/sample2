({
    baseUrl: ".",
    paths: {
        jquery      : 'libs/jquery/jquery-min',
	    underscore  : 'libs/underscore/underscore-min',
	    backbone    : 'libs/backbone/backbone-min',
	    io          : 'libs/socket-io/socket-io-min',
	    
	    templates   : '../templates',
	  
	    // Require.js plugins
	    text        : 'libs/require/text',
	    //order       : 'libs/require/order'

	    //vendors
	    timeago     : 'vendor/jquery.timeago',
	    url2link    : 'vendor/jquery.url2link'
    },
    keepBuildDir: true,
    optimize: "uglify",
	skipDirOptimize: false,
    
    name: "main",
    out: "main-built.js"
})