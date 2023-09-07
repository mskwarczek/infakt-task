type ApiLoading = {
  status: 'loading';
};

type ApiFinished<T> = {
  status: 'finished';
  payload: T;
};

type ApiError = {
  status: 'error';
  error: Error;
};

export type ApiType<T> =
  ApiLoading
  | ApiFinished<T>
  | ApiError;

export type AccountantType = {
  cell: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};
