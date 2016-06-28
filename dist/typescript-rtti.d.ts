declare module 'typescript-rtti' {
    interface PropertyDescriptor {
        name: string;
        type: 'string' | 'number' | 'object';
        reflect?: any;
        constructor?: any;
        array?: boolean;
        enum?: boolean;
    }
}
