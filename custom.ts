
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#1c1f78 icon=""
namespace spriteSleep {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function sleep(sprite:Sprite): void {
        controller.moveSprite(sprite, 0, 0)
        sprite.setFlag(SpriteFlag.Ghost, true)

    }
}
