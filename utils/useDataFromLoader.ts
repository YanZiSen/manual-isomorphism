import { LoaderFunction, useLoaderData } from "react-router";

export function useDataFromLoader<T extends LoaderFunction>(loaderFn: T) {
  return useLoaderData() as Awaited<ReturnType<typeof loaderFn>>;
}
