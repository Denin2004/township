import React from 'react';
import { Form } from 'ant-mobile';

const useWithForm = (Component) => {
    return (props) => {
        const [useForm] = Form.useForm();
        return <Component form={useForm} {...props} />;
    };
};

export default useWithForm;