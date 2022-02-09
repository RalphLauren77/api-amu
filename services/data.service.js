const Data = require('../model/Data');

module.exports = {
    findAll: (query = {}) => {
        const {
            sortBy = 'lastTimeUpdate',
            order = 'asc',
            ...filters
        } = query;

        const orderBy = order === 'des' ? -1 : 1;
        const sort = { [sortBy]: orderBy };

        const filterObject = {};

        Object.keys(filters)
            .forEach((key) => {
                switch (key) {
                    case 'lastTimeUpdate':
                        filterObject.lastTimeUpdate = filters.lastTimeUpdate;
                        break;
                }
            });

        return Data.find(filterObject)
            .sort(sort);
    },
};
