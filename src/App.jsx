
import { AuthProvider } from "./modules/auth/context/authContext"
import { NotificationProvider } from "./modules/core/context/notificationContext"





function App() {

  return (
    <AuthProvider>
        <NotificationProvider>
          <Navigation />
        </NotificationProvider>

    </AuthProvider>
  )
}

export default App
