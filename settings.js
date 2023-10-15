const fs = require('fs')

global.creator = 'GengStoreOfficial'// yourname
global.MONGO_DB_URI = "mongodb+srv://segengkpanel:zHVb_4E7mYUAmGG@cluster0.iv0sf1p.mongodb.net/?retryWrites=true&w=majority" //example "mongodb+srv://user:password@name_database.mongodb.net/?retryWrites=true&w=majority"//mongodb 
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10837715" //isi apa aja bebas
global.your_email = "segengelek@gmail.com" //email
global.email_password = "crubdmyptfjriagc" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey
        creator: `${creator
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
