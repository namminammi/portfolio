"use client";
import React, { useState } from "react";
import Link from "next/link";
import FilterButtons from "./FilterButtons";

const styles = require('./earlyPersonalProjects.css');


const ProjectRow = ({ ...props }) => {
  const project = props.project;
  const link_name = project.link_name;
  const website = project.website;
  const desc = project.desc;

  return (
    <div className="shadow-md p-4 bg-white hover:bg-gray-100">
      <Link href={website} target="_blank" rel="noopener noreferrer">
        <h4 className="mb-3 text-2xl font-semibold">{link_name}</h4>
      </Link>
      <div className="description">
        <p>{desc}</p>
      </div>
    </div>
  );
};

const ProjectTable = ({ ...props }) => {
  const filterText = props.filterText;
  const rows: Array<any> = [];

  props.projects.forEach((project: any) => {
    if (project.category.indexOf(filterText) === -1) {
      return;
    }
    rows.push(<ProjectRow project={project} key={project.link_name} />);
  });

  return <div className="container">{rows}</div>;
};


const FilterableProjectTable = ({ ...props }) => {
  const [filterText, setFilterText] = useState(props);
  const handleFilterTextChange = (filterText: any) => {
    setFilterText(filterText);
  };
  return (
    <div className="flex flex-col items-center justify-between">
      <FilterButtons
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
      />
      <ProjectTable projects={props.projects} filterText={filterText} />
    </div>
  );
};

export default FilterableProjectTable;
