import mongose from 'mongoose';

// creating a schema for cards
const cardSchema = mongose.Schema({
    // creating data fields for individual card
    name: String,
    imageUrl: String
})

// creating model using its schema
export default mongose.model("Cards", cardSchema);