import React from 'react';
import { useParams } from 'react-router-dom';

const useWithParams = (Component) => {
    return (props) => {
        const location = useParams();
        return <Component params={location} {...props} />;
    };
};

export default useWithParams;