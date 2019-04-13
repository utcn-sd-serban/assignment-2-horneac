import React from "react";

const UserList = ({users, title, onCreate, onChange,
     newUserName, newUserPassword}) => (
  
    <div className="hero">
        <h1 className="hero is-primary">{title || "Users"}</h1>
        <div>
            <label> UserName:</label>
            <input value={newUserName} onChange={ e => onChange("userName", e.target.value)}/>
            <br />
            <label> password:</label>
            <input value={newUserPassword} onChange={ e => onChange("password", e.target.value)}/>
            <br />
            <button onClick={onCreate}>Create!</button>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index) => (
                        <tr key = {index}>
                            <td>{user.userName}</td>
                            <td>{ user.password}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
);

export default UserList;