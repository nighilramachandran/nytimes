import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

// interfaces
export interface customSlectProps {
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
    <FormControl sx={{ width: "200px" }} data-testid="form-control-select">
      <InputLabel
        sx={{ color: "text.primary" }}
        data-testid="form-control-label"
      >
        Select Time Period
      </InputLabel>
      <Select
        value={defaultOption}
        className="outlined-gradient"
        onChange={(e) => handleSelectChange(e)}
        data-testid="form-control-select"
      >
        {options?.map((option, index) => {
          return (
            <MenuItem
              key={option}
              value={option}
              data-testid={`"form-control-select-menu-item-${index}"`}
            >
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
