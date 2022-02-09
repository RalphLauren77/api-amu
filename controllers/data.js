const Data = require('../model/Data');
const { dataService } = require('../services');

const getAll = async (req, res, next) => {
    try {
        const { query } = req;

        const data = await dataService.findAll(query);

        res.json({
            data
        });
    } catch (e) {
        next(e);
    }
};

const add = async (req, res, next) => {
    try {
        const data = await Data.create({ ...req.body });

        res.json(data);
    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const { dataId } = req.params;

        const data = await Data.findOneAndUpdate(
            {
                _id: dataId,
            },
            {
                ...req.body,
                lastTimeUpdate: Date.now()
            },
            { new: true },
        );

        res.json({
            message: 'Update data successfully',
            data,
        });
    } catch (e) {
        next(e);
    }
};

const remove = async (req, res, next) => {
    try {
        const { dataId } = req.params;

        await Data.findOneAndDelete({
            _id: dataId,
        });

        res.json({
            message: 'Delete successfully',
        });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getAll,
    add,
    update,
    remove,
};
