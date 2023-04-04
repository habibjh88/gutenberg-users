import {RTTPG_IS_PRO} from "../../components/Constants";

const {__} = wp.i18n;
import {SelectControl, TextControl, ToggleControl, PanelBody} from "@wordpress/components";
import cogoToast from "cogo-toast";


function FrontEndFilterController(props) {
    const {attributes, setAttributes, changeQuery, postData} = props.data;
    //All attribute
    const {
        show_taxonomy_filter,
        show_author_filter,
        show_order_by,
        show_sort_order,
        show_search,
        filter_type,
        filter_btn_style,
        filter_post_count,
        tgp_filter_taxonomy_hierarchical,
        tpg_hide_all_button,
        tax_filter_all_text,
        author_filter_all_text,
        filter_taxonomy
    } = attributes;

    const chooseTax = postData?.query_info?.taxonomy;
    const taxonomySelect = [];
    for (let tax in chooseTax) {
        taxonomySelect.push({value: tax, label: __(chooseTax[tax], 'the-post-grid')})
    }

    return (
        <PanelBody title={__('Filter (Front-end)', 'the-post-grid')} initialOpen={false}>

            <div style={{position: "relative"}}>
                {RTTPG_IS_PRO === 'rttpg-is-pro' && <div className={`rttpg-alert-message`} onClick={() => {
                    cogoToast.warn('Please upgrade to pro for this feature.', {position: 'top-right'});
                }}></div>}

                <ToggleControl
                    label={__("Taxonomy Filter", "the-post-grid")}
                    className={`rttpg-toggle-control-field ${RTTPG_IS_PRO}`}
                    checked={show_taxonomy_filter}
                    onChange={(show_taxonomy_filter) => {
                        setAttributes({show_taxonomy_filter: show_taxonomy_filter ? 'show' : ''})
                        changeQuery()
                    }}
                />

                <ToggleControl
                    label={__("Author filter", "the-post-grid")}
                    className={`rttpg-toggle-control-field ${RTTPG_IS_PRO}`}
                    checked={show_author_filter}
                    onChange={(show_author_filter) => {
                        setAttributes({show_author_filter: show_author_filter ? 'show' : ''})
                        changeQuery()
                    }}
                />

                <ToggleControl
                    label={__("Order By Filter", "the-post-grid")}
                    className={`rttpg-toggle-control-field ${RTTPG_IS_PRO}`}
                    checked={show_order_by}
                    onChange={(show_order_by) => {
                        setAttributes({show_order_by: show_order_by ? 'show' : ''})
                        changeQuery()
                    }}
                />

                <ToggleControl
                    label={__("Sort Order Filter", "the-post-grid")}
                    className={`rttpg-toggle-control-field ${RTTPG_IS_PRO}`}
                    checked={show_sort_order}
                    onChange={(show_sort_order) => {
                        setAttributes({show_sort_order: show_sort_order ? 'show' : ''})
                        changeQuery()
                    }}
                />

                <ToggleControl
                    label={__("Search filter", "the-post-grid")}
                    className={`rttpg-toggle-control-field ${RTTPG_IS_PRO}`}
                    checked={show_search}
                    onChange={(show_search) => {
                        setAttributes({show_search: show_search ? 'show' : ''})
                        changeQuery()
                    }}
                />
            </div>

            {RTTPG_IS_PRO === 'rttpg-has-pro' && (show_taxonomy_filter === 'show' || show_author_filter === 'show' || show_order_by === 'show' || show_sort_order === 'show' || show_search === 'show') && (
                <>
                    <hr/>
                    <SelectControl
                        label={__("Filter Type", "the-post-grid")}
                        className="rttpg-control-field label-inline rttpg-expand"
                        options={[
                            {value: 'dropdown', label: __('Dropdown', 'the-post-grid')},
                            {value: 'button', label: __('Button', 'the-post-grid')}
                        ]}
                        value={filter_type}
                        onChange={(filter_type) => {
                            setAttributes({filter_type})
                            changeQuery()
                        }}
                    />

                    {filter_type === 'button' && (
                        <SelectControl
                            label={__("Filter Style", "the-post-grid")}
                            className="rttpg-control-field label-inline rttpg-expand"
                            options={[
                                {value: 'default', label: __('Default', 'the-post-grid')}, {
                                    value: 'carousel', label: __('Collapsable', 'the-post-grid')
                                }
                            ]}
                            value={filter_btn_style}
                            help={__("If you use collapsable then only category section show on the filter", "the-post-grid")}
                            onChange={(filter_btn_style) => {
                                setAttributes({filter_btn_style})
                                changeQuery()
                            }}
                        />)}

                    {show_taxonomy_filter === 'show' &&
                        <SelectControl
                            label={__("Choose Taxonomy", "the-post-grid")}
                            className="rttpg-control-field label-inline rttpg-expand"
                            options={taxonomySelect}
                            value={filter_taxonomy}
                            onChange={(filter_taxonomy) => {
                                setAttributes({filter_taxonomy})
                                changeQuery()
                            }}
                        />
                    }

                    <SelectControl
                        label={__("Filter Post Count", "the-post-grid")}
                        className="rttpg-control-field label-inline"
                        options={[{value: 'yes', label: __('Yes', 'the-post-grid')}, {
                            value: 'no',
                            label: __('No', 'the-post-grid')
                        }]}
                        value={filter_post_count}
                        onChange={(filter_post_count) => {
                            setAttributes({filter_post_count})
                            changeQuery()
                        }}
                    />


                    {(filter_type === 'button' && filter_btn_style === 'default') && (
                        <SelectControl
                            label={__("Tax Hierarchical", "the-post-grid")}
                            className="rttpg-control-field label-inline"
                            options={[{value: 'yes', label: __('Yes', 'the-post-grid')}, {
                                value: 'no',
                                label: __('No', 'the-post-grid')
                            }]}
                            value={tgp_filter_taxonomy_hierarchical}
                            onChange={(tgp_filter_taxonomy_hierarchical) => {
                                setAttributes({tgp_filter_taxonomy_hierarchical})
                                changeQuery()
                            }}
                        />)}

                    {(filter_type === 'button') && (
                        <SelectControl
                            label={__("Hide (Show all button)", "the-post-grid")}
                            className="rttpg-control-field label-inline"
                            options={[
                                {value: 'yes', label: __('Show', 'the-post-grid')}, {
                                    value: 'no', label: __('Hide', 'the-post-grid')
                                }
                            ]}
                            value={tpg_hide_all_button}
                            onChange={(tpg_hide_all_button) => {
                                setAttributes({tpg_hide_all_button})
                                changeQuery()
                            }}
                        />)}

                    <TextControl
                        autocomplete="off"
                        label={__("All Taxonomy Text", "the-post-grid")}
                        className="rttpg-control-field label-inline"
                        placeholder="Enter All Category Text Here.."
                        value={tax_filter_all_text}
                        onChange={(tax_filter_all_text) => {
                            setAttributes({tax_filter_all_text})
                            changeQuery()
                        }}
                    />

                </>

            )}

            {(show_author_filter === 'show' && filter_btn_style === 'default') && (
                <TextControl
                    autocomplete="off"
                    label={__("All Users Text", "the-post-grid")}
                    className="rttpg-control-field label-inline"
                    placeholder="Enter All Users Text Here.."
                    value={author_filter_all_text}
                    onChange={(author_filter_all_text) => {
                        setAttributes({author_filter_all_text})
                        changeQuery()
                    }}
                />)}
        </PanelBody>
    );
}

export default FrontEndFilterController;
