export default function cloudinaryLoader({
    src,
    width,
    quality,
  }: {
    src: string
    width: number
    quality?: number
  }) {
    var fileName = src.split("/").pop();
    return `./images/${fileName}`;  }