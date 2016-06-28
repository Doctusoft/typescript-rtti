declare module 'typescript-rtti' {
    interface TypeDescriptor {
        name: 'string' | 'number' | 'object';
        reflect?: any;
        constructor?: any;
        array?: boolean;
        enum?: boolean;
    }
    interface PropertyDescriptor {
        name: string;
        type: TypeDescriptor;
    }
    interface ParameterDescriptor {
        name: string;
        type: TypeDescriptor;
    }
    interface MethodDescriptor {
        name: string;
        returnType: TypeDescriptor;
        parameters: ParameterDescriptor[];
    }
}
