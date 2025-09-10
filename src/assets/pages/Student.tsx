import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const name = searchParams.get("studentName");

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchParams({ studentName: inputValue });
    } else {
      setSearchParams({});
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
      <h1>Tên: {name}</h1>
    </div>
  );
}
