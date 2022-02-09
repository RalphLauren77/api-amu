const router = require('express').Router();

const { data } = require('../../controllers');
const dataValidator = require('./validation');

router
    .get('/', data.getAll)
    .post('/', dataValidator.validateCreateData, data.add);

router
    .delete('/:dataId', data.remove)
    .put('/:dataId', dataValidator.validateUpdateData, data.update);

module.exports = router;
