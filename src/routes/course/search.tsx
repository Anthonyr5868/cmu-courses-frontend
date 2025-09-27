import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/course/search"!</div>
}
