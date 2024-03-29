export default function SkeletonWrapper({
    renderTimes,
  children,
}: {
    renderTimes: number;
  children: React.ReactNode;
}) {
  return (
    <>
      {Array(renderTimes)
        .fill("")
        .map(() => children)}
    </>
  );
}
