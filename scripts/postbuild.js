import fs from 'node:fs';

fs.mkdirSync('.vercel/output/functions/fn-1.func/_app/immutable/assets', { recursive: true });
fs.copyFileSync(
	'.vercel/output/static/_app/immutable/assets/noto-sans-v27-latin-regular.oq7JJmYe.ttf',
	'.vercel/output/functions/fn-1.func/_app/immutable/assets/noto-sans-v27-latin-regular.oq7JJmYe.ttf'
);
