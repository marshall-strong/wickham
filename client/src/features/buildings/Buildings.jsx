import React from "react";
import List from "../lists/List";

export const Building = ({ building }) => {
  return (
    <article className="p-4 flex space-x-4">
      <img
        // src={building.image}
        alt=""
        className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
        width="144"
        height="144"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5">
          {building.name}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre"></dl>
      </div>
    </article>
  );
};

export const Buildings = ({ buildings }) => {
  const mainBarn = { id: 1, name: "Main Barn" };
  const foodBarn = { id: 2, name: "Food Barn" };
  const cornBarn = { id: 3, name: "Corn Barn" };
  const shadeBarn = { id: 4, name: "Shade Barn" };
  const csaBarn = { id: 5, name: "CSA Barn" };
  const shakeupTruck = { id: 6, name: "Shakeup Truck" };
  const smokeShack = { id: 7, name: "Smoke Shack" };
  const grillShack = { id: 8, name: "Grill Shack" };

  const buildingSeeds = [
    mainBarn,
    foodBarn,
    cornBarn,
    shadeBarn,
    csaBarn,
    shakeupTruck,
    smokeShack,
    grillShack,
  ];

  return (
    <div className="divide-y divide-gray-100">
      <List>
        {buildingSeeds.map((building) => (
          <Building key={building.id} building={building} />
        ))}
      </List>
    </div>
  );
};
