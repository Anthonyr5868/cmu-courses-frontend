import { Outlet, createRootRoute, useRouter } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import Header from '@/components/Header'
import CourseHeader from '@/components/CourseHeader'
import Profile from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const Route = createRootRoute({
  component: () => {
    const { location } = useRouter().state;
    const pathname = location.pathname;

    const header = pathname.startsWith('/course')
      ? <CourseHeader />
      : <Header />;

    return (
      <>
        <div className="App h-screen flex flex-col ">
          {header}
          <div className="md:flex flex-1 min-h-0">
            <Profile isOpen={true} onClose={() => { }} />
            <Outlet />
          </div>
          <Footer />
      </div>
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </>
    );
  },
})