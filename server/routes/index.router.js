const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');

router.post('/createEmployee',ctrlUser.createEmployee);
router.get('/getEmployees/:limit/:skip',ctrlUser.getEmployees);
router.put('/updateEmployee',ctrlUser.updateEmployee);
router.post('/deleteEmployee',ctrlUser.deleteEmployee);
router.post('/employeeDetails',ctrlUser.employeeDetails);
router.post('/employeefilter',ctrlUser.employeefilter);

module.exports = router;



