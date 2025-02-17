import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <p className="text-3xl">404</p>
        <p className="flex flex-col items-center gap-y-1">
          <span className="text-xl font-medium">Something went wrong</span>

          <span className="text-muted-fg dark:text-muted-fg-dark">
            Sorry, we couldn't find your page
          </span>
        </p>

        <Link to="/" className="link-underscore">
          <span className="text-primary">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
