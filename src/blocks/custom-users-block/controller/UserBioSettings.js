import {
    SelectControl,
    PanelBody,
    ButtonGroup,
    Button,
    TextControl, __experimentalHeading as Heading, __experimentalBorderControl as BorderControl
} from '@wordpress/components';
import Color from "../../../components/Color";
import Typography from "../../../components/Typography";
import Dimension from "../../../components/Dimension";
import {UserGrid_COLOR_PALATE, NORMAL_HOVER} from "../../../components/Constants";

const {__} = wp.i18n;

function UserBioSettings(props) {
    const {attributes, setAttributes} = props.data;
    //All attribute
    const {
        bio_typography,
        bio_spacing,
        bio_color,
    } = attributes;

    return (
        <PanelBody title={__('User Biography', 'user-grid')} initialOpen={false}>

            <Typography
                label={__('Typography')}
                value={bio_typography}
                onChange={(val) => setAttributes({bio_typography: val})}
            />

            <Dimension
                label={__("Spacing", "user-grid")}
                type="margin" responsive
                value={bio_spacing}
                onChange={(value) => {
                    setAttributes({bio_spacing: value})
                }}
            />

            <Color
                label={__('Color', 'user-grid')}
                color={bio_color}
                onChange={(bio_color) => setAttributes({bio_color})}
            />

        </PanelBody>
    );
}

export default UserBioSettings;
