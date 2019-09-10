const connection = require("./connection");
const mongoose = require("mongoose");

const VilleSchema = new mongoose.Schema({
	name: { type: String, required: true },
	hab: { type: Number },
	temp: { type: Number },
	rain: { type: Number }
});

VilleSchema.statics.search = search;

async function search() {
	const data = await this.find();
	return data;
}

const Ville = connection.model("Ville", VilleSchema);

module.exports = Ville;
