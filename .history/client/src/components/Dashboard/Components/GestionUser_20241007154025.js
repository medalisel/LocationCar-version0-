import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from '../../../JS/userSlice';
// import { useSelector } from 'react-redux';

const GestionUser = () => {
    
    const dispatch = useDispatch();
    const [showthird, setshowthird] = useState(false);
    const allusers = useSelector((store) => store.client?.client);
    console.log("allusers",allusers)
    return (
        <div className="box-gestionuser">
            <Sidebar />
            <h1>Gestion des Clients</h1>
            <div className='bodygestionuser'>
                <table>
                    <thead className='tetetable'>
                        <tr>
                            <th>Users</th>
                            <th>Mail</th>
                            <th>Téléphone Mobile</th>
                            <th>Settings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allusers?.map((data) => (
                            <tr >
                                <td data-label="Utilisateur">{data?.name}</td>
                                <td data-label="email">{data?.email}</td>
                                <td data-label="Téléphone Mobile">{data?.mobile}</td>
                                <td data-label="settings">

                    <div className='settingsadmin'>
                    <button className='deletebtn' onClick={() => (dispatch(deleteuser(data?._id)))}> Delete</button>


                    <button className='updatebtn' onClick={()=> setshowthird(!showthird)}> Update</button>
                    </div>

                    {showthird? 
                    (<> 
                    <div className='updatecarsettings'>
                     <p>name</p><input type="text" placeholder={data.model} onChange={(e)=>setupuser({name:e.target.value})}/> 
                     <p>email</p><input type="text" placeholder={data.matriculation} onChange={(e)=>setupuser({matriculation:e.target.value})}/> 
                     <p>Price per day</p><input type="text" placeholder={data.price_per_day} onChange={(e)=>setupcar({price_per_day:e.target.value})}/> 
                     <p>Availability</p><input type="text" placeholder={data.availability_status} onChange={(e)=>setupcar({availability_status:e.target.value})}/> 
                     </div> 
                     <button className="btn-up-ok" onClick={()=>dispatch(updatecar({id:data._id,upcar:upcar}))}>ok</button>
                     </>):null}
                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GestionUser;


















// import React from 'react'
// import Sidebar from './Sidebar'
// import { useSelector } from 'react-redux'

// const GestionUser = () => {

//     // const allusers = useSelector((store) => store.user?.user)


//     // export default class PersonList extends React.Component {
//         state = {
//           persons: []
//         }
      
//         componentDidMount() {
//           axios.get(`https://jsonplaceholder.typicode.com/users`)
//             .then(res => {
//               const persons = res.data.user;
//               this.setState({ persons });
//             })
//         }
      
//         render() {
//   return (
//     <div className=" box-gestionuser">
//         <Sidebar/>
//       <h1>  Gestion des Clients</h1>
// <div>
// <div className='bodygestionuser'>
//     <table>
//         <thead className='tetetable'>
//             <tr>
//                 <th>Users</th>
//                 <th>Mail</th>
//                 <th>Téléphone Mobile</th>
//             </tr>
//         </thead>
//         <tbody>
//         {allusers?.map((data) => (
//             <tr>
//                 <td data-label="Utilisateur">{ data?.name}</td>
//                 <td data-label="email">{data?.email}</td>
//                 <td data-label="Téléphone Mobile">{data?.mobile}</td>
//             </tr>
//         ))}
//         </tbody>
//     </table>
// </div>
  
  
//    </div>


//     </div>
//   )
// }

// export default GestionUser






