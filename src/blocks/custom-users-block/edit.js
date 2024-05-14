const {useEffect, useState} = wp.element;
import apiFetch from "@wordpress/api-fetch";
import Inspector from "./inspector";
import CustomUsersBlock from "./layouts/CustomUsersBlock";
import {CssGenerator} from "../../utils/css/CssGenerator";
import {CATEGORY_PREVIEW} from "../../components/Constants";
const Edit = (props) => {
    const {isSelected, attributes, setAttributes} = props;

    //all attribute
    const {
        preview,
        uniqueId,
        users_lists,
        users_role,
        image_size,
        avatar_dimension,
        user_limit,
        user_filter_by_domain,
        orderby,
        order
    } = attributes;

    //set block preview
    if (preview) {
        return CATEGORY_PREVIEW;
    }

    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState([]);
    const [signalController, setSignalController] = useState();
    const [queryEffect, setQueryEffect] = useState(false);
    const controller = typeof AbortController === 'undefined' ? undefined : new AbortController();

    const handleQueryChange = () => {
        setQueryEffect(!queryEffect);
    }

    const fetch_all_users_frontend = () => {
        signalController?.abort();
        setSignalController(controller);
        setUsers({})
        apiFetch({
            path: '/dowp/v1/users',
            signal: controller?.signal,
            method: 'POST',
            data: {
                users_lists,
                user_limit,
                users_role,
                image_size,
                avatar_dimension,
                user_filter_by_domain,
                orderby,
                order
            }
        }).then((data) => {
            setAttributes({query_change: false})
            setUsers(data)
            console.log(data)
        });
    }

    const fetch_users_data_inspector = () => {
        signalController?.abort();
        setSignalController(controller);
        setUsers({})
        apiFetch({
            path: '/dowp/v1/users-select',
            signal: controller?.signal,
            method: 'POST',
        }).then((data) => {
            setAttributes({query_change: false})
            setUserData(data)
        });
    }

    // Fetch All Posts
    //== == == == == == == ==
    useEffect(() => {
        fetch_all_users_frontend();
    }, [queryEffect]);

    useEffect(() => {
        fetch_users_data_inspector();
    }, []);

    if (uniqueId) {
        CssGenerator(attributes, 'custom-users-block', uniqueId);
    }

    //render
    return [
        isSelected && (
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                changeQuery={handleQueryChange}
                userData={userData}
            />
        ),
        
        <CustomUsersBlock props={props} userData={users} changeQuery={handleQueryChange}/>
    
    ]
}
export default Edit;
