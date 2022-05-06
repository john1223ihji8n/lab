// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "vb":
            case "nivel1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020101010102010201010201020102010201010201020102010102010202020102020202010201020102020101020201010102020202010201020201020201010102020201020102020202020102020201010101010201020102010101010101010202020102010101020101020201020201010202020202020202020202010101020101010101010201010102020102020201010201010102020101020201010102010102010201010201010201010202020202020102020202020202020102010102010101010101020101020201010101010101010101010202010102020202020102020201020101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "juan":
            case "level1":return tiles.createTilemap(hex`1000100002090909090909090909090909090903040a0a010a0a0a010a0a0a010a0a0a0804010a0101010a010a0101010a010a0804010a010a010a010a010a010a010a08040101010a010a010a010a010a010a0804010a0a0a010a0a0a010a0a0a010a080401010a010101010101010101010a08040a0a0a0a0a010a0a0a0a0a0a0a0a080a0a0101010101010101010101010108040a0a0a0a0101010a010a0a0a010108040a01010a0101010a0a01010a0a0a08040a0a0a0a0a0a0a0a0101010a010108040101010a0101010a0101010a0a0a08040101010a0101010a010a0101010108040101010a0a0a0a0a010a010a01010805060606060606060606060606060607`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.builtin.forestTiles0], TileScale.Sixteen);
            case "ko":
            case "nivel2":return tiles.createTilemap(hex`1000100005050505050505050505050505050505040606060501010606050606060606050406010605060606060501050505050505050605050606060605010501010605050606060505050505050106010106050506060605060606060501050101060505050605050606060605010506060605050606060501060606060105010606050506060605060505050505050505060505060606050606060506010101060605050606060606060605050505050506050505050505060505050506010106060505060106050605010105060101060605050606060506050606050606060606050501060605060501010506010101060505050505050505050505050505050302`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
