import icons from "./icon/icons";
import {Icon} from '@wordpress/components';
import renderControlIcons from './icon/renderControlIcons'

const {__} = wp.i18n;
export const RTTPG_LOGO = icons.postgrid_logo;
export const DEVICES = {
    Desktop: "md",
    Tablet: "sm",
    Mobile: "xs"
};
export const NORMAL_HOVER = [
    {label: "Normal", value: "normal"},
    {label: "Hover", value: "hover"}
];
export const BOX_HOVER = [
    {label: "Normal", value: "normal"},
    {label: "Hover", value: "hover"},
    {label: "Box Hover", value: "box_hover"}
];
export const ACTIVE_HOVER = [
    {label: "Normal", value: "normal"},
    {label: "Hover", value: "hover"},
    {label: "Active", value: "active"}
];

export const MEDIA_TYPE = [
    {label: "Icon", value: "icon"},
    {label: "Image", value: "image"},
    {label: "None", value: "none"}
];

export const DIRECTION_TYPE = [
    {label: "Left", value: "left"},
    {label: "Top", value: "top"},
    {label: "Right", value: "right"}
];

export const ICON_POSITION = [
    {label: "Left", value: "left"},
    {label: "Right", value: "right"}
];

export const BTN_WIDTH_TYPE = [
    {label: "Auto", value: "auto"},
    {label: "Full", value: "full"},
    {label: "Fixed", value: "fixed"}
]

export const BACKGROUND_TYPE = [
    {label: __("Classic", "guten-blocks"), value: "classic"},
    {label: __("Gradient", "guten-blocks"), value: "gradient"}
];

export const BACKGROUND_POSITION = [
    {label: __("Default", "guten-blocks"), value: ""},
    {label: __("Left Top", "guten-blocks"), value: "left top"},
    {label: __("Left Center", "guten-blocks"), value: "left center"},
    {label: __("Left Bottom", "guten-blocks"), value: "left bottom"},
    {label: __("Right Top", "guten-blocks"), value: "right top"},
    {label: __("Right Center", "guten-blocks"), value: "right center"},
    {label: __("Right Bottom", "guten-blocks"), value: "right bottom"},
    {label: __("Center Top", "guten-blocks"), value: "center top"},
    {label: __("Center Center", "guten-blocks"), value: "center center"},
    {label: __("Center Bottom", "guten-blocks"), value: "center bottom"}
];

export const BACKGROUND_SIZE = [
    {label: __("Default", "guten-blocks"), value: ""},
    {label: __("Auto", "guten-blocks"), value: "auto"},
    {label: __("Cover", "guten-blocks"), value: "cover"},
    {label: __("Contain", "guten-blocks"), value: "contain"}
];

export const BACKGROUND_REPEAT = [
    {label: __("Default", "guten-blocks"), value: ""},
    {label: __("No Repeat", "guten-blocks"), value: "no-repeat"},
    {label: __("Repeat", "guten-blocks"), value: "repeat"},
    {label: __("Repeat X", "guten-blocks"), value: "repeat-x"},
    {label: __("Repeat Y", "guten-blocks"), value: "repeat-y"}
];

export const BACKGROUND_ATTACHMENT = [
    {label: __("Default", "guten-blocks"), value: ""},
    {label: __("Scroll", "guten-blocks"), value: "scroll"},
    {label: __("Fixed", "guten-blocks"), value: "fixed"}
];

export const TEXT_TRANSFORM = [
    {label: __("None", "guten-blocks"), value: "none"},
    {label: __("Lowercase", "guten-blocks"), value: "lowercase"},
    {label: __("Capitalize", "guten-blocks"), value: "capitalize"},
    {label: __("Uppercase", "guten-blocks"), value: "uppercase"}
];

export const FONT_WEIGHTS = [
    {label: __("Default", "guten-blocks"), value: "default"},
    {label: __("Light", "guten-blocks"), value: "300"},
    {label: __("Normal", "guten-blocks"), value: "400"},
    {label: __("Medium", "guten-blocks"), value: "500"},
    {label: __("Semi Bold", "guten-blocks"), value: "600"},
    {label: __("Bold", "guten-blocks"), value: "700"},
    {label: __("Extra Bold", "guten-blocks"), value: "800"},
    {label: __("Heavy Bold", "guten-blocks"), value: "900"}
];

