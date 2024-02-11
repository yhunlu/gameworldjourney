import { noImage } from '../assets';

/**
 * Returns the URL of the cropped image.
 *
 * @param url - The original URL of the image.
 * @returns The URL of the cropped image.
 */
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  // Define the target string to search for in the URL
  const target = 'media/';

  // Find the index of the target string in the URL
  const index = url.indexOf(target) + target.length;

  // Slice the URL into three parts: before the target, the crop dimensions, and after the target
  const beforeTarget = url.slice(0, index);
  const afterTarget = url.slice(index);

  // Create the cropped image URL by concatenating the three parts
  const croppedUrl = beforeTarget + 'crop/600/400/' + afterTarget;

  // Return the cropped image URL
  return croppedUrl;
};

export default getCroppedImageUrl;
