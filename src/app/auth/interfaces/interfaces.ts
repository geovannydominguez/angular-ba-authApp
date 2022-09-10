export interface AuthResponse {
    ok: boolean;
    uid?: string; // '?' significa opcional
    name?: string;
    token?: string;
    msg?: string;
    email?: string;
}

export interface Usuario {
    uid: string;
    name: string;
    email: string;
}

export interface User {
    email: string;
    password: string;
    showPassword: boolean;
    code: string;
    name: string;
  }