import HistoricalDataModel from '../model/HistoricalData.mjs';
import Store               from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class Covid.store.HistoricalData
 * @extends Neo.data.Store
 */
class HistoricalData extends Store {
    static getConfig() {return {
        className: 'Covid.store.HistoricalData',

        keyProperty: 'date',
        model      : HistoricalDataModel,

        sorters: [{
            property : 'date',
            direction: 'DESC'
        }]
    }}
}

Neo.applyClassConfig(HistoricalData);

export {HistoricalData as default};