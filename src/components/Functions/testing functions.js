const user1 = {
    name: 'Alex',
    date: 1995
};

const user2 = {
    name: 'Kate',
    date: 1993
};


 export function isObjectEmpty(obj) {
    return Object.keys(obj).length;
}


// const userSchema = yup.object().shape({
//     name: yup.string().required,
//     email: yup.string().email().required,
//     password: yup.string().min(4).max(10).required.;
// });
//

const getOlderUser = (user1, user2) => {
    if (user1.date > user2.date) {
        return user1;
    } else if (user1.date < user2.date) {
        return user2;
    } else {
        return null;
    }
};

console.log(getOlderUser(user1, user2));


const passwordGenerator = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }
    return password;
}

console.log(passwordGenerator());


const Obj = {
    error: 'Required',
    name: 'email',
    value: '',
    onChange: () => {
        return void(0);
    }
}

const ObjError = Obj.error;
delete Obj.error

const {error, ...rest} = Obj









//
//     Привет парочку задачек:
//     1. Создать два объекта с пользователями с ключами birthday и name
// и передать их на функцию getOlderUser(user1, user2). Цель функции вернуть
// тот обьект, кто из двух пользователе старше. В случае, если они ровесники вернуть null
// 2. Создать функцию, автогенератор пароля (цифры, знаки и буквы)