import IconButton from "../IconButton";

import ArrowIcon from "@/assets/icons/ArrowIcon";

interface PaginationProps {
  currentPage: number;
  isNextBtnDisabled?: boolean;
  onPageChange: (navDirection: "prev" | "next") => void;
}

const Pagination = ({ currentPage, isNextBtnDisabled = false, onPageChange }: PaginationProps) => {
  return (
    <div className="inline-flex items-center justify-center rounded-md py-1 text-fg dark:text-fg-dark">
      <div>
        <IconButton onClick={() => onPageChange("prev")} disabled={currentPage === 1}>
          <ArrowIcon arrowDirection="left" />
        </IconButton>
      </div>

      <p className="flex min-w-10 justify-center font-medium">{currentPage}</p>

      <div>
        <IconButton onClick={() => onPageChange("next")} disabled={isNextBtnDisabled}>
          <ArrowIcon arrowDirection="right" />
        </IconButton>
      </div>
    </div>
  );
};

export default Pagination;
