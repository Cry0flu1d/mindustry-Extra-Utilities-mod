const lib = require("blib");
const cor = Pal.accent;

const T2PF = extendContent(GenericSmelter, "T2-PF", {});
lib.setBuildingSimple(T2PF, GenericSmelter.SmelterBuild, {
    draw(){
        Draw.rect(Core.atlas.find("btm-T2-PF-bottom"),this.x,this.y);
        Draw.rect(Core.atlas.find("btm-T2-PF-s"), this.x, this.y, 0 + this.totalProgress * 3)
        Draw.color(Color.valueOf("fff3d6"));
        Draw.alpha(this.progress);
        Draw.rect(Core.atlas.find("btm-T2-PF-item"), this.x, this.y);
        Draw.color();
        Draw.color(cor);
        Draw.alpha(this.warmup);
        const sin = Mathf.sin(this.totalProgress, this.block.craftTime / 4, 7);
		for(var i = -1; i <= 1; i++){
			if(i == 0)continue;
			Lines.lineAngleCenter(this.x + i * sin, this.y, 90, 12);  
			Lines.lineAngleCenter(this.x, this.y + i * sin, 0, 12);  
		};
        Draw.reset();
        Draw.color(Pal.accent);
        Draw.alpha(this.warmup);

        Lines.lineAngleCenter(this.x + Mathf.sin(this.totalProgress, 5, 7), this.y, 90, this.block.size * 8 - 4);

        Draw.reset();
        Draw.rect(Core.atlas.find("btm-T2-PF-a"),this.x,this.y);
    },
});
T2PF.craftEffect = Fx.smeltsmoke;
T2PF.outputItem = new ItemStack(Items.phaseFabric, 2);
T2PF.craftTime = 96;
T2PF.size = 3;
T2PF.hasPower = true;
T2PF.ambientSound = Sounds.techloop;
T2PF.ambientSoundVolume = 0.03;
T2PF.consumes.items(ItemStack.with(
    Items.thorium, 6,
    Items.sand, 16
));
T2PF.consumes.power(7);
T2PF.itemCapacity = 32;
T2PF.requirements = ItemStack.with(
    Items.silicon, 130,
    Items.graphite, 80,
    Items.lead, 160,
    Items.thorium, 90
);
T2PF.buildVisibility = BuildVisibility.shown;
T2PF.category = Category.crafting;

exports.T2PF = T2PF;