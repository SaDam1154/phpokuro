const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {},
    {
        timestamps: true,
    }
);

CustomerSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
CustomerSchema.plugin(AutoIncrement, { id: "customers", inc_field: "id" });

module.exports = mongoose.model("customers", CustomerSchema);
