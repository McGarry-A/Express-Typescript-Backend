import {Request} from 'express'

interface UserAuthInterface extends Request {
    user: object
}

export default UserAuthInterface