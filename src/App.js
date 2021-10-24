import { useState } from "react";
import "./styles.css";

export default function App() {
  const hanldeChnage = (e) => {
    SetUser({
      id: Math.random(),
      firstname: `${e.target.value}`,
      email: `${e.target.value}@gmail.com`,
      checked: false
    });
  };
  const handleclick = () => {
    const [...newdata] = data;
    newdata.push(user);
    SetData(newdata);
  };

  const handledeleteclick = (id) => {
    const [...newdata] = data;
    const deletedarray = newdata.filter((x) => x.id !== id);
    SetData(deletedarray);
  };
  const handleChangecheck = (item) => {
    //console.log(item);
    const [...newdata] = data;
    newdata.find((x) => x.id === item.id).checked = !item.checked;
    SetData(newdata);
  };
  const [user, SetUser] = useState({});
  const [data, SetData] = useState([
    { id: "1 ", firstname: "mark", email: "mark@gmail.com", checked: false },
    { id: "2 ", firstname: "jack", email: "jack@gmail.com", checked: false },
    { id: "3 ", firstname: "lehel", email: "lehel@gmail.com", checked: false },
    { id: "4 ", firstname: "fred", email: "fred@gmail.com", checked: false }
  ]);

  return (
    <div className="App">
      <h1>Reno run</h1>
      <input onChange={(e) => hanldeChnage(e)} />
      <button onClick={() => handleclick()}>add user</button>

      {data
        ? data.map((x) => {
            return (
              <ul key={x.id}>
                <li>
                  <input
                    type="checkbox"
                    checked={x.checked}
                    onChange={() => handleChangecheck(x)}
                  />

                  <span className={`${x.checked ? "check" : "null"}`}>
                    {x.firstname} {x.email}
                  </span>
                  <button onClick={() => handledeleteclick(x.id)}>
                    delete
                  </button>
                </li>
              </ul>
            );
          })
        : null}
    </div>
  );
}
