import CloseIcon from "@/assets/icons/CloseIcon";

interface FilterProps {
  filter: string;
  onClear: () => void;
}

const Filter = ({ filter, onClear }: FilterProps) => {
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-primary px-2 py-1">
      <p className="text-accent">{filter}</p>
      <button
        onClick={onClear}
        className="cursor-pointer text-light transition-colors hover:text-destructive"
      >
        <CloseIcon width={16} height={16} strokeWidth={6} />
      </button>
    </div>
  );
};

export default Filter;
