import { ComputedRef } from 'vue';
import { TypewriterInstance, TypingConfig } from '../Typewriter/types.d.ts';
import { BubbleProps } from './types.d.ts';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        avatar?(_: {}): any;
        header?(_: {}): any;
        content?(_: {}): any;
        loading?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        typewriterRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../Typewriter/types.d.ts').TypewriterProps> & Readonly<{
            onStart?: ((instance: TypewriterInstance) => any) | undefined;
            onWriting?: ((instance: TypewriterInstance) => any) | undefined;
            onFinish?: ((instance: TypewriterInstance) => any) | undefined;
        }>, {
            interrupt: () => void;
            continue: () => void;
            restart: () => void;
            destroy: () => void;
            renderedContent: ComputedRef<string>;
            isTyping: Ref<boolean>;
            progress: ComputedRef<number>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            start: (instance: TypewriterInstance) => any;
            writing: (instance: TypewriterInstance) => any;
            finish: (instance: TypewriterInstance) => any;
        }, import('vue').PublicProps, {
            content: string;
            isMarkdown: boolean;
            typing: boolean | TypingConfig;
            isFog: boolean | import('../Typewriter/types.d.ts').TypingFogfig;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            typeWriterRef: HTMLDivElement;
            markdownContentRef: HTMLDivElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../Typewriter/types.d.ts').TypewriterProps> & Readonly<{
            onStart?: ((instance: TypewriterInstance) => any) | undefined;
            onWriting?: ((instance: TypewriterInstance) => any) | undefined;
            onFinish?: ((instance: TypewriterInstance) => any) | undefined;
        }>, {
            interrupt: () => void;
            continue: () => void;
            restart: () => void;
            destroy: () => void;
            renderedContent: ComputedRef<string>;
            isTyping: Ref<boolean>;
            progress: ComputedRef<number>;
        }, {}, {}, {}, {
            content: string;
            isMarkdown: boolean;
            typing: boolean | TypingConfig;
            isFog: boolean | import('../Typewriter/types.d.ts').TypingFogfig;
        }> | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BubbleProps, {
    interrupt: () => void;
    continue: () => void;
    restart: () => void;
    destroy: () => void;
    renderedContent: ComputedRef<string>;
    isTyping: Ref<boolean>;
    progress: ComputedRef<number>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    start: (...args: any[]) => void;
    writing: (...args: any[]) => void;
    finish: (...args: any[]) => void;
    avatarError: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<BubbleProps> & Readonly<{
    onStart?: ((...args: any[]) => any) | undefined;
    onWriting?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
    onAvatarError?: ((...args: any[]) => any) | undefined;
}>, {
    maxWidth: string;
    noStyle: boolean;
    content: string;
    reasoning_content: string;
    placement: "start" | "end";
    avatar: string;
    variant: "filled" | "borderless" | "outlined" | "shadow";
    avatarSize: string;
    avatarGap: string;
    avatarShape: "circle" | "square";
    avatarIcon: string;
    avatarSrcSet: string;
    avatarAlt: string;
    avatarFit: "cover" | "contain" | "fill" | "none" | "scale-down";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    typewriterRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../Typewriter/types.d.ts').TypewriterProps> & Readonly<{
        onStart?: ((instance: TypewriterInstance) => any) | undefined;
        onWriting?: ((instance: TypewriterInstance) => any) | undefined;
        onFinish?: ((instance: TypewriterInstance) => any) | undefined;
    }>, {
        interrupt: () => void;
        continue: () => void;
        restart: () => void;
        destroy: () => void;
        renderedContent: ComputedRef<string>;
        isTyping: Ref<boolean>;
        progress: ComputedRef<number>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        start: (instance: TypewriterInstance) => any;
        writing: (instance: TypewriterInstance) => any;
        finish: (instance: TypewriterInstance) => any;
    }, import('vue').PublicProps, {
        content: string;
        isMarkdown: boolean;
        typing: boolean | TypingConfig;
        isFog: boolean | import('../Typewriter/types.d.ts').TypingFogfig;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        typeWriterRef: HTMLDivElement;
        markdownContentRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('../Typewriter/types.d.ts').TypewriterProps> & Readonly<{
        onStart?: ((instance: TypewriterInstance) => any) | undefined;
        onWriting?: ((instance: TypewriterInstance) => any) | undefined;
        onFinish?: ((instance: TypewriterInstance) => any) | undefined;
    }>, {
        interrupt: () => void;
        continue: () => void;
        restart: () => void;
        destroy: () => void;
        renderedContent: ComputedRef<string>;
        isTyping: Ref<boolean>;
        progress: ComputedRef<number>;
    }, {}, {}, {}, {
        content: string;
        isMarkdown: boolean;
        typing: boolean | TypingConfig;
        isFog: boolean | import('../Typewriter/types.d.ts').TypingFogfig;
    }> | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
