import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterSection({ filters, setFilters, groupName, options = [] }) {

  const smallerCase = groupName.toLowerCase()
  const Section = () => {
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{groupName}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="All"
          name="radio-buttons-group"
          value={filters[smallerCase]}
          onChange={(e) => {
            setFilters({ ...filters, [smallerCase]: e.target.value })
          }}
        >
          {options.map((option) => {
            return (
              <FormControlLabel value={option} control={<Radio />} label={option}


              />
            )
          }
          )}

          {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
    )

  }

  return (
    <Section />
  );
}