import { Accelerator } from "../accelerator/Accelerator";
import { OBJData } from "../utils/OBJLoader";
import { IndexFloatArray } from "./IndexArray";
import { TextureBuffer, AcceleratorBufferWidth, PrimitiveBufferWidth } from "./TextureBuffer";

export class Scene {
    
    faceCount: number;
    accelerateBuffer: TextureBuffer;
    primitiveBuffer: TextureBuffer;

    constructor(originData: Float32Array , public accelerator: Accelerator) {
        accelerator.feed(originData);
        this.faceCount = originData.length / 18;
        accelerator.build();
        this.accelerateBuffer = new TextureBuffer(accelerator.genAccelerateBuffer(), AcceleratorBufferWidth);
        this.primitiveBuffer = new TextureBuffer(accelerator.genPrimitiveBuffer(), PrimitiveBufferWidth);
    }

}