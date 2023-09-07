type ApiInit = {
  status: 'init';
};

type ApiLoading<T>  = {
  status: 'loading';
  payload: T;
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
  ApiInit
  | ApiLoading<T>
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
