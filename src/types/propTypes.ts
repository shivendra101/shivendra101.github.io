export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export type TerminalIntroProps = {
    toggleTerminal: () => void;
};

export type TerminalButtonProps = {
    toggleTerminal: () => void;
    text: string;
    size: ButtonSize
};

export type TerminalBodyProps = {
    showIntro: boolean;
    toggleTerminal: () => void;
};

export type TerminalContentProps = {
    toggleTerminal: () => void;
};