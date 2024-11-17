interface SelectionProps {
  className?: string;
  options: Array<{ name: string; isSelected: boolean; onClick: () => void }>;
}

const Selection = ({ className, options }: SelectionProps) => {
  return (
    <div className={className || "flex flex-col space-y-2"}>
      {options.map((option) => {
        return (
          <button
            className={`w-full p-2 rounded ${
              option.isSelected
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
            onClick={option.onClick}
            key={option.name}
          >
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default Selection;