export const HEADING = [
    {label: __("H1", "guten-blocks"), value: "h1"},
    {label: __("H2", "guten-blocks"), value: "h2"},
    {label: __("H3", "guten-blocks"), value: "h3"},
    {label: __("H4", "guten-blocks"), value: "h4"},
    {label: __("H5", "guten-blocks"), value: "h5"},
    {label: __("H6", "guten-blocks"), value: "h6"}
];

export const BORDER_STYLES = [
    {label: __("None"), value: "none"},
    {label: __("Solid"), value: "solid"},
    {label: __("Dashed"), value: "dashed"},
    {label: __("Dotted"), value: "dotted"},
    {label: __("Double"), value: "double"},
    {label: __("Groove"), value: "groove"},
    {label: __("Inset"), value: "inset"},
    {label: __("Outset"), value: "outset"},
    {label: __("Ridge"), value: "ridge"}
];

// only apply fill and outline buttons
export const BUTTON_INFOBOX_HOVER_EFFECT = [
    {label: __("Select Effect"), value: ""},
    {label: __("Bounce left to right"), value: "rt-bounce-to-left"},
    {label: __("Bounce right to left"), value: "rt-bounce-to-right"},
    {label: __("Bounce top to bottom"), value: "rt-bounce-to-bottom"},
    {label: __("Bounce bottom to top"), value: "rt-bounce-to-top"},
    {label: __("Rectangle out"), value: "rt-rectangle-out"},
    {label: __("Rectangle in"), value: "rt-rectangle-in"},
    {label: __("Shutter in horizontal"), value: "rt-shutter-in-horizontal"},
    {label: __("Shutter out horizontal"), value: "rt-shutter-out-horizontal"},
    {label: __("Shutter in vertical"), value: "rt-shutter-in-vertical"},
    {label: __("Shutter out vertical"), value: "rt-shutter-out-vertical"}
];

export const ICON_HOVER_DIRECTION = [
    {label: __("Select Direction"), value: ""},
    {label: __("Top to bottom"), value: "rt-top-to-bottom"},
    {label: __("Bottom to top"), value: "rt-bottom-to-top"},
    {label: __("Right to left"), value: "rt-right-to-left"},
    {label: __("Left to right"), value: "rt-left-to-right"}
];

export const BG_HOVER_DIRECTION = [
    {label: __("Normal"), value: "rt-bg-normal"},
    {label: __("Top to bottom"), value: "rt-bg-top-to-bottom"},
    {label: __("Bottom to top"), value: "rt-bg-bottom-to-top"},
    {label: __("Right to left"), value: "rt-bg-right-to-left"},
    {label: __("Left to right"), value: "rt-bg-left-to-right"},
    {label: __("Zoom in"), value: "rt-bg-zoom-in"}

]

export const BUTTON_INFOBOX_STYLE = [
    {label: __("Text Button"), value: "text-btn"},
    {label: __("Fill Button"), value: "fill-btn"},
    {label: __("OutLine Button"), value: "outline-btn"},
    {label: __("Icon Button"), value: "icon-btn"}
];

export const BUTTON_TYPE = [
    {label: __("Fill"), value: "rt-fill-btn"},
    {label: __("Fill Button With Outline"), value: "rt-fill-btn-with-outline"},
    {label: __("OutLine Button"), value: "rt-outline-btn"},
    {label: __("Icon Button"), value: "rt-icon-btn"},
    {label: __("Position Aware"), value: "rt-position-aware-btn"}
];

export const BUTTON_SIZES = [
    {label: __("S"), value: "rt-btn-sm"},
    {label: __("M"), value: "rt-btn-md"},
    {label: __("L"), value: "rt-btn-lg"},
    {label: __("XL"), value: "rt-btn-xl"}
]

