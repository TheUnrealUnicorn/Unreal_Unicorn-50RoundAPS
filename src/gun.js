exports.mod = (mod_data) => {
    let base = fileIO.readParsed(global.db.user.cache.items);

    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5abccb7dd8ce87001773e277") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
    }
    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5a17f98cfcdbcb0980087290") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("50RoundAPS");
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess(`[MOD] 50RoundAPS Applied`);
}