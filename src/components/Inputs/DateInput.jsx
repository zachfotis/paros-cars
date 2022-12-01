import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function DateInput({ label, value, setValue }) {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <FormControl className="m-1 w-[250px] mobile:w-[100%]">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={label}
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
export default DateInput;