// only apply fill and outline buttons
export const BUTTON_HOVER_EFFECT = [
    {label: __("Default"), value: "rt-btn-no-effect"},
    {label: __("Bounce left to right"), value: "rt-bounce-to-left"},
    {label: __("Bounce right to left"), value: "rt-bounce-to-right"},
    {label: __("Bounce top to bottom"), value: "rt-bounce-to-bottom"},
    {label: __("Bounce bottom to top"), value: "rt-bounce-to-top"},

    {label: __("Rectangle out"), value: "rt-rectangle-out"},
    {label: __("Rectangle in"), value: "rt-rectangle-in"},

    {label: __("Shutter in horizontal"), value: "rt-shutter-in-horizontal"},
    {label: __("Shutter out horizontal"), value: "rt-shutter-out-horizontal"},
    {label: __("Shutter in vertical"), value: "rt-shutter-in-vertical"},
    {label: __("Shutter out vertical"), value: "rt-shutter-out-vertical"},

    {label: __("Slide down top left"), value: "rt-slide-down-top-left"},
    {label: __("Slide down top right"), value: "rt-slide-down-top-right"},
    {label: __("Slide up bottom left"), value: "rt-slide-up-bottom-left"},
    {label: __("Slide up bottom right"), value: "rt-slide-up-bottom-right"},

    {label: __("Swipe left to right"), value: "rt-swipe-left-to-right"},
    {label: __("Swipe right to left"), value: "rt-swipe-right-to-left"},
    {label: __("Swipe top to bottom"), value: "rt-swipe-top-to-bottom"},
    {label: __("Swipe bottom to top"), value: "rt-swipe-bottom-to-top"}
];

export const BUTTON_ICON_HOVER_EFFECTS = [
    {label: __("Default"), value: "rt-icon-effect-none"},
    //{ label: __("None"), value: "rt-icon-effect-none" },
    {label: __("Spin"), value: "rt-icon-spin"},
    {label: __("Shake Y"), value: "rt-icon-shake-y"},
    {label: __("Bounce In"), value: "rt-icon-bounce-in"},
    {label: __("Heart Beat"), value: "rt-icon-heart-beat"},
    {label: __("Right to left"), value: "rt-icon-right-to-left"},
    {label: __("Left to Right"), value: "rt-icon-left-to-right"},
    {label: __("Top to bottom"), value: "rt-icon-top-to-bottom"},
    {label: __("Bottom to top"), value: "rt-icon-bottom-to-top"}
]

//New constang
export const GRID_LAYOUT_OPT = [
    {value: 'grid-layout1', icon: icons.grid_layout1, label: __('Layout 1')},
    {value: 'grid-layout3', icon: icons.grid_layout2, label: __('Layout 2')},
    {value: 'grid-layout4', icon: icons.grid_layout3, label: __('Layout 3')},
    {value: 'grid-layout2', icon: icons.grid_layout4, label: __('Layout 4'), isPro: 1},
    {value: 'grid-layout5', icon: icons.grid_layout5, label: __('Layout 5'), isPro: 1},
    {value: 'grid-layout5-2', icon: icons.grid_layout6, label: __('Layout 6'), isPro: 1},
    {value: 'grid-layout6', icon: icons.grid_layout7, label: __('Layout 7'), isPro: 1},
    {value: 'grid-layout6-2', icon: icons.grid_layout8, label: __('Layout 8'), isPro: 1},
    {value: 'grid-layout7', icon: icons.grid_layout9, label: __('Layout 9'), isPro: 1}
];
export const LIST_LAYOUT_OPT = [
    {value: 'list-layout1', icon: icons.list_layout1, label: __('Layout 1')},
    {value: 'list-layout2', icon: icons.list_layout2, label: __('Layout 2')},
    {value: 'list-layout2-2', icon: icons.list_layout3, label: __('Layout 3')},
    {value: 'list-layout3', icon: icons.list_layout4, label: __('Layout 4'), isPro: 1},
    {value: 'list-layout3-2', icon: icons.list_layout5, label: __('Layout 5'), isPro: 1},
    {value: 'list-layout4', icon: icons.list_layout6, label: __('Layout 6'), isPro: 1},
    {value: 'list-layout5', icon: icons.list_layout7, label: __('Layout 7'), isPro: 1}
];

