export interface Change  {
    typeChange: string,
    value: string | number | any,
    key: string | number,
    payload?: any,
}