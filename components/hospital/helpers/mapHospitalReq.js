module.exports = (newHospital, hospitalDetails) => {
    if (hospitalDetails.name)
        newHospital.name = hospitalDetails.name;
    if (hospitalDetails.phoneNumber)
        newHospital.phoneNumber = hospitalDetails.phoneNumber;
    if (hospitalDetails.website)
        newHospital.website = hospitalDetails.website;
    if (hospitalDetails.address)
        newHospital.address = hospitalDetails.address;
    if (hospitalDetails.address2)
        newHospital.address2 = hospitalDetails.address2;
    if (hospitalDetails.city)
        newHospital.city = hospitalDetails.city;
    // if (hospitalDetails.departments)
    //     newHospital.departments = hospitalDetails.departments;
}