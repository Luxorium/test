class Sprite {
    constructor(pathToFile) {
        this.pathToFile = pathToFile;
    }

    load() {
        this.file = loadImage(this.pathToFile)
    }
}