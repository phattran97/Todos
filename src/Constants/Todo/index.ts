export const Status = [
  {name: 'Incomplete', value:'incomplete'},
  {name: "Completed", value: "completed"}
]

export enum STATUS_ENUM {
  incomplete= "incomplete",
  completed= 'completed'
}

export const getIndexPage = (page: number, per_page: number, length: number) => {
  if (page && per_page && length) {
      const from = page * per_page - per_page + 1;
      const to = length + per_page * (page - 1);
      return from + '-' + to;
  } else return '0-0';
};
