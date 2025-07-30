import type {
	ImageResponseOptions as VercelOGImageResponseOptions
} from '@vercel/og';

export type ImageResponseOptions = VercelOGImageResponseOptions & {
	fonts: NonNullable<VercelOGImageResponseOptions['fonts']>
};
