const express = require('express');
const router = express.Router();
const Services = require('../model/Service');

//Get back all the service
router.get('/',async (req,res) => {
  //res.send('We are on services');
  try{
    const services = await Services.find();
    res.json(services);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a service
router.post('/',async (req,res) => {
  //console.log(req.body);
  const service = new Services({
    dayno: req.body.dayno,
    name: req.body.name,
    description: req.body.description
  })

  try{
    const savedService = await service.save();
    res.json(savedService);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specifit service
router.get('/:serviceId',async (req,res) => {
  try{
    const service = await Services.findById(req.params.serviceId);
    res.json(service);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete service
router.delete('/:serviceId',async (req,res) => {
  try{
    const removedService = await Services.remove({ _id: req.params.serviceId });
    res.json(removedService);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update service
router.patch('/:serviceId',async (req,res) => {
  try{
    const updatedService = await Services.updateOne(
      { _id: req.params.serviceId },
      { $set: { name: req.body.name }}
    );
    res.json(updatedService);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
