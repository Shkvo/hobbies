export const getLastItem = (data: Array<any>, field: string) => {
  let lastItem = -1;

  if (data && data.length) {
    lastItem = Math.max.apply(Math, data.map((item: any) => item[field]));
  }

  return lastItem;
};
