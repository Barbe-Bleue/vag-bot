module.exports = message => {
	let charset = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";
	let source= "";

	for(let i = 0; i < 5; i++ ){
		source += charset[Math.floor(Math.random() * charset.length)];
	}
	 message.channel.send("http://i.imgur.com/"+source+".jpg")
}
