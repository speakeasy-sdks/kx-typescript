/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

export type Paginator<Result> = () => Promise<PageIterator<Result>> | null;

export type PageIterator<Result> = Result & {
  next: Paginator<Result>;
  [Symbol.asyncIterator]: () => AsyncIterableIterator<Result>;
};

export function createPageIterator<Result>(
  page: Result & { next: Paginator<Result> },
): { [Symbol.asyncIterator]: () => AsyncIterableIterator<Result> } {
  return {
    [Symbol.asyncIterator]: async function* paginator() {
      yield page;

      let p: typeof page | null = page;
      for (p = await p.next(); p != null; p = await p.next()) {
        yield p;
      }
    },
  };
}
