const calculatedAge = (date) => {
    console.log("entrando a la funcion", date)

    const today = new Date();
    const birthday = new Date(date);
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

module.exports = calculatedAge;