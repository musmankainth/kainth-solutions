import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;
import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max');
}

export function getImageDimensions(source: SanityImageSource) {
  return builder.image(source);
}

export function urlForThumbnail(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max').width(600).height(400);
}

export function urlForAvatar(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('crop').width(100).height(100);
}

export function urlForCover(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max').width(1200).height(630);
}
