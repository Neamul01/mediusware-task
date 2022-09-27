import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [name, setName] = useState(null);
    const [status, setStatus] = useState(null);
    const [statusData, setStatusData] = useState([])

    const handleClick = (val) => {
        setShow(val);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let newData = { name, status }
        setStatusData([...statusData, newData])
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" onChange={(e) => setStatus(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                statusData?.map(s => {
                                    let shortStatus = [];
                                    shortStatus.push(s.status)
                                    if (show === s.status) {
                                        return <tr>
                                            <td scope="col">{s?.name}</td>
                                            <td scope="col">{s?.status}</td>
                                        </tr>
                                    } else if (show === s.status) {
                                        return <tr>
                                            <td scope="col">{s?.name}</td>
                                            <td scope="col">{s?.status}</td>
                                        </tr>
                                    }
                                    else if (show === 'all') {

                                        function sortData(property) {
                                            let sortOrder = 1;
                                            if (property[0] === "-") {
                                                sortOrder = -1;
                                                property = property.substr(1);
                                            }
                                            return function (a, b) {
                                                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                                                return result * sortOrder;
                                            }
                                        }
                                        statusData.sort(sortData('status'))
                                        return <tr>
                                            <td scope="col">{s?.name}</td>
                                            <td scope="col">{s?.status}</td>
                                        </tr>
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Problem1;