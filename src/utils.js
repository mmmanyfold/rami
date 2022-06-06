
const getProjectPathFromName = (name) => {
    name
    .replace(/[^\w\s]/g, "")
    .replace(/^\s/g, "-");
}
