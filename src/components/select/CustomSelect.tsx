import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React from "react";

// interfaces
interface customSlectProps {
  options: string[];
  defaultOption: string;
  optionChange: (val: string) => void;
}

const CustomSelect: React.FC<customSlectProps> = ({
  options,
  defaultOption,
  optionChange,
}) => {
  // functions

  const handleSelectChange = (event: SelectChangeEvent) => {
    optionChange && optionChange(event.target.value as string);
  };
  return (
    <FormControl sx={{ width: "200px" }}>
      <InputLabel sx={{ color: "text.primary" }}>Select Time Period</InputLabel>
      <Select
        value={defaultOption}
        className="outlined-gradient"
        onChange={(e) => handleSelectChange(e)}
      >
        {options?.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
