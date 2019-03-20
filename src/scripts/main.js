const contactsList = customers.map(customers =>{
    return customers.contacts.email.map(element => {
        return element
    })
})
console.log(contactsList)