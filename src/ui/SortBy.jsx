import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Select
        value={sortBy}
        onChange={handleChange}
        options={options}
        type="white"
      />
    </div>
  );
}

export default SortBy;
