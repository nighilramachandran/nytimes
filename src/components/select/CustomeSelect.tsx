import { Autocomplete, TextField, TextFieldProps } from "@mui/material";
import React from "react";

const CustomSelect: React.FC = () => {
  return (
    <Autocomplete
      fullWidth
      size="small"
      value={"1"}
      onChange={() => null}
      options={["1", "2", "4"]}
      getOptionLabel={() => "null"}
      className="outlined-gradient"
      renderInput={(input) => (
        <TextField
          className="outlined-gradient"
          placeholder={"sdfasdf"}
          {...(input as TextFieldProps)}
        />
      )}
    />
  );
};

export default CustomSelect;
