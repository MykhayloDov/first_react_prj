import React, {useState} from "react";
//import {Async} from "react-async";
import "./Users.css"


export default class addItem extends React.Component {
    constructor(props) {
        super(props);

        this.state({
            items:[],
            id: null,
            item: "",
            date: '{}',
            price: null,
            manufacturer: "",
            notes: "",
        })

        const items = [...this.state.items];

        items.push({
            id: this.state.id,
            item: this.state.item,
            date: this.state.date,
            price: this.state.price,
            manufacturer: this.state.manufacturer,
            notes: this.state.notes,
        })


        return (
            <div className="mainAddItemBlock">
                <div className="addItemBlock">
                    <div className="formBlock">
                        <form>
                            <input list="categoryList" suggest/>
                            <datalist id="categoryList">
                                <option>Engine Oil</option>
                                <option>Oil Filter</option>
                                <option>Air filter</option>
                                <option>Fuel Filter</option>
                                <option>Saloon filter</option>
                                <option>Gearbox oil</option>
                                <option>Head lamps</option>
                            </datalist>
                            <br/>
                            <input list="brand" suggest/>
                            <datalist id="brandList">
                                <option>BMW</option>
                                <option>volvo</option>
                                <option>citroen</option>
                                <option>Ford</option>
                                <option>Mercedes</option>
                                <option>Kia</option>
                            </datalist>
                            <br/>
                            <input type="number"/>
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}




// const loadUsers = () => fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json())

// function getUsers() {
//     return (
//         <div className="container">
//             <Async promiseFn={loadUsers}>
//                 {({data, err, isLoading}) => {
//                     if (isLoading) return "Loading..."
//                     if (err) return `Something went wrong: ${err.message}`
//
//                     if (data)
//                         return (
//                             <div>
//                                 <div>
//                                     <h2>React Async - Users</h2>
//                                 </div>
//                                 {console.log(data[0])}
//                                 <p>{data[0].id}</p>
//                                 <p>{data[0].username}</p>
//                                 <p>{data[0].name}</p>
//                                 <p>{data[0].email}</p>
//
//                                 {/*{data.map(lol => (<div key={lol.username}>*/}
//
//                                         {/*<div>*/}
//                                         {/*    <p>{lol.id}</p>*/}
//                                         {/*    <p>{lol.username}</p>*/}
//                                         {/*    <p>{lol.name}</p>*/}
//                                         {/*    /!*<p>{users.email}</p>*!/*/}
//                                         {/*    /!*<p>{users.address.city}</p>*!/*/}
//                                         {/*    /!*{console.log(lol)}*!/*/}
//
//                                         {/*    <br/>*/}
//                                         {/*</div>*/}
//                                 {/*    </div>*/}
//                                 {/*))}*/}
//                             </div>
//                         )
//                 }}
//             </Async>
//         </div>
//     )
// }

// export default getUsers;
