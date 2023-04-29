import React from 'react';

const WorkTable = () => {
    return (
        <table>
                        <thead className='border-b '>
                            <tr className='roles-head'>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1 py-1" aria-label="Org" scope="col">organisation</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Link" scope="col">link</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Role" scope="col">role</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Role" scope="col">type</th>
                                <th className="box-content border-y border-low px-ch text-left font-semibold lowercase text-low first-of-type:pl-1 last-of-type:pr-1" aria-label="Period" scope="col">period</th>
                            </tr>
                        </thead>
                        <tbody className='border-b'>
                            <tr>
                                <th className='text-left text-med py-1'> Curelink </th>
                                <a className="companyWebsite" href="https://cure.link/" target='_blank'> <td className='text-left text-med py-1'>  cure.link </td>  </a>
                                <td className='text-left text-med py-1'> Software Engineer </td>
                                <td className='text-left text-med py-1'> Fulltime </td>
                                <td className='text-left text-med py-1'> Jan.22 -  </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> Nference Labs</td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="https://nference.com/"> nference.com </a> </td>
                                <td className='text-left text-med py-1'> Software Development Engineer </td>
                                <td className='text-left text-med py-1'> Fulltime </td>
                                <td className='text-left text-med py-1'> Aug.20 - Dec.21 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> phpMyAdmin </td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="https://www.phpmyadmin.net/"> phpmyadmin.net </a> </td>
                                <td className='text-left text-med py-1'> GSoC Engineer </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> May.19 - Aug.19 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> Dataphi Labs </td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="https://dataphilabs.com/"> dataphilabs.com </a> </td>
                                <td className='text-left text-med py-1'> FullStack Engineer </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> May.18 - Jul.18 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> RADICALi </td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="https://radicali.io/"> radicali.io </a> </td>
                                <td className='text-left text-med py-1'> Backend Enginner </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> Jun.19 - Jul.19 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> LeanTrack </td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="#"> lean.track </a> </td>
                                <td className='text-left text-med py-1'> Product Design </td>
                                <td className='text-left text-med py-1'> Intern </td>
                                <td className='text-left text-med py-1'> May.19 - Jul.19 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> IMG, IIT Roorkee </td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="https://channeli.in/maintainer_site/"> link </a> </td>
                                <td className='text-left text-med py-1'> Developer & Chief admin </td>
                                <td className='text-left text-med py-1'> Parttime </td>
                                <td className='text-left text-med py-1'> Jan.17 - Apr.20 </td>
                            </tr>
                        </tbody>
                        <tbody className='border-b'>
                            <tr>
                                <td className='text-left font-semibold text-med py-1'> Redseer </td>
                                <td className='text-left text-med py-1'> <a target='_blank' href="https://redseer.com/"> redseer.com </a> </td>
                                <td className='text-left text-med py-1'> Data Science Freelance </td>
                                <td className='text-left text-med py-1'> Parttime </td>
                                <td className='text-left text-med py-1'> Sep.18 - Oct.18 </td>
                            </tr>
                        </tbody>
                    </table>
    )
    
}

export default WorkTable;

