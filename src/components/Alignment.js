const {__} = wp.i18n
const {useState} = wp.element;
const {Tooltip} = wp.components;
import "./scss/alignment.scss";
import Devices from "./Devices";

const Alignment = (props) => {

    const {value, responsive, onChange, label, content, options} = props;

    const [device, setDevice] = useState(() => window.gtusersDevice || 'lg');

    const _filterValue = () => {
        return value ? (responsive ? (value[device]) : value) : '';
    }

    const [currentValue, setCurrentValue] = useState({current: _filterValue()});

    const setSettings = (val) => {
        if (val == '') {
            return;
        }
        const final = responsive ? Object.assign({}, value, {[device]: val}) : val;
        onChange(final);
        setCurrentValue({current: final});
    }

    const defaultData = options && Array.isArray(options) ? options : ['left', 'center', 'right', 'justify'];

    return (
        <div className="gtusers-control-field components-base-control gtusers-cf-alignment-wrap">

            {(label || responsive) && (
                <div className="gtusers-cf-head">
                    {label && (
                        <span className="gtusers-label">{label}</span>
                    )}
                    {responsive &&
                        <Devices
                            device={device}
                            onChange={_device => {
                                setDevice(_device);
                                const newData = JSON.parse(JSON.stringify(value));
                                if (!newData[_device]) {
                                    newData[_device] = '';
                                }
                                onChange(newData)
                            }}
                        />
                    }
                </div>
            )}

            <div className="gtusers-cf-body gtusers-btn-group">

                {defaultData.map((data, index) => {
                    if (content) {
                        return (
                            <button className={(_filterValue() == data.value ? 'active' : '') + ' gtusers-button'}
                                    key={index}
                                    onClick={() => setSettings(_filterValue() == data.value ? '' : data.value)}>
                                <Tooltip
                                    text={__(data.label, 'gutenberg-users')}><span>{__(data.label, 'gutenberg-users')}</span></Tooltip>
                            </button>
                        )

                    } else {
                        return (
                            <button className={(_filterValue() == data ? 'active' : '') + ' gtusers-button'}
                                    key={index}
                                    onClick={() => setSettings(_filterValue() == data ? '' : data)}>
                                {(data == 'left' || data === 'flex-start') &&
                                    <Tooltip text={__('Left')}>
                                        <i className="dashicons dashicons-editor-alignleft"></i>
                                    </Tooltip>
                                }
                                {data == 'center' &&
                                    <Tooltip text={__('Middle')}>
                                        <i className="dashicons dashicons-editor-aligncenter"></i>
                                    </Tooltip>
                                }
                                {(data == 'right' || data === 'flex-end') &&
                                    <Tooltip text={__('Right')}>
                                        <i class="dashicons dashicons-editor-alignright"></i>
                                    </Tooltip>
                                }
                                {(data == 'justify') &&
                                    <Tooltip text={__('Right')}>
                                        <i class="dashicons dashicons-editor-justify"></i>
                                    </Tooltip>
                                }
                            </button>
                        )
                    }
                })}

            </div>
        </div>
    )
}

export default Alignment;