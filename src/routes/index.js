import Admin from '../pages/admin'
import Login from '../pages/login'
import RequireAuth from '../components/RequireAuth'

const routes= [
    {
        path: "/",
        element: <RequireAuth><Admin /></RequireAuth>,
        children:[
            
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]


export default routes