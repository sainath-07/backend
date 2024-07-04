const express=require('express')
const usersroute= express.Router()
const usershandlers=require('./../consumers/userhandlers')
const {getallusers,postallusers,getqueryusers,deltedqueryusers}=usershandlers

usersroute.route('/').get(getallusers).post(postallusers)
usersroute.route('/:id').get(getqueryusers).delete(deltedqueryusers)

module.exports=usersroute