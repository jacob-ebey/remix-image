import { TransformOptions } from "remix-image";

export interface ImageHandler {
  decode(buffer: ArrayBuffer): Promise<ImageData>;
  encode(image: ImageData, options: TransformOptions): Promise<ArrayBuffer>;
}
