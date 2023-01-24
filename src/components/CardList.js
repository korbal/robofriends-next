import Card from "./Card";
import Link from "next/link";
import { useState, useEffect } from "react";

const Cardlist = ({ robots, searchValue}) => {
// creating the filteredrobots state. changes when searchValue changes or robots changes
const [filteredRobots, setFilteredRobots] = useState(robots);
useEffect(() => {
  if (robots) {
    setFilteredRobots(robots.filter(robot => robot.name.toLowerCase().includes(searchValue.toLowerCase())));
  }
}, [searchValue, robots]);

// returning the filtered robots via the Card component
return (
<div>
{
filteredRobots.map((robot, i) => {
return (
<Card
           id={robot.id}
           name={robot.name}
           email={robot.email}
           key={robot.id}
         />
);
})
}
</div>
);
};

export default Cardlist;
