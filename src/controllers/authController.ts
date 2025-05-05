import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken';
import { responseFormat } from '../middleware/response'
import { User } from '../models/userModel'
import config from '../config/config';
export const fetchAndValidateOTP = async (req: Request, res: Response) => {
    const { phonenumber } = req.body
    console.log(phonenumber)
    if (!phonenumber) res.json(responseFormat(new Error('Input field cannot be empty'), null, {}, 404))
    const user = await User.findOne({phoneNumber: phonenumber.slice(3, 13)})
    console.log(user)
    if (user) {
        const otp = '1234'
        res.json(responseFormat(null, 'Fetching OTP' , otp, 201))
        return
    }
    res.json(responseFormat(new Error('Phone Number not found'), null, {}, 404))
}

export const verifyOTP = async (req: Request, res: Response) => {
    const { OTP, phonenumber } = req.body
    const user = await User.findOne({phoneNumber: '+918925723947'.slice(3, 13)})
    if (OTP === '1234' && user) {
        const token = sign({ userId: user.id, firstName: user.firstName, phoneNumner: '+918925723947' }, config.jwt.jwtSecret!, {
            expiresIn: '1h',
            notBefore: '0', // Cannot use before now, can be configured to be deferred.
            algorithm: 'HS256',
            audience: config.jwt.jwtAudience, // Ensure audience is defined in config
            issuer: config.jwt.jwtIssuer
        });
        res.json(responseFormat(null, 'Successfully verified!!', token, 200))
        return
    }
    res.json(responseFormat(new Error('OTP not matched'), null, {}, 404))
}

export const registerUser = (req: Request, res: Response) => {
    const { firstName, lastName, age, phoneNumber } = req.body
    console.log(req.body)
    if (!firstName || !lastName || !phoneNumber || !age ) res.json(responseFormat(new Error('Input field cannot be empty'), null, {}, 404))
    try {
        const newUser = User.create({ firstName, lastName, age, phoneNumber})
        console.log('newUser', newUser)
        res.json(responseFormat(null, 'Successfully registered!!', JSON.stringify(newUser), 200))
    } catch(error) {
        res.json(responseFormat(new Error('error while creating new user'), null, {}, 400))
    }
}

// export const fetchToken = async (req: Request, res: Response) => {
//     const { phonenumber } = req.body
//     const user = await User.findOne({phoneNumber: '+918925723947'.slice(3, 13)})
//     if (user) {
//         const token = sign({ userId: user.id, firstName: user.firstName, phoneNumner: '+918925723947' }, config.jwt.jwtSecret!, {
//             expiresIn: '1h',
//             notBefore: '0', // Cannot use before now, can be configured to be deferred.
//             algorithm: 'HS256',
//             audience: config.jwt.jwtAudience, // Ensure audience is defined in config
//             issuer: config.jwt.jwtIssuer
//         });
//         res.json(responseFormat(null, 'Successfully verified!!', token, 200))
//         return
//     }
//     res.json(responseFormat(new Error('OTP not matched'), null, {}, 404))
// }