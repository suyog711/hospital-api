module.exports = (newDep, depName) => {
    if (depName) {
        newDep.name = depName;
    }
}