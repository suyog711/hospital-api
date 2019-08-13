module.exports = (newHospital, hospitalDetails) => {
    if (hospitalDetails.name)
        newHospital.name = hospitalDetails.name;
    if (hospitalDetails.verificationType)
        newHospital.verificationType = hospitalDetails.verificationType;
    if (hospitalDetails.verificationNumber)
        newHospital.verificationNumber = hospitalDetails.verificationNumber;
    if (hospitalDetails.phoneNumber)
        newHospital.phoneNumber = hospitalDetails.phoneNumber;
    if (hospitalDetails.phoneNumber2)
        newHospital.phoneNumber2 = hospitalDetails.phoneNumber2;
    if (hospitalDetails.emergencyNumber)
        newHospital.emergencyNumber = hospitalDetails.emergencyNumber;
    if (hospitalDetails.email)
        newHospital.email = hospitalDetails.email;
    if (hospitalDetails.website)
        newHospital.website = hospitalDetails.website;
    if (hospitalDetails.address)
        newHospital.address = hospitalDetails.address;
    if (hospitalDetails.address2)
        newHospital.address2 = hospitalDetails.address2;
    if (hospitalDetails.city)
        newHospital.city = hospitalDetails.city;
    if (hospitalDetails.state)
        newHospital.state = hospitalDetails.state;
    if (hospitalDetails.description)
        newHospital.description = hospitalDetails.description;
    if (hospitalDetails.departments)
        newHospital.departments = hospitalDetails.departments;
}