import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import Header from '@/components/Header'
import Profile from '@/components/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="App h-screen flex flex-col ">
        <Header />
        <div className="md:flex flex-1 min-h-0">
          <Profile isOpen={true} onClose={() => {}} />
          <Outlet />
        </div>
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
  ),
})
