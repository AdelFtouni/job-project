const {addEmployee, getEmployee, updateEmployee,deleteEmployee,registerEmployee} = require('../controllers/employeeController')
const Router = require('express').Router;
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');



// initialize express router
const employeeRouter = Router();

// POST request to add a car
employeeRouter.post('/add', addEmployee);

// GET request for a list of all cars 
employeeRouter.get('/', getEmployee);

// PUT request to update a car 
employeeRouter.put('/:id/update', updateEmployee);

// DELETE request to delete a car
employeeRouter.delete('/:id/delete', deleteEmployee);

//registration for employee
employeeRouter.post('/registerEmployee', registerEmployee);

//login for employee



module.exports = employeeRouter;