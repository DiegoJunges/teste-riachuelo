import { useTheme } from '../../context/theme';

const Books = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <button type="button" onClick={handleToggleTheme}>
      test
    </button>
  );
};

export default Books;
