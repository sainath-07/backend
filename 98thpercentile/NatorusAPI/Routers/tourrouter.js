
const express=require('express')
const toursroute= express.Router()
const tourhandlers=require('./../consumers/tourhandlers')

// This middle ware will run only for the toursroute


// whenever the route like /id param is matched then this middle ware function will exectued.
toursroute.param( 'id' ,tourhandlers.checkParmasId)
// console.log(tourhandlers.checkParmasId,"asdfsd")

const {getalltours,postdata,responsetorul,delted,checkbody}=tourhandlers

toursroute.route('/').get(getalltours).post(checkbody,postdata)

toursroute.route('/:id').get(responsetorul).delete(delted)

module.exports=toursroute