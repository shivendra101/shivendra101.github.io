export type WindowWrapperProps = {
    view: string; // You can restrict this to specific strings like "terminal" | "editor" if needed
};
  
export type WindowHeaderProps = {
    handleRef: React.RefObject<HTMLDivElement>;
    toggleFullScreen: () => void;
};
  
export type WindowBodyProps = {
view: string;
};