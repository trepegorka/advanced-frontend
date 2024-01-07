declare module '*.module.scss';

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
