const crispSteel = new Item("crisp-steel", Color.valueOf("c0ecff"));
Object.assign(crispSteel, {
    cost : 1.1,
});
exports.crispSteel = crispSteel;

const lightninAlloy = new Item("lightnin-alloy", Color.valueOf("FFD37F"));
Object.assign(lightninAlloy, {
    radioactivity : 0.8,
    flammability : 0.2,
    explosiveness : 0.8,
    charge : 1.3,
    cost : 1.2,
});
exports.lightninAlloy = lightninAlloy;