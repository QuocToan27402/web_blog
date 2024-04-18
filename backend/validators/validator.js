let { check } = require('express-validator');
let util = require('node:util')

let options = {
    password: {
        minLength: 8,
        minLowercase: 1,
        minSymbols: 1,
        minUppercase: 1,
        minNumbers: 1
    },
    username: {
        min: 8,
        max: 42
    }
}

let Notifies = {
    EMAIL: 'email phai dung dinh dang',
    PASSWORD: 'password dai it nhat %d ky tu, co it nhat %d chu hoa, %d chu thuong, %d ky tu, %d chu so',
    USERNAME: 'username dai %d den %d ki tu',
    ROLE: "Role Khong hop le"
}


const validatorPassword = () =>{
    return check('password', util.format(Notifies.PASSWORD, options.password.minLength,
            options.password.minUppercase, options.password.minLowercase,
            options.password.minSymbols, options.password.minNumbers)).isStrongPassword(options.password)
    
}

const validatorEmail = () => {
    return check('email', Notifies.EMAIL).isEmail();
    
}

module.exports = {validatorEmail, validatorPassword};