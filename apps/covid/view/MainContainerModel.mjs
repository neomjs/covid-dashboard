import Component from '../../../node_modules/neo.mjs/src/model/Component.mjs';

/**
 * @class Covid.view.MainContainerModel
 * @extends Neo.model.Component
 */
class MainContainerModel extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.MainContainerModel'
         * @protected
         */
        className: 'Covid.view.MainContainerModel',
        /**
         * @member {Object} data
         */
        data: {
            /**
             * @member {String|null} data.country=null
             */
            country: null,
            /**
             * We are storing the currently selected record of the Covid.view.HeaderContainer SelectField
             * @member {Object} data.countryRecord=null
             */
            countryRecord: null
        }
    }}

    /**
     * @param {String} key
     * @param {*} value
     * @param {*} oldValue
     */
    onDataPropertyChange(key, value, oldValue) {
        super.onDataPropertyChange(key, value, oldValue);

        if (oldValue !== undefined) {
            if (key === 'country') {
                Neo.Main.editRoute({
                    country: value
                });
            }
        }
    }
}

Neo.applyClassConfig(MainContainerModel);

export {MainContainerModel as default};
