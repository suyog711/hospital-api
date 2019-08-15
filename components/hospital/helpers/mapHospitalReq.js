module.exports = (newHospital, hospitalDetail) => {
    if (hospitalDetail.name)
        newHospital.name = hospitalDetail.name;
    if (hospitalDetail.phoneNumber)
        newHospital.phoneNumber = hospitalDetail.phoneNumber;
    if (hospitalDetail.website)
        newHospital.website = hospitalDetail.website;
    if (hospitalDetail.address)
        newHospital.address = hospitalDetail.address;
    if (hospitalDetail.address2)
        newHospital.address2 = hospitalDetail.address2;
    if (hospitalDetail.city)
        newHospital.city = hospitalDetail.city;
    // if (hospitalDetail.departments)
    //     newHospital.departments = hospitalDetail.departments;
}