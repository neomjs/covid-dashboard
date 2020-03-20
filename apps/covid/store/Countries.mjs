import Country from '../model/Country.mjs';
import Store   from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class Covid.store.Countries
 * @extends Neo.data.Store
 */
class Countries extends Store {
    static getConfig() {return {
        className: 'Covid.store.Countries',

        keyProperty: 'country',
        model      : Country,

        sorters: [{
            property : 'cases',
            direction: 'DESC'
        }]
    }}
}

Neo.applyClassConfig(Countries);

export {Countries as default};