var gcm = require('node-gcm');
var constants = require('../constants/constants.json');

exports.sendMessage = function(message,registrationId,callback){

	var message = new gcm.Message({data: {message: message}});
	var regTokens = [registrationId];
	var sender = new gcm.Sender(constants.gcm_api_key);
	
	while (1){
	if ( status == 1){
			
			setTimeout(
	sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	, 86400000)
	



		if (err){

			console.error(err);
			callback(constants.error.msg_send_failure);

		} else 	{

			console.log(response);
			callback(constants.success.msg_send_success);
		}

	}}));
	
	
	if ( status == 2){
		
			
			setTimeout(
	sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	, 259200000)
	


		if (err){

			console.error(err);
			callback(constants.error.msg_send_failure);

		} else 	{

			console.log(response);
			callback(constants.success.msg_send_success);
		}

	}}));
	
	if ( status == 2){
		while (1){
			
			setTimeout(
	sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	, 259200000)
	


		if (err){

			console.error(err);
			callback(constants.error.msg_send_failure);

		} else 	{

			console.log(response);
			callback(constants.success.msg_send_success);
		}

	}}));
	
	if ( status == 3){
		
			
			setTimeout(
	sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	, 2592000000)
	


		if (err){

			console.error(err);
			callback(constants.error.msg_send_failure);

		} else 	{

			console.log(response);
			callback(constants.success.msg_send_success);
		}

	}}));
	
}
	

}
