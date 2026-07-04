type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfo = Info & {
  admin: string;
  server: number;
};

export { type Info, type AdminInfo };
