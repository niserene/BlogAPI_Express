
function slugify(title){
    return title.replaceAll(" ","-")
}

module.exports = {
    slugify
}