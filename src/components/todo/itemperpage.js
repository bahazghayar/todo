import React, { useContext } from 'react';
import { PaginationContext } from '../context/pagination-context'
import { Form } from 'react-bootstrap';

function ChengeNumberOfPages() {

    const pagination = useContext(PaginationContext);

    const changHandler = (e) => {
        pagination.setItems(e.target.value);
    }

    return (
        <>
            <Form.Control as="select" style={{width:"350px"}} custom onChange={changHandler}>

                <option>Items Per Page</option>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='6'>6</option>
                <option value='8'>8</option>

            </Form.Control>
        </>
    );

}
export default ChengeNumberOfPages;