export const GRID_HOVER_LAYOUT_OPT = [
    {value: 'grid_hover-layout1', icon: icons.grid_hover1, label: __('Layout 1')},
    {value: 'grid_hover-layout2', icon: icons.grid_hover2, label: __('Layout 2')},
    {value: 'grid_hover-layout3', icon: icons.grid_hover3, label: __('Layout 3')},
    {value: 'grid_hover-layout4', icon: icons.grid_hover4, label: __('Layout 4'), isPro: 1},
    {value: 'grid_hover-layout4-2', icon: icons.grid_hover5, label: __('Layout 5'), isPro: 1},
    {value: 'grid_hover-layout5', icon: icons.grid_hover6, label: __('Layout 6'), isPro: 1},
    {value: 'grid_hover-layout5-2', icon: icons.grid_hover7, label: __('Layout 7'), isPro: 1},
    {value: 'grid_hover-layout6', icon: icons.grid_hover8, label: __('Layout 8'), isPro: 1},
    {value: 'grid_hover-layout6-2', icon: icons.grid_hover9, label: __('Layout 9'), isPro: 1},
    {value: 'grid_hover-layout7', icon: icons.grid_hover10, label: __('Layout 10'), isPro: 1},
    {value: 'grid_hover-layout7-2', icon: icons.grid_hover11, label: __('Layout 11'), isPro: 1},
    {value: 'grid_hover-layout8', icon: icons.grid_hover12, label: __('Layout 12'), isPro: 1},
    {value: 'grid_hover-layout9', icon: icons.grid_hover13, label: __('Layout 13'), isPro: 1},
    {value: 'grid_hover-layout9-2', icon: icons.grid_hover14, label: __('Layout 14'), isPro: 1},
    {value: 'grid_hover-layout10', icon: icons.grid_hover15, label: __('Layout 15'), isPro: 1},
    {value: 'grid_hover-layout11', icon: icons.grid_hover16, label: __('Layout 16'), isPro: 1}
];

export const SLIDER_LAYOUT_OPT = [
    {value: 'slider-layout1', icon: icons.slider_layout1, label: __('Layout 1')},
    {value: 'slider-layout2', icon: icons.slider_layout2, label: __('Layout 2')},
    {value: 'slider-layout3', icon: icons.slider_layout3, label: __('Layout 3')},
    {value: 'slider-layout4', icon: icons.slider_layout4, label: __('Layout 4')},
    {value: 'slider-layout5', icon: icons.slider_layout5, label: __('Layout 5')},
    {value: 'slider-layout6', icon: icons.slider_layout6, label: __('Layout 6')},
    {value: 'slider-layout7', icon: icons.slider_layout7, label: __('Layout 7')},
    {value: 'slider-layout8', icon: icons.slider_layout8, label: __('Layout 8')},
    {value: 'slider-layout9', icon: icons.slider_layout9, label: __('Layout 9')},
    {value: 'slider-layout10', icon: icons.slider_layout10, label: __('Layout 10')},
    {value: 'slider-layout11', icon: icons.slider_layout11, label: __('Layout 11')},
    {value: 'slider-layout12', icon: icons.slider_layout12, label: __('Layout 12')},
    {value: 'slider-layout13', icon: icons.slider_layout13, label: __('Layout 13')},
];

export const COL_OPTIONS = [
    {value: 0, label: __('Default', 'the-post-grid')},
    {value: 1, label: __('1 Col', 'the-post-grid')},
    {value: 2, label: __('2 Col', 'the-post-grid')},
    {value: 3, label: __('3 Col', 'the-post-grid')},
    {value: 4, label: __('4 Col', 'the-post-grid')},
    {value: 5, label: __('5 Col', 'the-post-grid')},
    {value: 6, label: __('6 Col', 'the-post-grid')}
];

