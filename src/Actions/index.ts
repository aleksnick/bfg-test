export { Init } from "./Init";
export { SetData } from "./SetData";
export { SetDate } from "./SetDate";
export { SetScore } from "./SetScore";

import { IInit } from "./Init";
import { ISetData } from "./SetData";
import { ISetDate } from "./SetDate";
import { ISetScore } from "./SetScore";

export type Actions = IInit | ISetData | ISetDate | ISetScore;