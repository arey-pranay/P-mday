import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import { app } from "./Firebase";
import React from "react";

const RealTimeDB = () => {
  const db = getDatabase(app);
  const putData = (key, data) => {
    set(ref(db, key), data);
  };
  const getData = (key, parameter) => {
    get(child(ref(db), key)).then((snapshot) => {
      console.log(snapshot.val());
    });
  };

  const refreshFor = (dependsOn) => {
    onValue(ref(db, dependsOn), (snapshot) => console.log(snapshot.val()));
  };
  // get(child(ref(db), "users/pranay")).then((snapshot) => {
  //   console.log(snapshot.val().age);
  // });
  return (
    <div className="App">
      Hii Firebase User You hehehe <br />
      <button className="bg-lime-500" onClick={putData("a/b", { id: 1 })}>
        Put It Into the db
      </button>
      <button className="bg-yellow-800" onClick={getData("a")}>
        Get It From the db
      </button>
      <button className="bg-sky-500" onClick={refreshFor("*")}>
        Refresh in Real Time
      </button>
    </div>
  );
};

export default RealTimeDB;
