import { Navigate } from 'react-router-dom'
import memoryUtil from '../../utils/memory'

function RequireAuth(node) {
    const user = memoryUtil.user
    if (!user||!user.username) {
        return <Navigate to="/login"/>
    }
    return node.children
}

export default RequireAuth