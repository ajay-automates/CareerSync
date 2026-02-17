"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h2>Something went wrong!</h2>
        <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>
          {error.message}
        </pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
