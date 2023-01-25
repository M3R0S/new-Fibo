
export type CopyText = (duration: number) => void;

interface UseCopyTextParams {
    defaultText: string;
    writeText?: string
}

interface UseCopyTextReturn {
    value: string;
    copyText: CopyText;
}

export type UseCopyText = (params: UseCopyTextParams) => UseCopyTextReturn;
