declare module 'typescript-rtti' {

    export interface TypeDescriptor {
        name: 'string' | 'number' | 'object',
        reflect?: any,
        constructor?: any,
        array?: boolean,
        enum?: boolean
    }

    export interface PropertyDescriptor {
        name: string,
        type: TypeDescriptor;
    }

    export interface ParameterDescriptor {
        name: string;
        type: TypeDescriptor;
    }

    export interface MethodDescriptor {
        name: string,
        returnType: TypeDescriptor,
        parameters: ParameterDescriptor[]
    }
}
