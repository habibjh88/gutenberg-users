import {SelectControl, PanelBody} from "@wordpress/components";
import Color from "../../../../../the-post-grid/src/components/Color";
import Typography from "../../../../../the-post-grid/src/components/Typography";
import Dimension from "../../../../../the-post-grid/src/components/Dimension";

const {__} = wp.i18n;
import {HEADING} from "../../../../../the-post-grid/src/components/Constants";

function CategoryStyle(props) {
    const {attributes, setAttributes} = props.data;
    //All attribute
    const {
        cat_color,
        cat_tag,
        category_typography,
        cat_spacing,
        category_color_hover,

    } = attributes;

    return (
        <PanelBody title={__('Category Style', 'gutenberg-users')} initialOpen={true}>


            <SelectControl
                label={__('Title Tags', 'gutenberg-users')}
                className="gtusers-control-field label-inline"
                options={HEADING}
                value={cat_tag}
                onChange={(cat_tag) => setAttributes({cat_tag})}
            />

            <Typography
                label={__('Typography')}
                value={category_typography}
                onChange={(val) => setAttributes({category_typography: val})}
            />

            <Dimension
                label={__("Category Spacing", "gutenberg-users")}
                type="margin" responsive
                value={cat_spacing}
                onChange={(value) => {
                    setAttributes({cat_spacing: value})
                }}
            />

            <Color
                label={__('Category Color', 'gutenberg-users')}
                color={cat_color}
                onChange={(cat_color) => setAttributes({cat_color})}
            />

            <Color
                label={__('Category Color - Hover', 'gutenberg-users')}
                color={category_color_hover}
                onChange={(category_color_hover) => setAttributes({category_color_hover})}
            />


        </PanelBody>
    );
}

export default CategoryStyle;
