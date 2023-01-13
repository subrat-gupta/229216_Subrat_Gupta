import {useState,useEffect} from 'react';
import Listservices from './Listservices';

const List=()=>{
    let[playarr,setplayarr]=useState([]);

    useEffect(()=>{
        Listservices.getPlayers().then((result)=>{
            console.log(result.data);
            setplayarr(result.data);

        }).catch((err)=>{console.log("error occured",err)});

    },[]);

    const renderList=()=>{
        return playarr.map((player)=>{
            return <tr key={player.id}><td>{player.id}</td><td>{player.name}</td><td>{player.matches}</td><td>{player.city}</td></tr>        
        });
        
    }
    return(
        <div>
            <table border="2">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Matches</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}
export default List;