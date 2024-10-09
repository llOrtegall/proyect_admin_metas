import { useTheme } from '../contexts/ThemeProvider';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default ThemeToggle;