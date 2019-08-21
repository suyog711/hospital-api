module.exports = (newDoctor, doctorDetails) => {
    if (doctorDetails.name)
        newDoctor.name = doctorDetails.name;
    if (doctorDetails.nmcNo)
        newDoctor.nmcNo = doctorDetails.nmcNo;
    if (doctorDetails.hospitals) {
        newDoctor.hospitals = doctorDetails.hospitals;
    }
}