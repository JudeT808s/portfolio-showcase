import { useTheme } from "../components/ThemeContext";

const SkillBadge = ({ skill }) => {
  const { isDarkMode } = useTheme();

  if (!skill) return null;

  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full shadow-sm border 
        ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"}`}
    >
     <a href={skill.link}> <img src={skill.img} alt={skill.name} className="w-6 h-6 object-contain" /></a>
    </div>
  );
};

export default SkillBadge;
