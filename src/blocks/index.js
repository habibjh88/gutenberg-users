/* global wp */
const {__} = wp.i18n;
const {render} = wp.element;
import ParseCss from "../utils/css/ParseCss";
import {updateCategory} from '@wordpress/blocks';

window.gtusersDevice = 'lg';

//Impost post grid block
import "./custom-users-block";

const allCustomBlocks = ['gtusers/custom-users-block'];
// Save Style CSS within Database/File
window.bindCss = false;
wp.data.subscribe(() => {
    try {
        const {getBlockOrder, getBlock} = wp.data.select('core/block-editor');
        const blockIds = getBlockOrder();
        const blocks = blockIds.map((blockId) => getBlock(blockId))
        const ourBlocks = blocks.filter(item => allCustomBlocks.includes(item.name));
        const _wp$data$select = wp.data.select("core/editor");
        if (!_wp$data$select || 0 == ourBlocks.length) {
            return;
        }
        const isSavingPost = _wp$data$select.isSavingPost;
        const isAutoSavingPost = _wp$data$select.isAutosavingPost;

        if (isSavingPost() && !isAutoSavingPost()) {
            ParseCss();
        }
    } catch (err) {
        console.error(err);
    }
});


//UPDATE BLOCK CATEGORY ICON
updateCategory("gtusers", {
    icon: (
        <img
            src={gtusersParams.plugin_url + "/assets/images/block-cat.svg"}
            alt={__("The Post Grid")}
        />
    ),
});
