const {addEmployee, getEmployee, updateEmployee,deleteEmployee} = require('../controllers/employeeController')
const Router = require('express').Router;

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

module.exports = employeeRouter;