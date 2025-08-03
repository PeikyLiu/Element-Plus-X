import { FilesCardProps } from './types.d.ts';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {
            item: Readonly<{
                noStyle: boolean;
            }> & {
                readonly uid: string | number | undefined;
                readonly name: string | undefined;
                readonly fileSize: number | undefined;
                readonly fileType: import('./types.d.ts').FilesType | undefined;
                readonly description: string | undefined;
                readonly url: string | undefined;
                readonly thumbUrl: string | undefined;
                readonly imgFile: File | Blob | undefined;
                readonly iconSize: string;
                readonly iconColor: string | undefined;
                readonly showDelIcon: boolean;
                readonly maxWidth: string;
                readonly style: import('vue').CSSProperties | undefined;
                readonly hoverStyle: any;
                readonly imgVariant: "rectangle" | "square";
                readonly imgPreview: boolean;
                readonly imgPreviewMask: boolean;
                readonly status: "done" | "error" | "uploading" | undefined;
                readonly percent: any;
                readonly errorTip: string | undefined;
            } & {
                readonly showDelIcon: boolean;
                readonly noStyle: boolean;
                readonly hoverStyle: boolean | undefined;
                readonly imgPreview: boolean;
                readonly imgPreviewMask: boolean;
                readonly percent: boolean | undefined;
            };
        }): any;
        'image-preview-actions'?(_: {
            item: {
                prefix: string;
                suffix: string;
                noStyle: boolean;
                uid: string | number | undefined;
                name: string | undefined;
                fileSize: number | undefined;
                fileType: import('./types.d.ts').FilesType | undefined;
                description: string | undefined;
                url: string | undefined;
                thumbUrl: string | undefined;
                imgFile: File | Blob | undefined;
                iconSize: string;
                iconColor: string | undefined;
                showDelIcon: boolean;
                maxWidth: string;
                style: import('vue').CSSProperties | undefined;
                hoverStyle: any;
                imgVariant: "rectangle" | "square";
                imgPreview: boolean;
                imgPreviewMask: boolean;
                status: "done" | "error" | "uploading" | undefined;
                percent: any;
                errorTip: string | undefined;
            };
        }): any;
        content?(_: {
            item: Readonly<{
                noStyle: boolean;
            }> & {
                readonly uid: string | number | undefined;
                readonly name: string | undefined;
                readonly fileSize: number | undefined;
                readonly fileType: import('./types.d.ts').FilesType | undefined;
                readonly description: string | undefined;
                readonly url: string | undefined;
                readonly thumbUrl: string | undefined;
                readonly imgFile: File | Blob | undefined;
                readonly iconSize: string;
                readonly iconColor: string | undefined;
                readonly showDelIcon: boolean;
                readonly maxWidth: string;
                readonly style: import('vue').CSSProperties | undefined;
                readonly hoverStyle: any;
                readonly imgVariant: "rectangle" | "square";
                readonly imgPreview: boolean;
                readonly imgPreviewMask: boolean;
                readonly status: "done" | "error" | "uploading" | undefined;
                readonly percent: any;
                readonly errorTip: string | undefined;
            } & {
                readonly showDelIcon: boolean;
                readonly noStyle: boolean;
                readonly hoverStyle: boolean | undefined;
                readonly imgPreview: boolean;
                readonly imgPreviewMask: boolean;
                readonly percent: boolean | undefined;
            };
        }): any;
        'name-prefix'?(_: {
            item: {
                prefix: string;
                suffix: string;
                noStyle: boolean;
                uid: string | number | undefined;
                name: string | undefined;
                fileSize: number | undefined;
                fileType: import('./types.d.ts').FilesType | undefined;
                description: string | undefined;
                url: string | undefined;
                thumbUrl: string | undefined;
                imgFile: File | Blob | undefined;
                iconSize: string;
                iconColor: string | undefined;
                showDelIcon: boolean;
                maxWidth: string;
                style: import('vue').CSSProperties | undefined;
                hoverStyle: any;
                imgVariant: "rectangle" | "square";
                imgPreview: boolean;
                imgPreviewMask: boolean;
                status: "done" | "error" | "uploading" | undefined;
                percent: any;
                errorTip: string | undefined;
            };
        }): any;
        'name-suffix'?(_: {
            item: {
                prefix: string;
                suffix: string;
                noStyle: boolean;
                uid: string | number | undefined;
                name: string | undefined;
                fileSize: number | undefined;
                fileType: import('./types.d.ts').FilesType | undefined;
                description: string | undefined;
                url: string | undefined;
                thumbUrl: string | undefined;
                imgFile: File | Blob | undefined;
                iconSize: string;
                iconColor: string | undefined;
                showDelIcon: boolean;
                maxWidth: string;
                style: import('vue').CSSProperties | undefined;
                hoverStyle: any;
                imgVariant: "rectangle" | "square";
                imgPreview: boolean;
                imgPreviewMask: boolean;
                status: "done" | "error" | "uploading" | undefined;
                percent: any;
                errorTip: string | undefined;
            };
        }): any;
        description?(_: {
            item: {
                prefix: string;
                suffix: string;
                noStyle: boolean;
                uid: string | number | undefined;
                name: string | undefined;
                fileSize: number | undefined;
                fileType: import('./types.d.ts').FilesType | undefined;
                description: string | undefined;
                url: string | undefined;
                thumbUrl: string | undefined;
                imgFile: File | Blob | undefined;
                iconSize: string;
                iconColor: string | undefined;
                showDelIcon: boolean;
                maxWidth: string;
                style: import('vue').CSSProperties | undefined;
                hoverStyle: any;
                imgVariant: "rectangle" | "square";
                imgPreview: boolean;
                imgPreviewMask: boolean;
                status: "done" | "error" | "uploading" | undefined;
                percent: any;
                errorTip: string | undefined;
            };
        }): any;
        'del-icon'?(_: {
            item: Readonly<{
                noStyle: boolean;
            }> & {
                readonly uid: string | number | undefined;
                readonly name: string | undefined;
                readonly fileSize: number | undefined;
                readonly fileType: import('./types.d.ts').FilesType | undefined;
                readonly description: string | undefined;
                readonly url: string | undefined;
                readonly thumbUrl: string | undefined;
                readonly imgFile: File | Blob | undefined;
                readonly iconSize: string;
                readonly iconColor: string | undefined;
                readonly showDelIcon: boolean;
                readonly maxWidth: string;
                readonly style: import('vue').CSSProperties | undefined;
                readonly hoverStyle: any;
                readonly imgVariant: "rectangle" | "square";
                readonly imgPreview: boolean;
                readonly imgPreviewMask: boolean;
                readonly status: "done" | "error" | "uploading" | undefined;
                readonly percent: any;
                readonly errorTip: string | undefined;
            } & {
                readonly showDelIcon: boolean;
                readonly noStyle: boolean;
                readonly hoverStyle: boolean | undefined;
                readonly imgPreview: boolean;
                readonly imgPreviewMask: boolean;
                readonly percent: boolean | undefined;
            };
        }): any;
    };
    refs: {
        imgRef: unknown;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FilesCardProps, {
    namePrefix: globalThis.ComputedRef<string>;
    nameSuffix: globalThis.ComputedRef<string>;
    colorMap: Record<import('./types.d.ts').FilesType, string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    delete: (...args: any[]) => void;
    imagePreview: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<FilesCardProps> & Readonly<{
    onDelete?: ((...args: any[]) => any) | undefined;
    onImagePreview?: ((...args: any[]) => any) | undefined;
}>, {
    style: import('vue').CSSProperties;
    uid: string | number;
    name: string;
    fileSize: number;
    fileType: import('./types.d.ts').FilesType;
    description: string;
    url: string;
    thumbUrl: string;
    imgFile: File | Blob;
    iconSize: string;
    iconColor: string;
    showDelIcon: boolean;
    maxWidth: string;
    hoverStyle: CSSPropertiess;
    imgVariant: "rectangle" | "square";
    imgPreview: boolean;
    imgPreviewMask: boolean;
    status: "uploading" | "done" | "error";
    percent: numbe;
    errorTip: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    imgRef: unknown;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