export const COL_OPTIONS_GRID = [
    {value: 0, label: __('Default', 'the-post-grid')},
    {value: 12, label: __('1 Col', 'the-post-grid')},
    {value: 6, label: __('2 Col', 'the-post-grid')},
    {value: 4, label: __('3 Col', 'the-post-grid')},
    {value: 3, label: __('4 Col', 'the-post-grid')},
    {value: 24, label: __('5 Col', 'the-post-grid')},
    {value: 2, label: __('6 Col', 'the-post-grid')}
];

export const SECTION_TITLE_STYLE = [
    {value: 'default', label: __('Default - Text', 'the-post-grid')},
    {value: 'style1', label: __('Style 1 - Dot & Border', 'the-post-grid')},
    {value: 'style2', label: __('Style 2 - BG & Border', 'the-post-grid')},
    {value: 'style3', label: __('Style 3 - BG & Border - 2', 'the-post-grid')},
    {value: 'style4', label: __('Style 4 - Border Bottom', 'the-post-grid')}
];

export const SECTION_TITLE_SOURCE = [
    {value: 'page_title', label: __('Page Title', 'the-post-grid')},
    {value: 'custom_title', label: __('Custom Title', 'the-post-grid')}
];

export const TITLE_VISIBILITY_STYLE = [
    {value: 'default', label: __('Default', 'the-post-grid')},
    {value: 'one-line', label: __('Show in 1 line', 'the-post-grid')},
    {value: 'two-line', label: __('Show in 2 lines', 'the-post-grid')},
    {value: 'three-line', label: __('Show in 3 lines', 'the-post-grid')},
    {value: 'custom', label: __('Custom', 'the-post-grid')}
];

const titlePosition = [
    {value: 'default', label: __('Default', 'the-post-grid')}
];
if (rttpgParams.hasPro) {
    titlePosition.push({value: 'above_image', label: __('Above Image', 'the-post-grid')});
    titlePosition.push({value: 'below_image', label: __('Below Image', 'the-post-grid')});
}
export const TITLE_POSITION = titlePosition;

const orderBy = [
    {value: 'date', label: __('Date', 'the-post-grid')},
    {value: 'ID', label: __('Order by post ID', 'the-post-grid')},
    {value: 'author', label: __('Author', 'the-post-grid')},
    {value: 'title', label: __('Title', 'the-post-grid')},
    {value: 'modified', label: __('Last modified date', 'the-post-grid')},
    {value: 'parent', label: __('Post parent ID', 'the-post-grid')},
    {value: 'comment_count', label: __('Number of comments', 'the-post-grid')},
    {value: 'menu_order', label: __('Menu order', 'the-post-grid')}

];
if (rttpgParams.hasPro) {
    orderBy.push({value: 'rand', label: __('Random order', 'the-post-grid')});
}
export const POST_ORDER_BY = orderBy;

const pagination = [
    {value: 'pagination', label: __('Default Pagination', 'the-post-grid')}
];
if (rttpgParams.hasPro) {
    pagination.push({value: 'pagination_ajax', label: __('Ajax Pagination ( Only for Grid )', 'the-post-grid')});
    pagination.push({value: 'load_more', label: __('Load More - On Click', 'the-post-grid')});
    pagination.push({value: 'load_on_scroll', label: __('Load On Scroll', 'the-post-grid')});
}
export const PAGINATION_TYPE = pagination;


export const BUTTON_POSITION = [
    {value: '', label: __('Default', 'the-post-grid')},
    {value: 'absolute', label: __('Absolute', 'the-post-grid')}
];

export const BUTTON_SPACE_BETWEEN = [
    {value: '', label: __('Default', 'the-post-grid')},
    {value: 'space-between', label: __('Space Between', 'the-post-grid')}
];

const post_link_select = [
    {value: 'default', label: __('Link to details page', 'the-post-grid')}
];
if (rttpgParams.hasPro) {
    post_link_select.push({value: 'popup', label: __('Single Popup', 'the-post-grid')});
    post_link_select.push({value: 'multi_popup', label: __('Multi Popup', 'the-post-grid')});
}
export const POST_LINK_TYPE = post_link_select;

