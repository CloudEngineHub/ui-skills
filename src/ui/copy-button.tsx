import { useState } from "react";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

type CopyButtonProps = {
  content: string;
  className?: string;
  showText?: boolean;
  variant?: "ghost" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CopyButton({
  content,
  className,
  showText = true,
  variant = "ghost",
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
      className={`type-body-md ${showText ? "h-7 px-2" : "size-7"} flex items-center justify-center gap-1 rounded-lg transition-[background-color,color] duration-150 ease-out ${variant === "secondary" ? "border border-line-default bg-fill-default text-content-primary hover:bg-fill-subtle" : "border border-transparent text-content-secondary hover:bg-fill-strong hover:text-content-primary"} ${className ?? ""}`}
      aria-label="Copy to clipboard"
      {...props}
    >
      {showText ? (
        <>
          {isCopied ? (
            <CheckIcon className="size-4" aria-hidden="true" />
          ) : (
            <DocumentDuplicateIcon className="size-4" aria-hidden="true" />
          )}
          <span className="font-medium">{isCopied ? "Copied" : "Copy"}</span>
        </>
      ) : isCopied ? (
          <CheckIcon className="size-4" aria-hidden="true" />
        ) : (
          <DocumentDuplicateIcon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
