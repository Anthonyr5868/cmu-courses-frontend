import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Profile from '@/components/Profile'
import Header from '@/components/Header'
import SavedCourses from '@/components/SavedCourses'

export const Route = createFileRoute('/')({
  component: App,
})

const COURSES = Array.from({ length: 10 }, () => ({
    code: `15-122`,
    title: `Principles of Imperative Computation`,
    department: 'Computer Science',
    units: 12,
    fce: 15.5,
    instructors: ['Anne Kohlbrenner', 'Iliano Cervesato']
  }))



function App() {
  return (
    <>
      <div className="App h-screen flex flex-col">
        <Header />
        <div className="md:flex flex-1 min-h-0">
          <Profile isOpen={true} onClose={() => {}} />
          <SavedCourses courses={COURSES} />
        </div>
      </div>
    </>
  )
}
