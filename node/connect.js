module.export = function(urlconect,poolSize){
	try {

        db.connect(urlconect,{ server: { poolSize: poolSize }});
    
    } catch (e) {

    }
}