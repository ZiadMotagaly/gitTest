var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var deviceSchema = mongoose.Schema({ 

	deviceName 		: String,
	deviceId		: String, 
	registrationId	: String

});

mongoose.connect('mongodb://localhost:27017/node-android-push');

module.exports = mongoose.model('device', deviceSchema);

Schema.statics.login = function login(id, callback) {
   return this.findByIdAndUpdate(id, { $set : { 'last_login_date' : Date.now() }, { new : true }, callback);
};

function myStat{
switch(status) {
    case 1:
        if ((Date.now - Schema.statics.login) > 345600)){
        	status = 2;	// not responsive
				
        }
        break;
    case 2:
         if ((Date.now - Schema.statics.login) > 172800)){
			 status =3; // not active
			  else{
			 	
				 status =1;	
				 // active
			 }				 
		 
        break;
    default:
        status =1;
		// active
	}
	return status;
}
}
