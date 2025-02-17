import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getFriendlyErrorMessage = (status: number): string => {
  switch (status) {
    case 400:
      return "Invalid request. Please check your input.";
    case 401:
      return "Session expired. Please log in again.";
    case 403:
      return "Access denied.";
    case 404:
      return "Resource not found.";
    case 429:
      return "Too many requests. Try again later.";
    case 500:
      return "Server error. Please try again.";
    case 503:
      return "Service is unavailable. Try again later.";
    default:
      return "Something went wrong..";
  }
};

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === "object" && error !== null && "status" in error;
};
