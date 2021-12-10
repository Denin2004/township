import { useNavigate } from 'react-router-dom';
import React, {Component} from 'react';

const useWithNavigate = (Component) => {
    return (props) => {
        return <Component navigate={useNavigate()} {...props} />;
    };
};

export default useWithNavigate;