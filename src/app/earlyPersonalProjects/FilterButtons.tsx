import { useState } from 'react';

interface FilterButtonProps {
  name: string;
  handleFilterTextChange: (e: any) => void
}

const FilterSingleButton: React.FC<FilterButtonProps> = ({ name, handleFilterTextChange }) => {
  return (
    <>
      <input
        type="button"
        placeholder={name}
        value={name}
        onClick={handleFilterTextChange}
      />
    </>
  );
};
const FilterButtonList: React.FC<{ handleFilterTextChange: (e: any) => void }> = ({ handleFilterTextChange }) => {
  const buttonItems = [
    "Team Works",
    "Personal Projects",
    "Front End Tests",
    "Etc",
  ];
  return (
    <>
      {buttonItems.map((name) => (
        <FilterSingleButton
          key={name}
          name={name}
          handleFilterTextChange={handleFilterTextChange}
        />
      ))}
      <input
        type="button"
        placeholder="See All"
        value=""
        onClick={handleFilterTextChange}
      />
      <label>See All</label>
    </>
  );
};

export default function FilterButtons({ ...props }) {
  // eslint-disable-next-line
  const [value, setValue] = useState(props);
  const handleFilterTextChange = (e: any) => {
    setValue(e.target.value);
    props.onFilterTextChange(e.target.value);
  };
  return (
    <form>
      <FilterButtonList handleFilterTextChange={handleFilterTextChange} />
    </form>
  );
};