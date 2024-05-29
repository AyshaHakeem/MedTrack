export interface iRegisterFormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export interface iLoginFormData {
  email: string;
  password: string;
}

export interface iAuthToken {
  access_token: string;
}

export interface iUser {
  id: number;
  name: string;
  email: string;
}

export interface iSession {
  token: string;
  user: iUser;
}
