declare module 'typescript-rtti' {
    export interface PropertyDescriptor {
        name: string,
        type: 'string' | 'number' | 'object',
        reflect?: any,
        constructor?: any,
        array?: boolean,
        enum?: boolean
    }
}
