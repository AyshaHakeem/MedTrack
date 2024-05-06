export interface iRegisterFormData {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
};

export interface iLoginFormData {
  email: string;
  password: string;
};

export interface iAuthToken {
  access_token: string
}