const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type require'],
        enum:['in','out'],
    },
    bloodGroup:{
        type:String,
        required:[true,'blood group is required'],
        enum:['O+','O-','A+','A-','B+','B-','AB+','AB-'],
    },
    email:{
        type:String,
        required  :[true,"Donar Email is Required"], 
    },
    quantity:{
        type: Number,
        required : [true,"blood group is require"],
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'Users is require'],
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.invectoryType === "out"
        }
    },
    donor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.invectoryType === "in"
        }
    }
},{timestamps:true});

module.exports = mongoose.model('Inventory',inventorySchema);