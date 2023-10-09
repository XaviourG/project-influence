"use client";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const RootError = ({ error, reset }: Props) => {
  console.error(error);

  return (
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
  );
};

export default RootError;
