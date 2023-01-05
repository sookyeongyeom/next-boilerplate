declare namespace RequestAuth {
  type PostLogin = {
    id: string;
    password: string;
  };
}

declare namespace ResponseAuth {
  type PostLogin = {
    accessToken: string;
  };
}
