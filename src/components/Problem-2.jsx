import React, { useState } from 'react';
import Modal from './Modal';

const Problem2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const allCountryData = {
        name: 'All country'
    }
    const usCountryData = {
        name: 'US country'
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => setIsOpen(true)} >All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => setIsOpen(true)} >US Contacts</button>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    );
};

export default Problem2;