const metaPosition = [
    {value: 'default', label: __('Default', 'the-post-grid')}
];
if (rttpgParams.hasPro) {
    metaPosition.push({value: 'above_title', label: __('Above Title', 'the-post-grid')});
    metaPosition.push({value: 'below_title', label: __('Below Title', 'the-post-grid')});
    metaPosition.push({value: 'above_excerpt', label: __('Above excerpt', 'the-post-grid')});
    metaPosition.push({value: 'below_excerpt', label: __('Below excerpt', 'the-post-grid')});
}
export const META_POSITION = metaPosition;

// GRID_STYLE Constang
const tpgGridStyle = [
    {value: 'tpg-even', label: __('Grid', 'the-post-grid')},
    {value: 'tpg-full-height', label: __('Grid Equal Height', 'the-post-grid')}
];
if (rttpgParams.hasPro) {
    tpgGridStyle.push({value: 'masonry', label: __('Masonry', 'the-post-grid')});
}
export const GRID_STYLE = tpgGridStyle;


export const EXCERPT_TYPE = [
    {value: 'character', label: __('Character', 'the-post-grid')},
    {value: 'word', label: __('Word', 'the-post-grid')},
    {value: 'full', label: __('Full Content', 'the-post-grid')}
];

export const POST_SORT_ORDER = [
    {value: 'DESC', label: __('DESC', 'the-post-grid')},
    {value: 'ASC', label: __('ASC', 'the-post-grid')}
];

// POSTS_TYPE Constang
const tpgPostType = [];
let getPostType = rttpgParams.post_type;
for (let p in getPostType) {
    tpgPostType.push({value: p, label: __(getPostType[p], 'the-post-grid')})
}
export const POSTS_TYPE = tpgPostType;

const tpgAllUsers = [
    {value: '', label: __('Choose Author', 'the-post-grid')}
];
let getUsers = rttpgParams.get_users;
for (let u in getUsers) {
    tpgAllUsers.push({value: u, label: __(getUsers[u], 'the-post-grid')})
}
export const AUTHOR_LISTS = tpgAllUsers;

export const TAX_RELATION = [
    {value: 'OR', label: __('OR', 'the-post-grid')},
    {value: 'AND', label: __('AND', 'the-post-grid')}
]

export const PRINT_TAXONOMY = (taxonomy) => {
    let allTax = [];

    for (let tax in taxonomy) {
        allTax.push({value: tax, label: __(taxonomy[tax], 'the-post-grid')})
    }
    return allTax;
}


export const FORMATE_USERS = users => {
    if (! users) {
        return;
    }
    return users.map((user) => ({
        value: user.id,
        label: __(user.name, 'the-post-grid')
    }));
}
const hover_overlay_type = [
    {value: 'always', label: __('Show Always', 'the-post-grid')},
    {value: 'fadein-on-hover', label: __('FadeIn on hover', 'the-post-grid')},
    {value: 'fadeout-on-hover', label: __('FadeOut on hover', 'the-post-grid')},
    {value: 'slidein-on-hover', label: __('SlideIn on hover', 'the-post-grid')},
    {value: 'slideout-on-hover', label: __('SlideOut on hover', 'the-post-grid')},
    {value: 'zoomin-on-hover', label: __('ZoomIn on hover', 'the-post-grid')},
    {value: 'zoomout-on-hover', label: __('ZoomOut on hover', 'the-post-grid')},
    {value: 'zoominall-on-hover', label: __('ZoomIn Content on hover', 'the-post-grid')},
    {value: 'zoomoutall-on-hover', label: __('ZoomOut Content on hover', 'the-post-grid')}
];
export const OVERLAY_TYPE = hover_overlay_type;

