import { type Props } from '../loaders/Latency.ts'

interface SectionProps {
  latency: Props
}

export default function Section({ latency }: SectionProps) {
  return (
    <div class="h-screen w-full gap-1 flex items-center justify-center bg-blue-100">
      <span>I waited for</span> 
      <span class="font-bold">{latency.timeout}ms</span>
    </div>
  )
}
