export type Texture = CanvasImageSource;

export class Content {
    private texturesRecord = {} as Record<string, Texture>;

    loadTextures(enumType: { [enumValue: string]: string }) {
        const textureDiv = document.getElementById('textures');

        Object.keys(enumType).map(x => enumType[x]).forEach(textureName => {
            const texture = new Image();
            texture.src = 'textures/' + textureName + '.png';
            // image.width = 64;
            // image.height = 64;
            textureDiv.append(texture);
            this.texturesRecord[textureName] = texture;
        });
    }

    getTexture(textureName: string) {
        return this.texturesRecord[textureName];
    }
}
