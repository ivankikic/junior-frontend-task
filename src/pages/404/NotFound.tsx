import { NotFoundContainer } from './NotFoundStyles'

const NotFound = () => {
    return (
        <NotFoundContainer>
            <h1>Oops! Page not found</h1>
            <h5>Go to <a href='/'>Home</a></h5>
        </NotFoundContainer>
    )
}

export default NotFound