const hover_overlay_type_two = [
    {value: 'always', label: __('Show Always', 'the-post-grid')},
    {value: 'fadein-on-hover', label: __('FadeIn on hover', 'the-post-grid')},
    {value: 'fadeout-on-hover', label: __('FadeOut on hover', 'the-post-grid')},
    {value: 'slidein-on-hover', label: __('SlideIn on hover', 'the-post-grid')},
    {value: 'slideout-on-hover', label: __('SlideOut on hover', 'the-post-grid')},
    {value: 'zoomin-on-hover', label: __('ZoomIn on hover', 'the-post-grid')},
    {value: 'zoomout-on-hover', label: __('ZoomOut on hover', 'the-post-grid')},
    {value: 'zoominall-on-hover', label: __('ZoomIn Content on hover', 'the-post-grid')},
    {value: 'zoomoutall-on-hover', label: __('ZoomOut Content on hover', 'the-post-grid')},
    {value: 'flipin-on-hover', label: __('FlipIn on hover', 'the-post-grid')},
    {value: 'flipout-on-hover', label: __('FlipOut on hover', 'the-post-grid')}
];
export const OVERLAY_TYPE_TWO = hover_overlay_type_two;

export const META_ORDERING_LABEL = [
    {value: 'author', label: 'Author'},
    {value: 'date', label: 'Date'},
    {value: 'category', label: 'Category'},
    {value: 'tags', label: 'Tags'},
    {value: 'comment_count', label: 'Comment Count'},
    {value: 'post_count', label: 'Post View Count'}
];

export const RTTPG_IS_PRO = rttpgParams.hasPro ? 'rttpg-has-pro' : 'rttpg-is-pro';

// GRID_STYLE Constang
const tpgHoverAnimation = [
    {value: 'default', label: __('Default', 'the-post-grid')},
    {value: 'img_zoom_in', label: __('Zoom In', 'the-post-grid')},
    {value: 'img_zoom_out', label: __('Zoom Out', 'the-post-grid')},
    {value: 'img_no_effect', label: __('None', 'the-post-grid')}
];
if (rttpgParams.hasPro) {
    tpgHoverAnimation.splice(3);
    tpgHoverAnimation.push({value: 'slide_to_right', label: __('Slide to Right', 'the-post-grid')});
    tpgHoverAnimation.push({value: 'slide_to_left', label: __('Slide to Left', 'the-post-grid')});
    tpgHoverAnimation.push({value: 'img_no_effect', label: __('None', 'the-post-grid')});
}
export const TPG_HOVER_ANIMATION = tpgHoverAnimation;

export const TPG_COLOR_PALATE = [
    {name: 'Color 1', color: '#72aee6'},
    {name: 'Color 2', color: '#0074FF'},
    {name: 'Color 3', color: '#15D38E'},
    {name: 'Color 4', color: '#00D4FF'},
    {name: 'Color 5', color: '#FF2D00'},
    {name: 'Color 6', color: '#AE2D00'},
    {name: 'Color 7', color: '#000000'},
    {name: 'Color 8', color: '#AAAAAA'},
    {name: 'Color 9', color: '#FFFFFF'},
];

export const CONTAINER_WIDTH = [
    {label: __("Full Width"), value: 'alignfull'},
    {label: __("Boxed"), value: 'alignwide'},
    {label: __("Custom"), value: 'custom'},
];


export const CONTENT_WIDTH = [
    {label: __("Boxed"), value: 'alignwide'},
    {label: __("Full Width"), value: 'alignfull'},
];

export const DIRECTION_OPTIONS = [
    {
        value: 'row',
        label: __('Row', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-direction-row')}/>),
    },
    {
        value: 'column',
        label: __('Column', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-direction-column')}/>),
    },
    {
        value: 'row-reverse',
        label: __('Row Reverse', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-direction-row-reverse')}/>),
    },
    {
        value: 'column-reverse',
        label: __('Column Reverse', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-direction-column-reverse')}/>),
    },
];

export const WRAP_OPTIONS = [
    {
        value: 'wrap',
        label: __('Wrap', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-wrap')}/>),
    },
    {
        value: 'nowrap',
        label: __('No Wrap', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-no-wrap')}/>),
    },
    {
        value: 'wrap-reverse',
        label: __('Wrap Reverse', 'the-post-grid'),
        icon: (<Icon icon={renderControlIcons('flex-wrap-reverse')}/>),
    },
];