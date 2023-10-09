"use client";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = ({ error, reset }: Props) => {
  console.error(error);

  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
          }}
        >
          {error?.message}
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
