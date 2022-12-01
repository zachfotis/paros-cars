import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function PlaceInput({ data, label, id }) {
  const [place, setPlace] = useState(data.length > 0 && (data[0]?.name || 'No Places'));

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        value={place}
        onChange={(e) => {
          setPlace(e.target.value);
        }}
        input={<OutlinedInput label={label} />}
      >
        {data?.map((place) => (
          <MenuItem key={place.id} value={place.name}>
            {place.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default PlaceInput;
