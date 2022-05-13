import { PropType } from 'vue';
import { TSize } from '@/sizes';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<TSize>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCaps: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<TSize>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCaps: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    flat: boolean;
    label: string;
    size: TSize;
    color: string;
    textColor: string;
    rounded: boolean;
    ripple: boolean;
    noCaps: boolean;
    disabled: boolean;
}>;
export default _default;
import { ComputedRef } from 'vue';
export declare type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
declare const sizes: Record<TSize, number>;
declare const fontSizes: Record<TSize, number>;
export declare function useSize(size: TSize): ComputedRef<{
    fontSize: string;
    padding: string;
}>;
export { sizes, fontSizes };
