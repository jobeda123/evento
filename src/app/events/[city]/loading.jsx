import SkeletonCard from '@/components/skeleton/card'
import SkeletonWrapper from '@/components/common/skeleton-wrapper'

export default function loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      <SkeletonWrapper renderTimes={6}>
        <SkeletonCard />
      </SkeletonWrapper>
    </div>
  )
}
