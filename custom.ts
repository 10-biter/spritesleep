//% color=#1c1f78 icon=""
namespace spriteSleep {
    //% block
    export function sleep(sprite:Sprite): void {
        controller.moveSprite(sprite, 0, 0)
        sprite.setFlag(SpriteFlag.Ghost, true)
    }
    


    export function wakeUp(sprite:Sprite): void {
        controller.moveSprite(sprite)
        sprite.setFlag(SpriteFlag.Ghost, false)
    }
}
