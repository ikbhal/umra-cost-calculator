import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  var intialCost = 100000;
  var [cost,setCost] = useState(intialCost);
  var [daySaving, setDaySaving] = useState(intialCost/365);
  var [weekSaving, setWeekSaving] = useState(intialCost/52);
  var [monthSaving, setMonthSaving] = useState(intialCost/12);

  const initialYears = 34;
  var [years, setYears] = useState(initialYears);// max 70-34 , 36 current year now Md iqbal, on sep 2022
  var [totalYearsCost, setTotalYearsCost] = useState(initialYears * cost);
  useEffect( () => {
    // day saving

    var temp = cost/365 ||0;
    temp = temp.toFixed(2)
    setDaySaving(temp);

    // week saving
    temp = cost/52 ||0;
    temp = temp.toFixed(2);
    setWeekSaving(temp);

    // month saving
    temp = cost/12 ||0;
    temp = temp.toFixed(2);
    setMonthSaving(temp);

  }, [cost]);

  // recaculate total year cost chagne on cost or years change
  useEffect( () => {
    console.log("years:", years, "cost:", cost);
    var temp = cost * years;
    temp = temp.toFixed(2);
    console.log("temp: ", temp);
    setTotalYearsCost(temp);
  },[cost, years]);

  return (
    <div className="App">
      <h1>Umra Cost Calculator</h1>
      <p>Travel, Visa, Hotel, Food, Internal travel(bus/cab), 
        buying( dates, ZamZam, dresses, tasbies, zaninamaaz, gold, burkhe, kids)</p>
      <hr/>
      <form>
        Umra cost: <input type="number" name="cost" value={cost}
          onChange = {e=> setCost(e.target.value)}
        />
        <br/>

        Total Years: <input type="number" name="cost" value={years}
          onChange = {e=> setYears(e.target.value)}
        />
        <br/>


      </form>

      <h2>Saving </h2>
      <p> Day: {daySaving}</p>
      <p> Week: {weekSaving} </p>
      <p> month: {monthSaving}</p>

      <h2>Over all Cost( for all years)</h2>
      <p>Total {years} cost: {totalYearsCost} </p>
    </div>
  );
}

export default App;
