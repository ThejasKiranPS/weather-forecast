function className(...args) {
    let classes= '';
    for(const x of args) {
        classes += `${x} `;
    }
    return classes;
}

export default className;