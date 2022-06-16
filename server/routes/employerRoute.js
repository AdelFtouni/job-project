const {addEmployer, getEmployer, updateEmployer,deleteEmployer} = require('../controllers/employerController')
const Router = require('express').Router;

// initialize express router
const employerRouter = Router();

// POST request 
employerRouter.post('/add', addEmployer);

// GET request
employerRouter.get('/', getEmployer);

// PUT request 
employerRouter.put('/:id/update', updateEmployer);

// DELETE request
employerRouter.delete('/:id/delete', deleteEmployer);

module.exports = employerRouter;