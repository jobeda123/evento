import Skeleton from "../../../components/common/skeleton"

export default function loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28 w-full">
      <Skeleton className="h-8 w-[300px]" />
      <Skeleton />
      <Skeleton />
    </div>
  )
}
