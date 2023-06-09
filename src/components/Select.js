import Devices from "./Devices";

const {useState, useEffect} = wp.element;
const {BaseControl, SelectControl, Button} = wp.components;

function Select(props) {
    const {label, value, onChange, responsive, options = []} = props;
    const [device, setDevice] = useState(() => window.gtusersDevice || 'lg');

    const defaultData = '';

    const setSettings = (val) => {
        const newData = JSON.parse(JSON.stringify(value));
        newData[device] = val;
        onChange(newData);
    }


    return (

        <div className="gtusers-control-field components-base-control">

            <div className="gtusers-cf-head">
                <span className="gtusers-label">{label}</span>
                {responsive && <Devices device={device} onChange={_device => {
                    setDevice(_device);
                    const newData = JSON.parse(JSON.stringify(value));
                    if (!newData[_device]) {
                        newData[_device] = defaultData;
                        onChange(newData);
                    }
                }}/>}
            </div>

            <div className="gtusers-cf-body">
                <SelectControl
                    value={value[device]}
                    options={options}
                    onChange={(val) => setSettings(val)}
                />
            </div>

        </div>

    )
}

export default Select;