'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Opportunity Schema
 */
var OpportunitySchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Opportunity Title',
		trim: true
	},
	status: {
		type: String,
		default: 'Draft'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Opportunity', OpportunitySchema);