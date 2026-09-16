import { useState } from "react";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { TextMorph } from "./text-morph";

type CopyButtonProps = {
  content: string;
  className?: string;
  showText?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CopyButton({
  content,
  className,
  showText = true,
  ...props
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Ignore error
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`type-body-md ${showText ? "h-7 px-2" : "size-7"} text-content-secondary hover:bg-fill-strong hover:text-content-primary flex items-center justify-center gap-1 rounded-lg border border-transparent transition-[background-color,color] duration-150 ease-out ${className}`}
      aria-label="Copy to clipboard"
      {...props}
    >
      {showText ? (
        <div className="flex w-[70px] items-center justify-center text-sm font-medium">
          <TextMorph>{isCopied ? "Copied" : "Copy"}</TextMorph>
        </div>
      ) : isCopied ? (
          <CheckIcon className="size-4" aria-hidden="true" />
        ) : (
          <DocumentDuplicateIcon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
