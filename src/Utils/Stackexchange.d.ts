export type onInit = () => void;

export function init(onInit: onInit): void;

export interface authData {
  accessToken: string;
}

export type onAuth = (data: authData) => void;

export function auth(onAuth: onAuth): void;
