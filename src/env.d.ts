interface ImportMetaEnv {
  readonly ENABLE_JOBS?: string;
  readonly PUBLIC_JOBS_API_URL?: string;
  readonly PUBLIC_TURNSTILE_ENABLED?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface TurnstileWidgetOptions {
  sitekey: string;
  action?: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
}

interface Turnstile {
  render(element: HTMLElement, options: TurnstileWidgetOptions): string;
  reset(widgetId?: string): void;
  remove(widgetId?: string): void;
}

interface Window {
  turnstile?: Turnstile;
}
