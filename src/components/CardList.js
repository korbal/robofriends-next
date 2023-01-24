import Card from "./Card";
import Link from "next/link";
import { useState, useEffect } from "react";

const Cardlist = ({ robots, searchValue}) => {
const [filteredRobots, setFilteredRobots] = useState(robots);


useEffect(() => {
  if (robots) {
    setFilteredRobots(robots.filter(robot => robot.name.toLowerCase().includes(searchValue.toLowerCase())));
  }
}, [searchValue, robots]);




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
