export const VertexBufferWidth = 1024 * 3;
export const NormalBufferWidth = 1024 * 3;
export const FaceBufferWidth = 1024 * 2;
export const AcceleratorBufferWidth = 1024 * 3;
export const MaterialBufferWidth = 1024 * 1;

export interface TextureBufferInfo {
  size: number;
  width: number;
  height: number;
}

export class TextureBuffer {

  size: number;
  width: number;
  height: number;
  data: Float32Array;

  constructor(inputData: number[] | Float32Array, bufferWidth: number) {

    // align data
    const len = inputData.length / 3;
    this.size = len;
    const lines = Math.ceil(len / bufferWidth);
    const output = new Float32Array(lines * bufferWidth * 3);
    output.set(inputData);

    this.width = bufferWidth;
    this.height = lines;
    this.data = new Float32Array(output);
  }

}