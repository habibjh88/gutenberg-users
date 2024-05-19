const {__} = wp.i18n
const {useState} = wp.element;
const {Tooltip} = wp.components;
import "./scss/alignment.scss";
import Devices from "./Devices";

const Alignment = (props) => {

    const {value, responsive, onChange, label, content, options, direction} = props;

    const [device, setDevice] = useState(() => window.dowpDevice || 'lg');

    const _filterValue = () => {
        return value ? (responsive ? (value[device]) : value) : '';
    }

    const [currentValue, setCurrentValue] = useState({current: _filterValue()});

    const setSettings = (val) => {
        // if (val == '') {
        //     return;
        // }
        const final = responsive ? Object.assign({}, value, {[device]: val}) : val;
        onChange(final);
        setCurrentValue({current: final});
    }

    const defaultData = options && Array.isArray(options) ? options : ['left', 'center', 'right', 'justify'];

    return (
        <div className="dowp-control-field components-base-control dowp-cf-alignment-wrap">

            {(label || responsive) && (
                <div className="dowp-cf-head">
                    {label && (
                        <span className="dowp-label">{label}</span>
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

            <div className="dowp-cf-body dowp-btn-group">

                {defaultData.map((data, index) => {
                    if (content) {
                        return (
                            <button className={(_filterValue() == data.value ? 'active' : '') + ' dowp-button'}
                                    key={index}
                                    onClick={() => setSettings(_filterValue() == data.value ? '' : data.value)}>
                                <Tooltip
                                    text={__(data.label, 'user-grid')}><span>{__(data.label, 'user-grid')}</span></Tooltip>
                            </button>
                        )

                    } else {
                        return (
                            <button className={(_filterValue() == data ? 'active' : '') + ' dowp-button'}
                                    key={index}
                                    onClick={() => {
                                        let finalData = _filterValue() == data ? null : data;
                                        console.log(finalData)
                                        setSettings(_filterValue() == data ? '' : data)
                                    }}>
                                {(data == 'left' || data === 'flex-start') &&
                                    <Tooltip text={__('Left')}>
                                        {direction === 'vertical' ?
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="current_color"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M1.23535 1.2558C1.23535 0.982656 1.01393 0.76123 0.740783 0.76123C0.467641 0.76123 0.246215 0.982656 0.246215 1.2558L0.246215 10.6308C0.246215 10.9039 0.46764 11.1254 0.740783 11.1254C1.01393 11.1254 1.23535 10.9039 1.23535 10.6308L1.23535 1.2558ZM10.4644 0.76123C10.7376 0.76123 10.959 0.982656 10.959 1.2558V7.5058C10.959 7.77894 10.7376 8.00037 10.4644 8.00037C10.1913 8.00037 9.96985 7.77894 9.96985 7.5058V1.2558C9.96985 0.982656 10.1913 0.76123 10.4644 0.76123ZM13.7051 0.76123C13.9783 0.76123 14.1997 0.982656 14.1997 1.2558L14.1997 10.6308C14.1997 10.9039 13.9783 11.1254 13.7051 11.1254C13.432 11.1254 13.2106 10.9039 13.2106 10.6308V1.2558C13.2106 0.982656 13.432 0.76123 13.7051 0.76123ZM7.22321 0.76123C7.49635 0.76123 7.71777 0.982656 7.71777 1.2558L7.71777 10.6308C7.71777 10.9039 7.49635 11.1254 7.2232 11.1254C6.95006 11.1254 6.72864 10.9039 6.72864 10.6308L6.72864 1.2558C6.72864 0.982656 6.95006 0.76123 7.22321 0.76123ZM4.47656 1.2558C4.47656 0.982656 4.25514 0.76123 3.98199 0.76123C3.70885 0.76123 3.48743 0.982656 3.48743 1.2558L3.48743 7.5058C3.48743 7.77894 3.70885 8.00037 3.98199 8.00037C4.25514 8.00037 4.47656 7.77894 4.47656 7.5058L4.47656 1.2558Z"
                                                      fill="current_color"/>
                                            </svg>
                                            :
                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="current_color"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M0.670714 0.894287C0.398988 0.894287 0.178711 1.11456 0.178711 1.38629C0.178711 1.65801 0.398988 1.87829 0.670714 1.87829H15.4308C15.7025 1.87829 15.9228 1.65801 15.9228 1.38629C15.9228 1.11456 15.7025 0.894287 15.4308 0.894287H0.670714ZM0.670713 4.17429C0.398987 4.17429 0.178711 4.39456 0.178711 4.66629C0.178711 4.93801 0.398987 5.15829 0.670713 5.15829H10.5108C10.7825 5.15829 11.0028 4.93801 11.0028 4.66629C11.0028 4.39456 10.7825 4.17429 10.5108 4.17429H0.670713ZM0.178711 7.94629C0.178711 7.67456 0.398987 7.45429 0.670713 7.45429H15.4308C15.7025 7.45429 15.9228 7.67456 15.9228 7.94629C15.9228 8.21801 15.7025 8.43829 15.4308 8.43829H0.670713C0.398987 8.43829 0.178711 8.21801 0.178711 7.94629ZM0.670713 10.7343C0.398987 10.7343 0.178711 10.9546 0.178711 11.2263C0.178711 11.498 0.398987 11.7183 0.670713 11.7183H10.5108C10.7825 11.7183 11.0028 11.498 11.0028 11.2263C11.0028 10.9546 10.7825 10.7343 10.5108 10.7343H0.670713Z"
                                                      fill="current_color"/>
                                            </svg>
                                        }

                                    </Tooltip>
                                }
                                {data == 'center' &&
                                    <Tooltip text={__('Middle')}>
                                        {direction === 'vertical' ?
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="current_color"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M1.11865 1.2558C1.11865 0.982656 0.897227 0.76123 0.624084 0.76123C0.350942 0.76123 0.129516 0.982656 0.129516 1.2558L0.129515 10.6308C0.129515 10.9039 0.350941 11.1254 0.624084 11.1254C0.897226 11.1254 1.11865 10.9039 1.11865 10.6308L1.11865 1.2558ZM13.5884 0.76123C13.8616 0.76123 14.083 0.982656 14.083 1.2558L14.083 10.6308C14.083 10.9039 13.8616 11.1254 13.5884 11.1254C13.3153 11.1254 13.0939 10.9039 13.0939 10.6308V1.2558C13.0939 0.982656 13.3153 0.76123 13.5884 0.76123ZM10.3477 2.32373C10.6209 2.32373 10.8423 2.54516 10.8423 2.8183V9.0683C10.8423 9.34144 10.6209 9.56287 10.3477 9.56287C10.0746 9.56287 9.85315 9.34144 9.85315 9.0683V2.8183C9.85315 2.54516 10.0746 2.32373 10.3477 2.32373ZM7.10651 0.76123C7.37965 0.76123 7.60107 0.982656 7.60107 1.2558L7.60107 10.6308C7.60107 10.9039 7.37965 11.1254 7.10651 11.1254C6.83336 11.1254 6.61194 10.9039 6.61194 10.6308L6.61194 1.2558C6.61194 0.982656 6.83336 0.76123 7.10651 0.76123ZM4.35986 2.8183C4.35986 2.54516 4.13844 2.32373 3.86529 2.32373C3.59215 2.32373 3.37073 2.54516 3.37073 2.8183L3.37073 9.0683C3.37073 9.34144 3.59215 9.56287 3.86529 9.56287C4.13844 9.56287 4.35986 9.34144 4.35986 9.0683L4.35986 2.8183Z"
                                                      fill="current_color"/>
                                            </svg>
                                            :
                                            <svg width="17" height="12" viewBox="0 0 17 12" fill="current_color"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M1.32013 0.894287C1.0484 0.894287 0.828125 1.11456 0.828125 1.38629C0.828125 1.65801 1.0484 1.87829 1.32013 1.87829H16.0802C16.3519 1.87829 16.5722 1.65801 16.5722 1.38629C16.5722 1.11456 16.3519 0.894287 16.0802 0.894287H1.32013ZM3.78015 4.17429C3.50842 4.17429 3.28815 4.39456 3.28815 4.66629C3.28815 4.93801 3.50842 5.15829 3.78015 5.15829H13.6202C13.8919 5.15829 14.1122 4.93801 14.1122 4.66629C14.1122 4.39456 13.8919 4.17429 13.6202 4.17429H3.78015ZM0.828125 7.94629C0.828125 7.67456 1.0484 7.45429 1.32013 7.45429H16.0802C16.3519 7.45429 16.5722 7.67456 16.5722 7.94629C16.5722 8.21801 16.3519 8.43829 16.0802 8.43829H1.32013C1.0484 8.43829 0.828125 8.21801 0.828125 7.94629ZM3.78015 10.7343C3.50842 10.7343 3.28815 10.9546 3.28815 11.2263C3.28815 11.498 3.50842 11.7183 3.78015 11.7183H13.6202C13.8919 11.7183 14.1122 11.498 14.1122 11.2263C14.1122 10.9546 13.8919 10.7343 13.6202 10.7343H3.78015Z"
                                                      fill="current_color"/>
                                            </svg>
                                        }
                                    </Tooltip>
                                }
                                {(data == 'right' || data === 'flex-end') &&
                                    <Tooltip text={__('Right')}>
                                        {direction === 'vertical' ?
                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="current_color"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M0.984863 1.2558C0.984863 0.982656 0.763438 0.76123 0.490295 0.76123C0.217153 0.76123 -0.00427325 0.982656 -0.00427326 1.2558L-0.00427375 10.6308C-0.00427377 10.9039 0.217152 11.1254 0.490294 11.1254C0.763437 11.1254 0.984863 10.9039 0.984863 10.6308L0.984863 1.2558ZM13.4547 0.76123C13.7278 0.76123 13.9492 0.982656 13.9492 1.2558L13.9492 10.6308C13.9492 10.9039 13.7278 11.1254 13.4546 11.1254C13.1815 11.1254 12.9601 10.9039 12.9601 10.6308V1.2558C12.9601 0.982656 13.1815 0.76123 13.4547 0.76123ZM10.2139 3.88623C10.4871 3.88623 10.7085 4.10766 10.7085 4.3808V10.6308C10.7085 10.9039 10.4871 11.1254 10.2139 11.1254C9.94078 11.1254 9.71936 10.9039 9.71936 10.6308V4.3808C9.71936 4.10766 9.94079 3.88623 10.2139 3.88623ZM6.97272 0.76123C7.24586 0.76123 7.46729 0.982656 7.46729 1.2558L7.46728 10.6308C7.46728 10.9039 7.24586 11.1254 6.97272 11.1254C6.69957 11.1254 6.47815 10.9039 6.47815 10.6308L6.47815 1.2558C6.47815 0.982656 6.69957 0.76123 6.97272 0.76123ZM4.22607 4.3808C4.22607 4.10766 4.00465 3.88623 3.73151 3.88623C3.45836 3.88623 3.23694 4.10766 3.23694 4.3808L3.23694 10.6308C3.23694 10.9039 3.45836 11.1254 3.73151 11.1254C4.00465 11.1254 4.22607 10.9039 4.22607 10.6308L4.22607 4.3808Z"
                                                      fill="current_color"/>
                                            </svg>
                                            :
                                            <svg width="17" height="12" viewBox="0 0 17 12" fill="current_color"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M0.953429 0.894287C0.681703 0.894287 0.461426 1.11456 0.461426 1.38629C0.461426 1.65801 0.681703 1.87829 0.953429 1.87829H15.7135C15.9852 1.87829 16.2055 1.65801 16.2055 1.38629C16.2055 1.11456 15.9852 0.894287 15.7135 0.894287H0.953429ZM5.87346 4.17429C5.60173 4.17429 5.38145 4.39456 5.38145 4.66629C5.38145 4.93801 5.60173 5.15829 5.87346 5.15829H15.7135C15.9852 5.15829 16.2055 4.93801 16.2055 4.66629C16.2055 4.39456 15.9852 4.17429 15.7135 4.17429H5.87346ZM0.461426 7.94629C0.461426 7.67456 0.681703 7.45429 0.953429 7.45429H15.7135C15.9852 7.45429 16.2055 7.67456 16.2055 7.94629C16.2055 8.21801 15.9852 8.43829 15.7135 8.43829H0.953429C0.681703 8.43829 0.461426 8.21801 0.461426 7.94629ZM5.87346 10.7343C5.60173 10.7343 5.38145 10.9546 5.38145 11.2263C5.38145 11.498 5.60173 11.7183 5.87346 11.7183H15.7135C15.9852 11.7183 16.2055 11.498 16.2055 11.2263C16.2055 10.9546 15.9852 10.7343 15.7135 10.7343H5.87346Z"
                                                      fill="current_color"/>
                                            </svg>
                                        }
                                    </Tooltip>
                                }
                                {(data == 'justify') &&
                                    <Tooltip text={__('Right')}>
                                        <svg width="17" height="12" viewBox="0 0 17 12" fill="current_color"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M1.30255 0.894287C1.03082 0.894287 0.810547 1.11456 0.810547 1.38629C0.810547 1.65801 1.03082 1.87829 1.30255 1.87829H16.0626C16.3344 1.87829 16.5546 1.65801 16.5546 1.38629C16.5546 1.11456 16.3344 0.894287 16.0626 0.894287H1.30255ZM1.30255 4.17429C1.03082 4.17429 0.810547 4.39456 0.810547 4.66629C0.810547 4.93801 1.03082 5.15829 1.30255 5.15829H16.0622C16.334 5.15829 16.5542 4.93801 16.5542 4.66629C16.5542 4.39456 16.334 4.17429 16.0622 4.17429H1.30255ZM0.810547 7.94629C0.810547 7.67456 1.03082 7.45429 1.30255 7.45429H16.0626C16.3344 7.45429 16.5546 7.67456 16.5546 7.94629C16.5546 8.21801 16.3344 8.43829 16.0626 8.43829H1.30255C1.03082 8.43829 0.810547 8.21801 0.810547 7.94629ZM1.30255 10.7343C1.03082 10.7343 0.810547 10.9546 0.810547 11.2263C0.810547 11.498 1.03082 11.7183 1.30255 11.7183L16.0626 11.7183C16.3344 11.7183 16.5546 11.498 16.5546 11.2263C16.5546 10.9546 16.3344 10.7343 16.0626 10.7343L1.30255 10.7343Z"
                                                  fill="current_color"/>
                                        </svg>
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