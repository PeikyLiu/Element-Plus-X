import { MentionOption, MentionSenderProps } from './types.d.ts';
declare function openHeader(): false | undefined;
declare function closeHeader(): void;
declare function startRecognition(): void;
declare function stopRecognition(): void;
declare function submit(): void;
declare function cancel(): void;
declare function clear(): void;
declare function blur(): false | undefined;
declare function focus(type?: string): false | undefined;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<Record<string, any>> & Record<string, any>;
    refs: {
        senderRef: HTMLDivElement;
        inputRef: unknown;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<MentionSenderProps, {
    openHeader: typeof openHeader;
    closeHeader: typeof closeHeader;
    clear: typeof clear;
    blur: typeof blur;
    focus: typeof focus;
    submit: typeof submit;
    cancel: typeof cancel;
    startRecognition: typeof startRecognition;
    stopRecognition: typeof stopRecognition;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    search: (...args: any[]) => void;
    select: (...args: any[]) => void;
    cancel: (...args: any[]) => void;
    submit: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    recordingChange: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<MentionSenderProps> & Readonly<{
    onSearch?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRecordingChange?: ((...args: any[]) => any) | undefined;
}>, {
    options: MentionOption[];
    variant: "default" | "updown";
    modelValue: string;
    placeholder: string;
    inputStyle: string | CSSProperties | CSSProperties[] | string[];
    submitType: "enter" | "shiftEnter";
    autoSize: {
        minRows: number;
        maxRows: number;
    };
    headerAnimationTimer: number;
    inputWidth: string;
    showUpdown: boolean;
    triggerStrings: string[];
    triggerPopoverOffset: number;
    triggerPopoverPlacement: "bottom" | "top";
    submitBtnDisabled: boolean;
    filterOption: (pattern: string, option: MentionOption) => boolean;
    whole: boolean;
    checkIsWhole: (pattern: string, prefix: string) => boolean;
    triggerLoading: boolean;
    triggerSplit: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    senderRef: HTMLDivElement;
    inputRef: unknown;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
